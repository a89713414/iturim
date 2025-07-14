import { FC } from "react";
import clsx from "clsx";
import { FormField } from "./FormField";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  options: RadioOption[];
  required?: boolean;
  className?: string;
}

export const RadioGroup: FC<RadioGroupProps> = ({
  label,
  name,
  options,
  required = false,
  className,
}) => {
  const groupId = `radio-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <FormField label={label} required={required} id={groupId}>
      <div className={clsx("flex", "gap-6", "mt-3", className)}>
        {options.map(({ value, label }, idx) => (
          <label
            key={value}
            className={clsx("inline-flex", "items-center", "font-semibold", "cursor-pointer")}
          >
            <input
              type="radio"
              name={name}
              value={value}
              className={clsx("w-4", "h-4", "text-primary")}
              defaultChecked={idx === 0}
            />
            <span className="ms-1">{label}</span>
          </label>
        ))}
      </div>
    </FormField>
  );
};
