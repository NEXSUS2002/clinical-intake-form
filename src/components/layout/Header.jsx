import { getCaseTypeColor, getCaseTypeLabel } from '../../utils/helpers'

export const Header = ({ caseId, caseType, today }) => {
  const color = caseType ? getCaseTypeColor(caseType) : null
  const label = caseType ? getCaseTypeLabel(caseType) : null

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-lg shadow-navy/30">
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between gap-3">

        {/* Brand */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="w-9 h-9 rounded-lg bg-teal flex items-center justify-center text-lg shadow-md flex-shrink-0">
            🧠
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-white leading-none">ClinPsych Portal</p>
            <p className="text-[10px] text-white/40 uppercase tracking-widest">Intake System</p>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 flex-wrap justify-end">
          <span className="text-[11px] text-white/40 whitespace-nowrap hidden sm:block">
            ID: <strong className="text-teal-light">{caseId}</strong>
          </span>
          <span className="text-[11px] text-white/40 whitespace-nowrap hidden sm:block">
            <strong className="text-white">{today}</strong>
          </span>
          {label && (
            <span
              className="text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap"
              style={{ background: `${color}22`, border: `1px solid ${color}44`, color: '#A5F3FC' }}
            >
              {label}
            </span>
          )}
        </div>
      </div>
    </header>
  )
}
