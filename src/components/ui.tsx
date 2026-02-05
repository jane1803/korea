import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Badge({
  className,
  ...props
}: ComponentProps<"span"> & { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/70 px-3 py-1 text-xs font-medium text-ink-700 shadow-[0_1px_0_rgba(10,20,40,0.03)] backdrop-blur",
        className
      )}
      {...props}
    />
  );
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ComponentProps<typeof Link> & {
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:pointer-events-none";
  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-11 px-5 text-sm"
  } as const;
  const variants = {
    primary:
      "bg-ink-950 text-white shadow-soft hover:translate-y-[-1px] hover:shadow-[0_18px_40px_rgba(10,20,40,0.18)]",
    secondary:
      "bg-white text-ink-950 ring-1 ring-ink-200 hover:bg-ink-50 hover:translate-y-[-1px]",
    ghost: "bg-transparent text-ink-800 hover:bg-ink-50"
  } as const;

  return (
    <Link
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    />
  );
}

export function Card({
  className,
  ...props
}: ComponentProps<"div"> & { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl2 border border-ink-100 bg-white/80 p-5 shadow-[0_10px_30px_rgba(10,20,40,0.06)] backdrop-blur",
        className
      )}
      {...props}
    />
  );
}

export function SectionTitle({
  eyebrow,
  title,
  desc
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-xs font-semibold tracking-wide text-brand-700">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-balance text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl">
        {title}
      </h2>
      {desc ? (
        <p className="mt-3 text-pretty text-sm leading-6 text-ink-700 sm:text-base">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

