// src/components/ui/button.tsx
import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "icon" | "small" | "medium" | "large";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "medium",
  className,
  children,
  ...props
}) => {
  const baseStyles = "rounded-md font-medium transition-colors focus:outline-none";
  const variantStyles = variant === "outline" 
    ? "border border-gray-300 text-gray-700" 
    : "bg-blue-600 text-white hover:bg-blue-700";
  const sizeStyles = size === "icon" 
    ? "p-2" 
    : size === "small" 
    ? "px-3 py-1 text-sm" 
    : size === "large" 
    ? "px-6 py-3 text-lg" 
    : "px-4 py-2";

  return (
    <button
      className={clsx(baseStyles, variantStyles, sizeStyles, className)}
      {...props}
    >
      {children}
    </button>
  );
};