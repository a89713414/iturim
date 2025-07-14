import { FC, JSX } from "react";
import clsx from "clsx";
import { FormField } from "./FormField";

interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: "text" | "email";
  className?: string;
}

export const Input: ({
  label,
  name,
  placeholder,
  required,
  type,
  className,
}: {
  label: any;
  name: any;
  placeholder?: any;
  required?: any;
  type?: any;
  className?: any;
}) => JSX.Element = ({ label, name, placeholder, required = false, type = "text", className }) => {
  const inputId = `input-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <FormField label={label} required={required} id={inputId}>
      <input
        id={inputId}
        name={name}
        type={type}
        className={clsx(
          "w-full",
          "border",
          "rounded",
          "px-3",
          "py-2",
          "bg-white/80",
          "border-primary",
          "outline-none",
          className
        )}
        placeholder={placeholder}
        required={required}
      />
    </FormField>
  );
};
