/* eslint-disable @typescript-eslint/no-empty-object-type */
// src/components/ui/card.tsx
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Card: React.FC<CardProps> = ({ children, className, ...props }) => (
  <div className={`rounded-lg shadow-md bg-white p-4 ${className}`} {...props}>
    {children}
  </div>
);

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export const CardHeader: React.FC<CardHeaderProps> = ({ children, ...props }) => (
  <div className="mb-4" {...props}>
    {children}
  </div>
);

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
export const CardTitle: React.FC<CardTitleProps> = ({ children, ...props }) => (
  <h3 className="text-xl font-bold" {...props}>
    {children}
  </h3>
);

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export const CardDescription: React.FC<CardDescriptionProps> = ({ children, ...props }) => (
  <p className="text-gray-600" {...props}>
    {children}
  </p>
);

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export const CardContent: React.FC<CardContentProps> = ({ children, ...props }) => (
  <div {...props}>
    {children}
  </div>
);