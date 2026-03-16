import { SectionCard } from '../../layout/SectionCard'
import { NavButtons }  from '../../layout/NavButtons'
import { FieldGroup, Divider, InfoBox } from '../../ui/Typography'
import { Textarea } from '../../ui/Inputs'
import { RadioGroup, CheckboxGroup } from '../../ui/Selectors'
import { TableInput } from '../../ui/Widgets'
import {
  CHILD_DIAGNOSES, ADULT_DIAGNOSES,
  CHILD_ASSESSMENTS, ADULT_ASSESSMENTS,
  TREATMENT_FREQUENCY_ROWS, FREQUENCY_HEADERS,
  PARENT_RECOMMENDATIONS, SESSION_PLAN_ITEMS,
  FOLLOW_UP_OPTIONS, REFERRAL_PROFESSIONALS,
  FORM_STEPS, TOTAL_STEPS,
} from '../../../constants/formOptions'
import { isChildCase, isAssessmentCase, isInterventionCase, hasElevatedRisk } from '../../../utils/helpers'

const STEP = FORM_STEPS[8]

const PLAN_LABELS = {
  'assessment-child':   'Child & Adolescent Assessment Plan',
  'assessment-adult':   'Adult Assessment Plan',
  'intervention-child': 'Child & Adolescent Intervention Plan',
  'intervention-adult': 'Adult Psychotherapy Plan',
}

export const Step9Plan = ({ formik, stepErrors, onPrev, onNext }) => {
  const { values, handleChange, handleBlur, setFieldValue } = formik
  const isChild        = isChildCase(values.caseType)
  const isAssessment   = isAssessmentCase(values.caseType)
  const isIntervention = isInterventionCase(values.caseType)
  const riskFlag       = hasElevatedRisk(values)
  const e = (f) => stepErrors?.[f]
  const nest = (key, sub, val) => setFieldValue(key, { ...values[key], [sub]: val })

  return (
    <SectionCard {...STEP} step={STEP.id} totalSteps={TOTAL_STEPS}>
      <InfoBox variant="teal">
        <p className="text-xs font-semibold">
          📌 Plan Type: {PLAN_LABELS[values.caseType] ?? 'Select case type first'}
        </p>
      </InfoBox>

      {/* Provisional Diagnosis — always shown */}
      <FieldGroup
        label="Provisional Diagnosis / Clinical Impression"
        hint="Select all diagnoses under consideration — provisional pending full assessment"
      >
        <CheckboxGroup
          options={isChild ? CHILD_DIAGNOSES : ADULT_DIAGNOSES}
          values={values.provisionalDiagnosis}
          onChange={v => setFieldValue('provisionalDiagnosis', v)}
          columns={2}
        />
      </FieldGroup>

      {/* ── Assessment track ─────────────────────────── */}
      {isAssessment && (
        <>
          <FieldGroup
            label="Assessment Recommendations"
            hint="Select all tests and evaluations to be conducted"
          >
            <CheckboxGroup
              options={isChild ? CHILD_ASSESSMENTS : ADULT_ASSESSMENTS}
              values={values.assessmentRecommendations}
              onChange={v => setFieldValue('assessmentRecommendations', v)}
              columns={2}
            />
          </FieldGroup>

          {isChild && (
            <>
              <FieldGroup
                label="Recommended Treatment / Intervention Frequency"
                hint="Select sessions per week for each programme type"
              >
                <TableInput
                  headers={FREQUENCY_HEADERS}
                  rows={TREATMENT_FREQUENCY_ROWS}
                  data={values.treatmentFrequency}
                  onChange={(r, c) => nest('treatmentFrequency', r, c)}
                />
              </FieldGroup>

              <FieldGroup
                label="Parent / Guardian Recommendations"
                hint="Select all recommendations to share with caregivers"
              >
                <CheckboxGroup
                  options={PARENT_RECOMMENDATIONS}
                  values={values.parentRecommendations}
                  onChange={v => setFieldValue('parentRecommendations', v)}
                  columns={2}
                />
              </FieldGroup>
            </>
          )}

          <FieldGroup
            label="Clinical Justification"
            hint="Rationale for the selected assessments and recommendations"
          >
            <Textarea
              id="assessmentJustification"
              name="assessmentJustification"
              value={values.assessmentJustification}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Describe the clinical reasoning behind the selected tests and recommendations…"
              rows={3}
            />
          </FieldGroup>
        </>
      )}

      {/* ── Intervention track ────────────────────────── */}
      {isIntervention && (
        <>
          <FieldGroup
            label="Differential Diagnosis"
            hint="Alternative diagnoses considered and ruled out"
          >
            <Textarea
              id="differentialDiagnosis"
              name="differentialDiagnosis"
              value={values.differentialDiagnosis}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="List alternative diagnoses and reasoning for exclusion…"
              rows={3}
            />
          </FieldGroup>

          <FieldGroup
            label="Case Formulation (Biopsychosocial)"
            hint="Predisposing, precipitating, perpetuating and protective factors"
          >
            <Textarea
              id="caseFormulation"
              name="caseFormulation"
              value={values.caseFormulation}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Comprehensive biopsychosocial formulation addressing biological, psychological and social factors…"
              rows={6}
            />
          </FieldGroup>

          <FieldGroup
            label="Session / Treatment Plan Priorities"
            hint="Select all items to be addressed in upcoming sessions"
          >
            <CheckboxGroup
              options={SESSION_PLAN_ITEMS}
              values={values.sessionPlans}
              onChange={v => setFieldValue('sessionPlans', v)}
              columns={2}
            />
          </FieldGroup>

          {/* Safety Plan — auto-triggers from risk flags */}
          {riskFlag && (
            <div className="bg-error-bg rounded-xl p-5 border border-error-line mb-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🚨</span>
                <h5 className="text-sm font-bold text-error">
                  Safety Plan — Required (Elevated Risk Identified)
                </h5>
              </div>
              <p className="text-xs text-red-900 leading-relaxed mb-3">
                Risk was flagged in Step 6. A comprehensive safety plan is required before submission.
              </p>
              <Textarea
                id="safetyPlanDetails"
                name="safetyPlanDetails"
                value={values.safetyPlanDetails}
                onChange={handleChange}
                onBlur={handleBlur}
                error={e('safetyPlanDetails')}
                placeholder="Warning signs, internal coping strategies, social supports (name & contact), crisis hotlines, means restriction plan, clinician contact details…"
                rows={5}
              />
              {e('safetyPlanDetails') && (
                <p className="flex items-center gap-1 text-xs font-medium text-error mt-1.5">
                  ⚠ {e('safetyPlanDetails')}
                </p>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FieldGroup
              label="Client Homework / Between-Session Tasks"
              hint="Tasks for the client to complete before next session"
            >
              <Textarea
                id="clientHomework"
                name="clientHomework"
                value={values.clientHomework}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Mood diary, thought records, behavioral experiments…"
                rows={3}
              />
            </FieldGroup>

            <FieldGroup label="Follow-Up Plan">
              <RadioGroup
                name="followUpPlan"
                options={FOLLOW_UP_OPTIONS}
                value={values.followUpPlan}
                onChange={v => setFieldValue('followUpPlan', v)}
              />
            </FieldGroup>
          </div>
        </>
      )}

      {/* Referrals — always shown */}
      <Divider label="Professional Referrals" />
      <FieldGroup
        label="Referrals to Other Professionals"
        hint="Select all professionals to whom the client should be referred"
      >
        <CheckboxGroup
          options={REFERRAL_PROFESSIONALS}
          values={values.referrals}
          onChange={v => setFieldValue('referrals', v)}
          columns={3}
        />
      </FieldGroup>

      <NavButtons onPrev={onPrev} onNext={onNext} />
    </SectionCard>
  )
}
