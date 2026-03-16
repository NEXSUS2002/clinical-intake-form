import { FORM_STEPS } from '../../constants/formOptions'

export const ProgressBar = ({ currentStep, totalSteps }) => {
  const pct = Math.round(((currentStep - 1) / (totalSteps - 1)) * 100)

  return (
    <div className="bg-white rounded-xl p-4 shadow-card mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[11px] font-bold text-teal uppercase tracking-widest">Progress</span>
        <span className="text-xs text-slate-dim">{currentStep} / {totalSteps} sections</span>
      </div>

      {/* Track */}
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-gradient-to-r from-teal to-teal-light rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Step chips */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
        {FORM_STEPS.map((s) => {
          const done   = s.id < currentStep
          const active = s.id === currentStep
          return (
            <span
              key={s.id}
              className={`text-[10px] font-medium whitespace-nowrap flex-shrink-0 transition-colors ${
                active ? 'text-teal font-bold' : done ? 'text-teal-light' : 'text-slate-300'
              }`}
            >
              {active ? '▶ ' : done ? '✓ ' : '○ '}{s.label}
            </span>
          )
        })}
      </div>
    </div>
  )
}
