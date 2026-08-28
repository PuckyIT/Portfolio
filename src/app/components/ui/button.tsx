import React from "react";
import clsx from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan" | "default";
  size?: "sm" | "md" | "lg" | "icon" | "small" | "medium" | "large";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  let variantStyles = "bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 shadow-lg shadow-cyan-500/20";

  if (variant === "secondary") {
    variantStyles = "bg-slate-800/80 text-slate-200 hover:bg-slate-700/80 hover:text-white border border-slate-700/60";
  } else if (variant === "outline") {
    variantStyles = "border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400";
  } else if (variant === "ghost") {
    variantStyles = "text-slate-300 hover:text-white hover:bg-slate-800/60";
  } else if (variant === "cyan") {
    variantStyles = "bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-semibold hover:from-cyan-400 hover:to-blue-400 shadow-lg shadow-cyan-500/25";
  }

  let sizeStyles = "px-4 py-2.5 text-sm";
  if (size === "sm" || size === "small") sizeStyles = "px-3 py-1.5 text-xs";
  if (size === "lg" || size === "large") sizeStyles = "px-6 py-3.5 text-base";
  if (size === "icon") sizeStyles = "p-2.5";

  return (
    <button className={clsx(baseStyles, variantStyles, sizeStyles, className)} {...props}>
      {children}
    </button>
  );
};