// ─── Label ───────────────────────────────────────────────────────
export const Label = ({ children, required, htmlFor }) => (
  <label htmlFor={htmlFor} className="block text-xs font-semibold text-navy tracking-wide mb-1">
    {children}
    {required && <span className="text-error ml-0.5">*</span>}
  </label>
)

// ─── Hint ────────────────────────────────────────────────────────
export const Hint = ({ children }) => (
  <p className="text-xs text-slate-dim italic mb-1.5 leading-relaxed">{children}</p>
)

// ─── Error Message ────────────────────────────────────────────────
export const ErrorMessage = ({ message }) => {
  if (!message) return null
  return (
    <p className="flex items-center gap-1 text-xs font-medium text-error mt-1.5">
      <span aria-hidden="true">⚠</span>
      {message}
    </p>
  )
}

// ─── Divider ──────────────────────────────────────────────────────
export const Divider = ({ label }) => (
  <div className="flex items-center gap-3 my-6">
    <div className="flex-1 h-px bg-slate-line" />
    {label && (
      <span className="text-[11px] font-bold text-slate-dim tracking-widest uppercase whitespace-nowrap flex-shrink-0">
        {label}
      </span>
    )}
    <div className="flex-1 h-px bg-slate-line" />
  </div>
)

// ─── Field Group ──────────────────────────────────────────────────
export const FieldGroup = ({ label, required, hint, error, children, className = '' }) => (
  <div className={`mb-5 ${className}`}>
    {label && <Label required={required}>{label}</Label>}
    {hint  && <Hint>{hint}</Hint>}
    {children}
    <ErrorMessage message={error} />
  </div>
)

// ─── Info Box ─────────────────────────────────────────────────────
const INFO_VARIANTS = {
  teal:    'bg-teal-pale border border-teal/20 text-teal [&_h4]:text-teal',
  warn:    'bg-warn-bg border border-warn-line text-amber-900 [&_h4]:text-warn',
  danger:  'bg-error-bg border border-error-line text-red-900 [&_h4]:text-error',
  neutral: 'bg-slate-50 border border-slate-200 text-slate-dim',
}

export const InfoBox = ({ children, variant = 'teal' }) => (
  <div className={`rounded-xl p-4 mb-4 ${INFO_VARIANTS[variant] || INFO_VARIANTS.teal}`}>
    {children}
  </div>
)

// ─── Badge ────────────────────────────────────────────────────────
export const Badge = ({ children, colorHex }) => (
  <span
    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border"
    style={{
      background: `${colorHex}18`,
      borderColor: `${colorHex}40`,
      color: colorHex,
    }}
  >
    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: colorHex }} />
    {children}
  </span>
)
