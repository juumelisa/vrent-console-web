import { ChangeEvent } from "react";

interface Props {
  label?: string;
  name?: string,
  type?: string,
  placeholder?: string,
  required?: boolean,
  value: string | number,
  minLength?: number,
  onChange: (e: string) => void
}

export default function Input ({
  label,
  name,
  type = "text",
  placeholder = "Input here",
  required,
  value,
  minLength,
  onChange
}: Props) {
  const requiredLength = minLength ? minLength : required ? 1 : 0
  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    onChange(inputValue)
  }
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 font-semibold capitalize">
        {label}
        {required && <span className="text-red-600"> *</span>}
      </label>}
      <input
        className="w-full border border-line rounded px-3 py-2 outline-0"
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onValueChange}
        minLength={requiredLength}
        name={name}
      />
    </div>
  )
}