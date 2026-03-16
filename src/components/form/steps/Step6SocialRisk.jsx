import { SectionCard } from '../../layout/SectionCard'
import { NavButtons }  from '../../layout/NavButtons'
import { FieldGroup, Divider, InfoBox } from '../../ui/Typography'
import { Input, Textarea } from '../../ui/Inputs'
import { RadioGroup } from '../../ui/Selectors'
import { TableInput } from '../../ui/Widgets'
import {
  PEER_INTERACTION_ROWS, PEER_FREQUENCY_HEADERS,
  RISK_ITEMS_COMMON, RISK_ITEMS_ADULT, RISK_ANSWER_OPTIONS,
  FORM_STEPS, TOTAL_STEPS,
} from '../../../constants/formOptions'
import { isAdultCase, isInterventionCase } from '../../../utils/helpers'

const STEP = FORM_STEPS[5]

export const Step6SocialRisk = ({ formik, stepErrors, onPrev, onNext }) => {
  const { values, handleChange, handleBlur, setFieldValue } = formik
  const isAdult      = isAdultCase(values.caseType)
  const isIntervention = isInterventionCase(values.caseType)
  const e = (f) => stepErrors?.[f]
  const nest = (key, sub, val) => setFieldValue(key, { ...values[key], [sub]: val })

  return (
    <SectionCard {...STEP} step={STEP.id} totalSteps={TOTAL_STEPS}>
      <Divider label="Leisure & Social Functioning" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldGroup label="Leisure Activities & Hobbies">
          <Textarea id="leisureActivities" name="leisureActivities" value={values.leisureActivities}
            onChange={handleChange} onBlur={handleBlur} rows={3}
            placeholder="Sports, arts, screen time, outdoor activities, reading…" />
        </FieldGroup>
        <FieldGroup label="Estimated Number of Close Friends">
          <Input id="numFriends" name="numFriends" type="number" value={values.numFriends}
            onChange={handleChange} onBlur={handleBlur} placeholder="0" className="max-w-[120px]" />
        </FieldGroup>
      </div>

      <FieldGroup label="Peer Interaction Patterns"
        hint="Rate how often the client displays each social behaviour">
        <TableInput headers={PEER_FREQUENCY_HEADERS} rows={PEER_INTERACTION_ROWS}
          data={values.peerInteraction} onChange={(r, c) => nest('peerInteraction', r, c)} />
      </FieldGroup>

      <FieldGroup label="Forensic / Legal History">
        <RadioGroup name="forensicHistory" options={['None', 'Resolved', 'Ongoing']}
          value={values.forensicHistory} onChange={v => setFieldValue('forensicHistory', v)} inline />
      </FieldGroup>

      <Divider label="Clinical Risk Screening" />

      <InfoBox variant="warn">
        <div className="flex items-start gap-2">
          <span className="text-lg mt-0.5">⚠️</span>
          <div>
            <h4 className="text-sm font-bold mb-1">Sensitive Risk Assessment Items</h4>
            <p className="text-xs leading-relaxed">
              The following questions screen for clinical risk factors. All responses are
              confidential and used solely for clinical planning purposes.
            </p>
          </div>
        </div>
      </InfoBox>

      {[...RISK_ITEMS_COMMON, ...(isAdult || isIntervention ? RISK_ITEMS_ADULT : [])].map(item => (
        <FieldGroup key={item.key} label={item.label}>
          <RadioGroup name={item.key} options={RISK_ANSWER_OPTIONS} value={values[item.key]}
            onChange={v => setFieldValue(item.key, v)} inline />
        </FieldGroup>
      ))}

      {/* Safety Risk Panel */}
      <div className="bg-error-bg rounded-xl p-5 border border-error-line mt-2">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">🔴</span>
          <h4 className="text-sm font-bold text-error">Safety Risk Assessment</h4>
        </div>

        <FieldGroup label="Thoughts of self-harm or suicide" error={e('selfHarmDetails')}>
          <RadioGroup name="selfHarmThoughts" options={['Yes', 'No', 'History of']}
            value={values.selfHarmThoughts} onChange={v => setFieldValue('selfHarmThoughts', v)} inline />
          {(values.selfHarmThoughts === 'Yes' || values.selfHarmThoughts === 'History of') && (
            <Textarea id="selfHarmDetails" name="selfHarmDetails"
              value={values.selfHarmDetails} onChange={handleChange} onBlur={handleBlur}
              rows={3} error={e('selfHarmDetails')}
              placeholder="Ideation frequency, any plan, intent, history of attempts, triggers…"
              className="mt-2" />
          )}
        </FieldGroup>

        <FieldGroup label="Thoughts of harming others (homicidal ideation)" className="mb-0">
          <RadioGroup name="harmOthersThoughts" options={['Yes', 'No', 'History of']}
            value={values.harmOthersThoughts} onChange={v => setFieldValue('harmOthersThoughts', v)} inline />
          {(values.harmOthersThoughts === 'Yes' || values.harmOthersThoughts === 'History of') && (
            <Textarea id="harmOthersDetails" name="harmOthersDetails"
              value={values.harmOthersDetails} onChange={handleChange} onBlur={handleBlur}
              rows={3} placeholder="Target identified, nature of thoughts, plan, intent…"
              className="mt-2" />
          )}
        </FieldGroup>
      </div>

      <NavButtons onPrev={onPrev} onNext={onNext} />
    </SectionCard>
  )
}
