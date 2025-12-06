import { ReactNode } from "react";

const variantClass = {
  primary: "bg-(--primary)",
  secondary: "bg-(--secondary)",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`text-center hover:brightness-90 disabled:opacity-50 cursor-pointer ${variantClass[variant]} w-full font-medium text-sm py-2.5 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
