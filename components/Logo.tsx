interface LogoProps {
  size?: number;
  className?: string;
}

export function LogoLotus({ size = 32, className = "" }: LogoProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-md border border-primary/40 bg-accent font-mono text-[0.65rem] font-semibold tracking-[-0.08em] text-accent-foreground ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      NH
    </span>
  );
}
