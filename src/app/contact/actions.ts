"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX = {
  name: 200,
  email: 320,
  phone: 30,
  message: 5000,
} as const;

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export type ContactFormState = {
  success: boolean;
  error?: string;
} | null;

export async function submitContact(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const message = formData.get("message")?.toString().trim();
  const captchaToken = formData.get("cf-turnstile-response")?.toString();

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (
    name.length > MAX.name ||
    email.length > MAX.email ||
    (phone && phone.length > MAX.phone) ||
    message.length > MAX.message
  ) {
    return {
      success: false,
      error: "One or more fields exceed the maximum allowed length.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (!captchaToken) {
    return {
      success: false,
      error: "Please complete the captcha verification.",
    };
  }

  const captchaVerify = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY!,
        response: captchaToken,
      }),
    },
  );

  const captchaData = (await captchaVerify.json()) as {
    success: boolean;
    "error-codes"?: string[];
  };
  if (!captchaData.success) {
    console.error("Turnstile verification failed:", captchaData["error-codes"]);
    return {
      success: false,
      error: "Captcha verification failed. Please try again.",
    };
  }

  const toEmail = process.env.CONTACT_EMAIL;
  if (!toEmail) {
    console.error("CONTACT_EMAIL env var is not set");
    return {
      success: false,
      error:
        "Your message can't be sent right now due to a server configuration issue. Please try again later.",
    };
  }
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "ToddTech LLC <noreply@toddtech.llc>";

  const safeName = esc(name);
  const safeEmail = esc(email);
  const safePhone = phone ? esc(phone) : "";
  const safeMessage = esc(message);
  const mailtoHref = `mailto:${encodeURIComponent(email)}`;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `TODDTECH Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0f172a; color: #e2e8f0; border-radius: 8px;">
          <h2 style="color: #22d3ee; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; width: 100px;"><strong>Name:</strong></td>
              <td style="padding: 8px 0;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8;"><strong>Email:</strong></td>
              <td style="padding: 8px 0;"><a href="${mailtoHref}" style="color: #22d3ee;">${safeEmail}</a></td>
            </tr>
            ${safePhone ? `<tr><td style="padding: 8px 0; color: #94a3b8;"><strong>Phone:</strong></td><td style="padding: 8px 0;">${safePhone}</td></tr>` : ""}
          </table>
          <hr style="border-color: #1e293b; margin: 16px 0;" />
          <p style="color: #94a3b8; margin-bottom: 8px;"><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #1e293b; padding: 16px; border-radius: 6px; border-left: 3px solid #22d3ee;">${safeMessage}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error("Resend error:", err);
    return {
      success: false,
      error: "Failed to send your message. Please try again later.",
    };
  }
}
