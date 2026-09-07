import { cn } from "@/lib/utils";

/**
 * Zemin `carbon`, kenarlık `line-strong`: alan içinde bulunduğu charcoal
 * panelden ayrışsın diye. Eski `bg-charcoal` + `border-line` kombinasyonu
 * panelle aynı renkteydi ve kenarlık kontrastı 1.16:1'de kalıyordu (WCAG 1.4.11: 3:1).
 */
const fieldCls =
  "w-full border border-line-strong bg-carbon px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-steel/80 transition-colors duration-200 focus:border-lime";

const labelCls =
  "mb-2 block text-[0.8125rem] font-medium uppercase tracking-[0.1em] text-steel";

export function FormField({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  options,
  error,
  value,
  onChange,
  min,
}: {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "date" | "select" | "textarea";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  error?: string;
  value?: string;
  onChange?: (v: string) => void;
  min?: string;
}) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  // Hatalı alan hem programatik olarak işaretlenir hem de açıklamayla bağlanır.
  const a11y = {
    "aria-invalid": error ? (true as const) : undefined,
    "aria-describedby": error ? errorId : undefined,
  };

  return (
    <div>
      <label htmlFor={id} className={labelCls}>
        {label}{" "}
        {required && (
          <span className="text-lime" aria-hidden>
            *
          </span>
        )}
        {required && <span className="sr-only">(zorunlu)</span>}
      </label>
      {type === "select" ? (
        <select
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          {...a11y}
          className={cn(
            fieldCls,
            !value && "text-steel/80",
            error && "border-[#ff6b6b]"
          )}
        >
          <option value="" disabled>
            {placeholder ?? "Seçiniz"}
          </option>
          {options?.map((o) => (
            <option key={o} value={o} className="text-ink">
              {o}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          {...a11y}
          className={cn(fieldCls, "resize-none", error && "border-[#ff6b6b]")}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          min={min}
          onChange={(e) => onChange?.(e.target.value)}
          {...a11y}
          className={cn(fieldCls, error && "border-[#ff6b6b]")}
        />
      )}
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-[#ff6b6b]">
          {error}
        </p>
      )}
    </div>
  );
}
