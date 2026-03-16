export const SectionCard = ({ title, subtitle, icon, step, totalSteps, children }) => (
  <div className="animate-fade-in-up bg-white rounded-2xl shadow-card overflow-hidden">
    {/* Header */}
    <div className="bg-gradient-to-br from-navy to-navy-light px-7 py-5 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -right-5 -top-5 w-28 h-28 rounded-full bg-white/[0.04] pointer-events-none" />
      <div className="absolute right-14 -bottom-6 w-18 h-18 rounded-full bg-white/[0.03] pointer-events-none" />

      <div className="flex items-start gap-4 relative">
        <div className="w-11 h-11 rounded-xl bg-teal flex items-center justify-center text-xl flex-shrink-0 shadow-teal shadow-sm">
          {icon}
        </div>
        <div>
          <p className="text-[10px] font-bold text-teal-light uppercase tracking-widest mb-1">
            Step {step} of {totalSteps}
          </p>
          <h2 className="font-display text-xl font-semibold text-white leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs text-white/55 mt-1">{subtitle}</p>
          )}
        </div>
      </div>
    </div>

    {/* Body */}
    <div className="px-7 py-6">{children}</div>
  </div>
)
