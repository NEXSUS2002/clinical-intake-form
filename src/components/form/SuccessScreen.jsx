import { getCaseTypeLabel, formatDateDisplay } from '../../utils/helpers'

export const SuccessScreen = ({ values, caseId, onReset }) => (
  <div className="min-h-screen bg-app-bg flex items-center justify-center p-6">
    <div className="animate-fade-in-up bg-white rounded-2xl shadow-card p-12 max-w-md w-full text-center">

      {/* Icon */}
      <div className="w-20 h-20 rounded-full bg-success-bg border-2 border-success flex items-center justify-center text-3xl text-success mx-auto mb-5">
        ✓
      </div>

      <h1 className="font-display text-2xl font-semibold text-navy mb-3">Form Submitted</h1>

      <p className="text-sm text-slate-dim leading-relaxed mb-6">
        The intake form for <strong className="text-navy">{values.clientName || 'Client'}</strong> has been
        submitted successfully. Case ID: <strong className="text-teal">{caseId}</strong>
      </p>

      {/* Summary card */}
      <div className="bg-teal-pale rounded-xl p-4 mb-6 text-left">
        <p className="text-xs font-bold text-teal mb-1">{getCaseTypeLabel(values.caseType)}</p>
        <p className="text-xs text-slate-dim">
          Assigned to:{' '}
          {values.assignedPsychologist === 'Other'
            ? values.psychologistOther
            : values.assignedPsychologist || 'TBD'}
        </p>
        <p className="text-xs text-slate-dim mt-1">
          First Consultation: {formatDateDisplay(values.firstConsultDate)}
        </p>
        {values.provisionalDiagnosis?.length > 0 && (
          <p className="text-xs text-slate-dim mt-1">
            Provisional Dx: {values.provisionalDiagnosis.slice(0, 2).join(', ')}
            {values.provisionalDiagnosis.length > 2 && ` +${values.provisionalDiagnosis.length - 2} more`}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3 justify-center flex-wrap">
        <button
          type="button"
          onClick={onReset}
          className="px-7 py-2.5 rounded-xl bg-gradient-to-r from-teal to-teal-light text-white text-sm font-semibold
                     shadow-teal transition-opacity hover:opacity-90"
        >
          + Start New Form
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="px-6 py-2.5 rounded-xl bg-white text-navy text-sm font-semibold
                     border border-slate-line transition-colors hover:bg-slate-50"
        >
          🖨 Print Record
        </button>
      </div>
    </div>
  </div>
)
