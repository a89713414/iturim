import { FC, JSX } from "react";
import clsx from "clsx";
import { FormField } from "./FormField";

interface SelectProps {
  label: string;
  name: string;
  required?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Select: ({
  label,
  name,
  required,
  children,
  className,
}: SelectProps) => JSX.Element = ({ label, name, required = false, children, className }) => {
  const selectId = `select-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <FormField label={label} required={required} id={selectId}>
      <div className="relative">
        <select
          id={selectId}
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
            "appearance-none",
            "pl-4",
            "pr-8",
            'bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgOCA2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDBMNCA2TDggMCIgZmlsbD0iIzAwMDAwMCIvPjwvc3ZnPg==")]',
            "bg-no-repeat",
            "rtl:bg-[center_left_0.75rem]",
            "ltr:bg-[center_right_0.75rem]",
            className
          )}
        >
          {children}
        </select>
      </div>
    </FormField>
  );
};
