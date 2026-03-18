// ─── Radio Group ──────────────────────────────────────────────────
export const RadioGroup = ({
  name,
  options,
  value,
  onChange,
  error,
  inline = false,
}) => (
  <div className={`flex flex-wrap gap-2 ${inline ? "flex-row" : "flex-col"}`}>
    {options.map((opt) => {
      const val = typeof opt === "object" ? opt.value : opt;
      const label = typeof opt === "object" ? opt.label : opt;
      const sel = value === val;
      return (
        <label
          key={val}
          className={[
            "flex items-center gap-2 cursor-pointer px-3 py-2.5 rounded-lg border text-sm",
            "transition-all duration-150 select-none",
            sel
              ? "bg-teal-pale border-teal text-teal font-semibold"
              : `bg-slate-50 border-slate-line text-slate-dim hover:border-teal/40 hover:bg-white ${error ? "border-error" : ""}`,
          ].join(" ")}
        >
          <input
            type="radio"
            name={name}
            value={val}
            checked={sel}
            onChange={() => onChange(val)}
            className="w-4 h-4 shrink-0"
          />
          {label}
        </label>
      );
    })}
  </div>
);

// ─── Checkbox Group ───────────────────────────────────────────────
const COL_CLASSES = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4",
};

export const CheckboxGroup = ({
  options,
  values = [],
  onChange,
  columns = 2,
}) => (
  <div className={`grid gap-2 ${COL_CLASSES[columns] ?? COL_CLASSES[2]}`}>
    {options.map((opt) => {
      const val = typeof opt === "object" ? opt.value : opt;
      const label = typeof opt === "object" ? opt.label : opt;
      const sel = values.includes(val);
      return (
        <label
          key={val}
          className={[
            "flex items-start gap-2 cursor-pointer px-3 py-2.5 rounded-lg border text-sm",
            "transition-all duration-150 select-none leading-snug",
            sel
              ? "bg-teal-pale border-teal text-teal font-semibold"
              : "bg-slate-50 border-slate-line text-slate-dim hover:border-teal/40 hover:bg-white",
          ].join(" ")}
        >
          <input
            type="checkbox"
            checked={sel}
            onChange={() =>
              onChange(sel ? values.filter((v) => v !== val) : [...values, val])
            }
            className="w-4 h-4 shrink-0 mt-0.5"
          />
          {label}
        </label>
      );
    })}
  </div>
);
