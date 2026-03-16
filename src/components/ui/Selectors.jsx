// ─── Radio Group ──────────────────────────────────────────────────
export const RadioGroup = ({ name, options, value, onChange, error, inline = false }) => (
  <div className={`flex flex-wrap gap-2 ${inline ? 'flex-row' : 'flex-col'}`}>
    {options.map((opt) => {
      const val   = typeof opt === 'object' ? opt.value : opt
      const label = typeof opt === 'object' ? opt.label : opt
      const sel   = value === val
      return (
        <label
          key={val}
          className={`
            flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg border text-sm
            transition-all duration-150 select-none
            ${sel
              ? 'bg-teal-pale border-teal text-teal font-semibold'
              : `bg-slate-50 border-slate-line text-slate-dim hover:border-teal/40 hover:bg-white
                 ${error ? 'border-error' : ''}`
            }
          `}
        >
          <input
            type="radio" name={name} value={val}
            checked={sel} onChange={() => onChange(val)}
            className="w-3.5 h-3.5 flex-shrink-0"
          />
          {label}
        </label>
      )
    })}
  </div>
)

// ─── Checkbox Group ───────────────────────────────────────────────
export const CheckboxGroup = ({ options, values = [], onChange, columns = 2, error }) => (
  <div>
    <div className={`grid gap-2`} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {options.map((opt) => {
        const val   = typeof opt === 'object' ? opt.value : opt
        const label = typeof opt === 'object' ? opt.label : opt
        const sel   = values.includes(val)
        return (
          <label
            key={val}
            className={`
              flex items-start gap-2 cursor-pointer px-3 py-2 rounded-lg border text-sm
              transition-all duration-150 select-none leading-snug
              ${sel
                ? 'bg-teal-pale border-teal text-teal font-semibold'
                : 'bg-slate-50 border-slate-line text-slate-dim hover:border-teal/40 hover:bg-white'
              }
            `}
          >
            <input
              type="checkbox" checked={sel}
              onChange={() => onChange(sel ? values.filter(v => v !== val) : [...values, val])}
              className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
            />
            {label}
          </label>
        )
      })}
    </div>
    {error && <p className="flex items-center gap-1 text-xs font-medium text-error mt-1.5">⚠ {error}</p>}
  </div>
)
