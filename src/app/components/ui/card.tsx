import React from "react";
import clsx from "clsx";

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={clsx(
      "rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md transition-all duration-300",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div className={clsx("p-6 pb-3", className)} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => (
  <h3 className={clsx("text-xl font-bold text-slate-100", className)} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className,
  ...props
}) => (
  <p className={clsx("text-sm text-slate-400 leading-relaxed", className)} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div className={clsx("p-6 pt-0", className)} {...props}>
    {children}
  </div>
);