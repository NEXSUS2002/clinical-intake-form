export const NavButtons = ({ onPrev, onNext, onSubmit, isFirst, isLast, isSubmitting }) => (
  <div className="flex items-center justify-between gap-3 mt-8 pt-5 border-t border-slate-100 flex-wrap">
    <button
      type="button"
      onClick={onPrev}
      disabled={isFirst}
      className="px-5 py-2.5 rounded-lg border border-slate-line bg-white text-slate-dim text-sm font-semibold
                 transition-colors hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
    >
      ← Previous
    </button>

    <div className="flex gap-2.5 flex-wrap">
      <button
        type="button"
        onClick={() => alert('Draft saved! Implement localStorage save here.')}
        className="px-4 py-2.5 rounded-lg border border-gold bg-gold-light text-gold text-sm font-semibold
                   transition-opacity hover:opacity-80"
      >
        💾 Save Draft
      </button>

      {isLast ? (
        <button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
          className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-teal to-teal-light text-white text-sm font-semibold
                     shadow-teal transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? '⏳ Submitting…' : '✓ Submit Form'}
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-teal to-teal-light text-white text-sm font-semibold
                     shadow-teal transition-all hover:opacity-90 hover:-translate-y-px"
        >
          Next Section →
        </button>
      )}
    </div>
  </div>
)
