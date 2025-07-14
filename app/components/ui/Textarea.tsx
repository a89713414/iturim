import { FC, JSX } from "react";
import clsx from "clsx";
import { FormField } from "./FormField";

interface TextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export const Textarea: ({
  label,
  placeholder,
  required,
  className,
}: TextareaProps) => JSX.Element = ({ label, name, placeholder, required = false, className }) => {
  const textareaId = `textarea-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <FormField label={label} required={required} id={textareaId}>
      <textarea
        id={textareaId}
        name={name}
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
        rows={4}
      />
    </FormField>
  );
};
