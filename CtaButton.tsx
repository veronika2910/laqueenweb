import { Link } from "wouter";
import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  size?: "default" | "lg";
  className?: string;
  testId?: string;
};

const base =
  "inline-flex items-center justify-center gap-3 uppercase tracking-[2.5px] font-semibold transition-all duration-300 group";

const variants = {
  solid: "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20",
  outline: "border border-primary text-primary hover:bg-primary hover:text-white",
};

const sizes = {
  default: "px-8 py-4 text-[11px]",
  lg: "px-10 py-5 text-[12px]",
};

export default function CtaButton({
  href,
  children,
  variant = "solid",
  size = "default",
  className = "",
  testId,
}: CtaButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} data-testid={testId}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} data-testid={testId}>
      {children}
    </Link>
  );
}
