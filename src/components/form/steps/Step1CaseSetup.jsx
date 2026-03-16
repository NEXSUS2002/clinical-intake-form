import { SectionCard } from '../../layout/SectionCard'
import { NavButtons }  from '../../layout/NavButtons'
import { FieldGroup, InfoBox } from '../../ui/Typography'
import { CASE_TYPES, FORM_STEPS, TOTAL_STEPS } from '../../../constants/formOptions'

const STEP = FORM_STEPS[0]

const CaseTypeCard = ({ opt, selected, onSelect }) => (
  <button
    type="button"
    onClick={() => onSelect(opt.value)}
    className={`
      text-left p-5 rounded-xl border-2 w-full transition-all duration-200 cursor-pointer
      ${selected
        ? 'shadow-lg scale-[1.01]'
        : 'border-slate-200 bg-white hover:-translate-y-0.5 hover:shadow-md'
      }
    `}
    style={selected ? {
      borderColor: opt.color,
      background: `${opt.color}0A`,
      boxShadow: `0 0 0 3px ${opt.color}18, 0 4px 16px rgba(0,0,0,0.06)`,
    } : {}}
  >
    <div className="flex items-center gap-3 mb-2">
      <span className="text-2xl leading-none">{opt.icon}</span>
      <div className="flex-1">
        <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: opt.color }}>{opt.type}</p>
        <p className="text-sm font-bold text-navy">{opt.subtype}</p>
      </div>
      {selected && (
        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs" style={{ background: opt.color }}>
          ✓
        </div>
      )}
    </div>
    <p className="text-xs text-slate-dim leading-relaxed">{opt.description}</p>
  </button>
)

export const Step1CaseSetup = ({ formik, stepErrors, onNext }) => {
  const { values, setFieldValue } = formik
  const selected = CASE_TYPES.find(c => c.value === values.caseType)

  return (
    <SectionCard {...STEP} step={STEP.id} totalSteps={TOTAL_STEPS}>
      <p className="text-sm text-slate-dim leading-relaxed mb-6">
        Choose the case type — this configures which sections, MSE variant, and clinical plan appear throughout the form.
      </p>

      <FieldGroup label="Select Case Type" required error={stepErrors?.caseType}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
          {CASE_TYPES.map(opt => (
            <CaseTypeCard
              key={opt.value}
              opt={opt}
              selected={values.caseType === opt.value}
              onSelect={v => setFieldValue('caseType', v)}
            />
          ))}
        </div>
      </FieldGroup>

      {selected && (
        <div className="animate-fade-in">
          <InfoBox variant="teal">
            <h4 className="text-xs font-bold text-teal mb-2.5">📌 Active sections for {selected.type} · {selected.subtype}</h4>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Personal Info', 'Concerns', 'Development',
                values.caseType.includes('adult') ? 'Occupational History' : null,
                'Medical', 'Social & Risk',
                values.caseType.includes('child') ? 'Academic Skills' : 'Communication',
                values.caseType.includes('assessment') ? 'Assessment Plans' : 'Intervention Plans',
              ].filter(Boolean).map((s, i) => (
                <span key={i} className="px-2.5 py-0.5 rounded-full bg-teal text-white text-[11px] font-semibold">
                  {i + 1}. {s}
                </span>
              ))}
            </div>
          </InfoBox>
        </div>
      )}

      <NavButtons onPrev={() => {}} onNext={onNext} isFirst />
    </SectionCard>
  )
}
