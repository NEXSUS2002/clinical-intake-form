import { SectionCard } from '../../layout/SectionCard'
import { NavButtons }  from '../../layout/NavButtons'
import { FieldGroup, Divider, InfoBox } from '../../ui/Typography'
import { Textarea } from '../../ui/Inputs'
import { RadioGroup, CheckboxGroup } from '../../ui/Selectors'
import {
  MSE_MOOD_OPTIONS, MSE_AFFECT_OPTIONS, MSE_THOUGHT_PROCESS_OPTIONS,
  MSE_PERCEPTION_OPTIONS, MSE_ORIENTATION_OPTIONS,
  MSE_INSIGHT_OPTIONS, MSE_JUDGMENT_OPTIONS,
  SUICIDAL_IDEATION_OPTIONS, HOMICIDAL_IDEATION_OPTIONS,
  FORM_STEPS, TOTAL_STEPS,
} from '../../../constants/formOptions'
import { isAdultCase, isInterventionCase } from '../../../utils/helpers'

const STEP = FORM_STEPS[7]

const MSE_VARIANT_LABELS = {
  'assessment-child':   'Child & Adolescent MSE (Variant A)',
  'assessment-adult':   'Adult Assessment MSE (Variant B)',
  'intervention-child': 'Child & Adolescent Intervention MSE (Variant C)',
  'intervention-adult': 'Comprehensive Adult Psychotherapy MSE (Variant C — Most Detailed)',
}

export const Step8MSE = ({ formik, stepErrors, onPrev, onNext }) => {
  const { values, handleChange, handleBlur, setFieldValue } = formik
  const isAdult        = isAdultCase(values.caseType)
  const isIntervention = isInterventionCase(values.caseType)
  const showDetailed   = isAdult || isIntervention

  return (
    <SectionCard {...STEP} step={STEP.id} totalSteps={TOTAL_STEPS}>
      <InfoBox variant="teal">
        <p className="text-xs font-semibold">
          📌 MSE Variant: {MSE_VARIANT_LABELS[values.caseType] ?? 'Select case type first'}
        </p>
      </InfoBox>

      {/* Appearance, Attitude, Behavior, Speech */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {[
          { k: 'mseAppearance', l: 'Appearance',               ph: 'Grooming, hygiene, dress, age-appropriate presentation…' },
          { k: 'mseAttitude',   l: 'Attitude Towards Clinician', ph: 'Cooperative, guarded, hostile, engaged, suspicious…' },
          { k: 'mseBehavior',   l: 'Behavior / Psychomotor',   ph: 'Agitation, retardation, tics, mannerisms, restlessness…' },
          { k: 'mseSpeech',     l: 'Speech',                   ph: 'Rate, volume, tone, fluency, latency, spontaneity…' },
        ].map(({ k, l, ph }) => (
          <FieldGroup key={k} label={l}>
            <Textarea id={k} name={k} value={values[k]}
              onChange={handleChange} onBlur={handleBlur} placeholder={ph} rows={2} />
          </FieldGroup>
        ))}
      </div>

      {/* Mood & Affect */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldGroup label="Mood" hint="Subjective — as described by the client (select all applicable)">
          <CheckboxGroup options={MSE_MOOD_OPTIONS} values={values.mseMood}
            onChange={v => setFieldValue('mseMood', v)} columns={2} />
        </FieldGroup>
        <FieldGroup label="Affect" hint="Objective — clinician's observation (select all applicable)">
          <CheckboxGroup options={MSE_AFFECT_OPTIONS} values={values.mseAffect}
            onChange={v => setFieldValue('mseAffect', v)} columns={2} />
        </FieldGroup>
      </div>

      {/* Detailed MSE — Adult / Intervention only */}
      {showDetailed && (
        <>
          <Divider label="Thought & Perception" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FieldGroup label="Thought Processes">
              <RadioGroup name="mseThoughtProcesses" options={MSE_THOUGHT_PROCESS_OPTIONS}
                value={values.mseThoughtProcesses}
                onChange={v => setFieldValue('mseThoughtProcesses', v)} />
            </FieldGroup>
            <FieldGroup label="Thought Content"
              hint="Preoccupations, obsessions, phobias, delusions, ideas of reference">
              <Textarea id="mseThoughtContent" name="mseThoughtContent"
                value={values.mseThoughtContent} onChange={handleChange} onBlur={handleBlur}
                placeholder="Describe thought content in detail…" rows={5} />
            </FieldGroup>
          </div>

          {/* SI / HI Panel */}
          <div className="bg-error-bg rounded-xl p-5 border border-error-line mb-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🔴</span>
              <h5 className="text-sm font-bold text-error">
                Suicidal & Homicidal Ideation (MSE Documentation)
              </h5>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FieldGroup label="Suicidal Ideation" className="mb-0">
                <RadioGroup name="mseSuicidalIdeation" options={SUICIDAL_IDEATION_OPTIONS}
                  value={values.mseSuicidalIdeation}
                  onChange={v => setFieldValue('mseSuicidalIdeation', v)} />
                {values.mseSuicidalIdeation && values.mseSuicidalIdeation !== 'None Reported' && (
                  <Textarea id="mseSuicidalDetails" name="mseSuicidalDetails"
                    value={values.mseSuicidalDetails} onChange={handleChange} onBlur={handleBlur}
                    placeholder="Plan specifics, lethality, access to means, protective factors…"
                    rows={3} className="mt-2" />
                )}
              </FieldGroup>

              <FieldGroup label="Homicidal Ideation" className="mb-0">
                <RadioGroup name="mseHomicidalIdeation" options={HOMICIDAL_IDEATION_OPTIONS}
                  value={values.mseHomicidalIdeation}
                  onChange={v => setFieldValue('mseHomicidalIdeation', v)} />
                {values.mseHomicidalIdeation && values.mseHomicidalIdeation !== 'None Reported' && (
                  <Textarea id="mseHomicidalDetails" name="mseHomicidalDetails"
                    value={values.mseHomicidalDetails} onChange={handleChange} onBlur={handleBlur}
                    placeholder="Identified target, nature of thoughts, plan, intent…"
                    rows={3} className="mt-2" />
                )}
              </FieldGroup>
            </div>
          </div>

          <FieldGroup label="Perception">
            <RadioGroup name="msePerception" options={MSE_PERCEPTION_OPTIONS}
              value={values.msePerception}
              onChange={v => setFieldValue('msePerception', v)} inline />
          </FieldGroup>
        </>
      )}

      <Divider label="Orientation, Insight & Judgment" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldGroup label="Orientation" hint="Select all domains that are intact">
          <CheckboxGroup options={MSE_ORIENTATION_OPTIONS} values={values.mseOrientation}
            onChange={v => setFieldValue('mseOrientation', v)} columns={1} />
        </FieldGroup>

        <div>
          <FieldGroup label="Insight">
            <RadioGroup name="mseInsight" options={MSE_INSIGHT_OPTIONS}
              value={values.mseInsight} onChange={v => setFieldValue('mseInsight', v)} />
          </FieldGroup>
          {isAdult && (
            <FieldGroup label="Judgment">
              <RadioGroup name="mseJudgment" options={MSE_JUDGMENT_OPTIONS}
                value={values.mseJudgment} onChange={v => setFieldValue('mseJudgment', v)} />
            </FieldGroup>
          )}
        </div>
      </div>

      <NavButtons onPrev={onPrev} onNext={onNext} />
    </SectionCard>
  )
}
