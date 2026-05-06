export function Tag({ label }: { label: string }) {
  return (
    <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
      {label}
    </span>
  );
}

export default Tag;
