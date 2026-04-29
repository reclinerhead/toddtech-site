"use client";

import { useActionState, useState } from "react";
import { submitContact, type ContactFormState } from "./actions";
import { Turnstile } from "@marsidev/react-turnstile";

const inputClass =
  "w-full bg-gray-800/60 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors";

const labelClass = "block text-sm font-medium text-gray-300 mb-1.5";

export function ContactForm() {
  const [state, formAction, pending] = useActionState<
    ContactFormState,
    FormData
  >(submitContact, null);
  const [captchaToken, setCaptchaToken] = useState("");
  const [phone, setPhone] = useState("");

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits.length ? `(${digits}` : "";
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  if (state?.success) {
    return (
      <div className="text-center py-12">
        <div className="text-cyan-400 text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
        <p className="text-gray-400 max-w-md mx-auto">
          Thanks for reaching out. We&apos;ll get back to you within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-cyan-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-cyan-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone Number{" "}
          <span className="text-gray-600 font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(555) 555-5555"
          value={phone}
          onChange={(e) => setPhone(formatPhone(e.target.value))}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          How can we help? <span className="text-cyan-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your IT needs, current challenges, or what you're looking to achieve..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <input type="hidden" name="cf-turnstile-response" value={captchaToken} />

      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onSuccess={(token) => setCaptchaToken(token)}
        onError={() => setCaptchaToken("")}
        onExpire={() => setCaptchaToken("")}
        options={{
          theme: "dark",
          size: "normal",
        }}
      />

      {state?.error && (
        <p className="text-red-400 text-sm bg-red-950/30 border border-red-800/50 rounded-lg px-4 py-3">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending || !captchaToken}
        className="w-full bg-cyan-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/20"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
