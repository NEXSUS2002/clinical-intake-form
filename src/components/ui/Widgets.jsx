// ─── Scale Input (1–N rating) ─────────────────────────────────────
export const ScaleInput = ({ value, onChange, min = 1, max = 5 }) => (
  <div className="flex items-center gap-2 flex-wrap">
    <span className="text-xs text-slate-dim">Poor ({min})</span>
    {Array.from({ length: max - min + 1 }, (_, i) => i + min).map((n) => {
      const sel = value === n
      return (
        <button
          key={n} type="button"
          onClick={() => onChange(n)}
          aria-label={`Rating ${n}`}
          className={`
            w-9 h-9 rounded-full border-2 text-sm font-bold flex-shrink-0
            transition-all duration-150 cursor-pointer
            ${sel
              ? 'bg-teal border-teal text-white shadow-teal shadow-sm'
              : 'bg-white border-slate-line text-slate-dim hover:border-teal hover:text-teal'
            }
          `}
        >
          {n}
        </button>
      )
    })}
    <span className="text-xs text-slate-dim">Excellent ({max})</span>
  </div>
)

// ─── Table Input (radio per row) ──────────────────────────────────
export const TableInput = ({ headers, rows, data, onChange }) => (
  <div className="table-scroll rounded-xl border border-slate-line overflow-hidden">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr>
          <th className="text-left px-4 py-2.5 bg-navy text-white font-semibold text-xs tracking-wide min-w-[180px]">
            Item
          </th>
          {headers.map((h, i) => (
            <th key={i} className="px-3 py-2.5 bg-navy text-white font-semibold text-xs text-center tracking-wide whitespace-nowrap">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => {
          const key   = typeof row === 'object' ? row.key   : row
          const label = typeof row === 'object' ? row.label : row
          return (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
              <td className="px-4 py-2.5 text-navy font-medium border-b border-slate-100 text-[13px]">
                {label}
              </td>
              {headers.map((col, ci) => {
                const colKey  = typeof col === 'object' ? col.key : col
                const checked = data[key] === colKey
                return (
                  <td key={ci} className="px-3 py-2.5 text-center border-b border-slate-100">
                    <input
                      type="radio"
                      name={`tbl_${key}`}
                      checked={checked}
                      onChange={() => onChange(key, colKey)}
                      aria-label={`${label} - ${colKey}`}
                      className="w-4 h-4 cursor-pointer"
                    />
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)
