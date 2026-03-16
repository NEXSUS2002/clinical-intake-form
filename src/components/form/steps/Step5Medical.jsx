import { SectionCard } from '../../layout/SectionCard'
import { NavButtons }  from '../../layout/NavButtons'
import { FieldGroup, Divider } from '../../ui/Typography'
import { Textarea } from '../../ui/Inputs'
import { RadioGroup, CheckboxGroup } from '../../ui/Selectors'
import { TableInput } from '../../ui/Widgets'
import {
  MEDICAL_CONDITIONS, ACADEMIC_SUBJECTS, ACADEMIC_GRADES, FORM_STEPS, TOTAL_STEPS,
} from '../../../constants/formOptions'

const STEP = FORM_STEPS[4]

export const Step5Medical = ({ formik, stepErrors, onPrev, onNext }) => {
  const { values, handleChange, handleBlur, setFieldValue } = formik
  const e = (f) => stepErrors?.[f]
  const nest = (key, sub, val) => setFieldValue(key, { ...values[key], [sub]: val })

  return (
    <SectionCard {...STEP} step={STEP.id} totalSteps={TOTAL_STEPS}>
      <Divider label="Medical Information" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldGroup label="Current Health Concerns">
          <Textarea id="healthConcerns" name="healthConcerns" value={values.healthConcerns}
            onChange={handleChange} onBlur={handleBlur} rows={3}
            placeholder="Any current physical health issues or chronic conditions…" />
        </FieldGroup>
        <FieldGroup label="Current Medications" hint="Name, dosage and purpose">
          <Textarea id="medications" name="medications" value={values.medications}
            onChange={handleChange} onBlur={handleBlur} rows={3}
            placeholder="List all current medications including supplements…" />
        </FieldGroup>
      </div>

      <FieldGroup label="Hospitalization History">
        <RadioGroup name="hospitalization" options={['Yes', 'No']} value={values.hospitalization}
          onChange={v => setFieldValue('hospitalization', v)} inline />
        {values.hospitalization === 'Yes' && (
          <Textarea id="hospitalizationDetails" name="hospitalizationDetails"
            value={values.hospitalizationDetails} onChange={handleChange} onBlur={handleBlur}
            rows={3} error={e('hospitalizationDetails')}
            placeholder="Reason, hospital name, dates, duration of stay…" className="mt-2" />
        )}
      </FieldGroup>

      <FieldGroup label="Diagnosed Medical Conditions" hint="Select all that apply">
        <CheckboxGroup options={MEDICAL_CONDITIONS} values={values.medicalConditions}
          onChange={v => setFieldValue('medicalConditions', v)} columns={3} />
      </FieldGroup>

      <Divider label="Psychiatric & Mental Health History" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldGroup label="Previous Psychiatric Diagnosis">
          <RadioGroup name="psychiatricCond" options={['Yes', 'No', 'Under Investigation']}
            value={values.psychiatricCond} onChange={v => setFieldValue('psychiatricCond', v)} inline />
          {values.psychiatricCond === 'Yes' && (
            <Textarea id="psychiatricCondDetails" name="psychiatricCondDetails"
              value={values.psychiatricCondDetails} onChange={handleChange} onBlur={handleBlur}
              rows={2} error={e('psychiatricCondDetails')}
              placeholder="Diagnosis, treating clinician, treatment received…" className="mt-2" />
          )}
        </FieldGroup>
        <FieldGroup label="Psychiatric Hospitalization">
          <RadioGroup name="psychiatricHosp" options={['Yes', 'No']} value={values.psychiatricHosp}
            onChange={v => setFieldValue('psychiatricHosp', v)} inline />
          {values.psychiatricHosp === 'Yes' && (
            <Textarea id="psychiatricHospDetails" name="psychiatricHospDetails"
              value={values.psychiatricHospDetails} onChange={handleChange} onBlur={handleBlur}
              rows={2} placeholder="Reason, facility name, dates…" className="mt-2" />
          )}
        </FieldGroup>
      </div>

      <FieldGroup label="Previous Psychological / Therapeutic Interventions">
        <Textarea id="previousInterventions" name="previousInterventions"
          value={values.previousInterventions} onChange={handleChange} onBlur={handleBlur}
          rows={3} placeholder="Therapy types, duration, provider, outcomes…" />
      </FieldGroup>

      <Divider label="Academic / Educational History" />

      <FieldGroup label="Academic History & School Performance">
        <Textarea id="academicHistory" name="academicHistory" value={values.academicHistory}
          onChange={handleChange} onBlur={handleBlur} rows={3}
          placeholder="Current school, grade level, learning support, academic performance trends…" />
      </FieldGroup>

      <FieldGroup label="Most Recent Academic Grades" hint="Select the grade achieved for each subject">
        <TableInput headers={ACADEMIC_GRADES} rows={ACADEMIC_SUBJECTS}
          data={values.academicGrades} onChange={(r, c) => nest('academicGrades', r, c)} />
      </FieldGroup>

      <NavButtons onPrev={onPrev} onNext={onNext} />
    </SectionCard>
  )
}
