import { SectionCard } from '../../layout/SectionCard'
import { NavButtons }  from '../../layout/NavButtons'
import { InfoBox } from '../../ui/Typography'
import {
  getCaseTypeLabel, getCaseTypeColor, joinList, formatDateDisplay,
} from '../../../utils/helpers'
import { FORM_STEPS, TOTAL_STEPS } from '../../../constants/formOptions'

const STEP = FORM_STEPS[9]

const ReviewRow = ({ label, value, shade }) => (
  <div className={`flex justify-between items-start gap-4 px-4 py-3 rounded-lg border border-slate-100 ${shade ? 'bg-slate-50' : 'bg-white'}`}>
    <span className="text-xs font-semibold text-slate-dim flex-shrink-0 min-w-[140px]">{label}</span>
    <span className="text-sm text-navy text-right break-words">{value || '—'}</span>
  </div>
)

export const Step10Review = ({ formik, stepErrors, caseId, onPrev, onSubmit }) => {
  const { values, isSubmitting } = formik
  const caseColor = getCaseTypeColor(values.caseType)

  const rows = [
    { label: 'Client Name',           value: values.clientName },
    { label: 'Age / Date of Birth',   value: `${values.age ? values.age + ' yrs' : '—'} — ${formatDateDisplay(values.birthday)}` },
    { label: 'Sex / Ethnicity',       value: [values.sex, values.ethnicity].filter(Boolean).join(' / ') },
    { label: 'Case Type',             value: getCaseTypeLabel(values.caseType) },
    { label: 'Assigned Psychologist', value: values.assignedPsychologist === 'Other' ? values.psychologistOther : values.assignedPsychologist },
    { label: 'Referral Source',       value: values.referralSource },
    { label: 'Primary Concerns',      value: joinList(values.concerns) },
    { label: 'Provisional Diagnosis', value: joinList(values.provisionalDiagnosis) || 'Pending' },
    { label: 'Emergency Contact 1',   value: [values.em1Name, values.em1Phone].filter(Boolean).join(' — ') },
    { label: 'Risk Flags',            value: values.selfHarmThoughts === 'Yes' ? '⚠️ Self-harm indicated' : 'None documented' },
    { label: 'Case ID',               value: caseId },
    { label: 'First Consult Date',    value: formatDateDisplay(values.firstConsultDate) },
  ]

  return (
    <SectionCard {...STEP} step={STEP.id} totalSteps={TOTAL_STEPS}>
      {/* Summary table */}
      <div className="flex flex-col gap-2 mb-6">
        {rows.map((r, i) => <ReviewRow key={r.label} {...r} shade={i % 2 !== 0} />)}
      </div>

      {/* Case badge */}
      <div
        className="flex items-center gap-3 p-3 rounded-xl border mb-4"
        style={{ background: `${caseColor}0A`, borderColor: `${caseColor}28` }}
      >
        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: caseColor }} />
        <div>
          <p className="text-xs font-bold" style={{ color: caseColor }}>
            {getCaseTypeLabel(values.caseType)}
          </p>
          <p className="text-xs text-slate-dim mt-0.5">
            Assigned to:{' '}
            {values.assignedPsychologist === 'Other'
              ? values.psychologistOther
              : values.assignedPsychologist || 'TBD'}
          </p>
        </div>
      </div>

      {/* Section completion badges */}
      <InfoBox variant="teal">
        <h4 className="text-xs font-bold text-teal mb-3">📋 Section Completion</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {FORM_STEPS.slice(1).map(s => (
            <div key={s.id} className="flex items-center gap-1.5 bg-white rounded-lg px-3 py-1.5 border border-teal/20">
              <span className="text-success text-xs">✓</span>
              <span className="text-xs text-navy">{s.label}</span>
            </div>
          ))}
        </div>
      </InfoBox>

      {/* Disclaimer */}
      <InfoBox variant="warn">
        <p className="text-xs leading-relaxed">
          <strong>⚠️ Confirmation:</strong> By submitting, you confirm all information is accurate.
          This record will be assigned Case ID <strong>{caseId}</strong> and accessible to the assigned clinical team.
        </p>
      </InfoBox>

      <NavButtons
        onPrev={onPrev}
        onSubmit={onSubmit}
        isLast
        isSubmitting={isSubmitting}
      />
    </SectionCard>
  )
}
