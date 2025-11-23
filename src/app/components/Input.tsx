interface Props {
  label?: string;
  type?: string,
  placeholder?: string,
  required?: boolean
}

export default function Input ({
  label,
  type = "text",
  placeholder = "Input here",
  required
}: Props) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 font-semibold capitalize">{label}</label>}
      <input
        className="w-full border border-line rounded px-3 py-2"
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}