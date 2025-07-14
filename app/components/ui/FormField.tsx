import { JSX } from "react";
import clsx from "clsx";

interface FormFieldProps {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export const FormField: ({
  label,
  required,
  className,
  children,
  id,
}: FormFieldProps) => JSX.Element = ({ label, required = false, className, children, id }) => {
  const fieldId = id || `field-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className={clsx("mb-4", className)}>
      <label
        htmlFor={fieldId}
        className={clsx("block", "text-[18px]", "font-semibold", "mb-1", "cursor-pointer")}
      >
        {label}
        {required && <span className={clsx("text-black", "ms-2")}>*</span>}
      </label>
      {children}
    </div>
  );
};
