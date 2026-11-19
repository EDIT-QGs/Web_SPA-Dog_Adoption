import React from "react";

// Contrato de propriedades via interface TypeScript
export interface BadgeProps {
  label?: string;
  children?: React.ReactNode;
  variant?: "success" | "warning" | "neutral";
  className?: string;
}

// Componente atómico funcional renderizando TSX com Tailwind CSS
export const Badge: React.FC<BadgeProps> = ({
  label,
  children,
  variant = "neutral",
  className = "",
}) => {
  // Variantes inspiradas no Figma: verde floresta, creme/âmbar e neutro
  const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
    success: "bg-emerald-900 text-emerald-50 border-emerald-800",
    warning: "bg-amber-100 text-amber-900 border-amber-300",
    neutral: "bg-stone-200 text-stone-800 border-stone-300",
  };

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {label || children}
    </span>
  );
};

export default Badge;