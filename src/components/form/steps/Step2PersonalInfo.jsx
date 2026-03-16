import { SectionCard } from '../../layout/SectionCard'
import { NavButtons }  from '../../layout/NavButtons'
import { FieldGroup, Divider } from '../../ui/Typography'
import { Input } from '../../ui/Inputs'
import { RadioGroup } from '../../ui/Selectors'
import {
  SEX_OPTIONS, ETHNICITY_OPTIONS, RESPONDENT_OPTIONS,
  REFERRAL_SOURCES, PSYCHOLOGISTS, FORM_STEPS, TOTAL_STEPS,
} from '../../../constants/formOptions'

const STEP = FORM_STEPS[1]

const EmergencyContact = ({ n, formik }) => {
  const { values, handleChange, handleBlur } = formik
  return (
    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-4">
      <h4 className="text-xs font-bold text-navy mb-4">Emergency Contact {n}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { key: `em${n}Name`,     label: 'Full Name',     ph: 'Contact name' },
          { key: `em${n}Phone`,    label: 'Phone Number',  ph: '+60 12-345 6789' },
          { key: `em${n}Relation`, label: 'Relationship',  ph: 'e.g. Father, Spouse' },
        ].map(({ key, label, ph }) => (
          <FieldGroup key={key} label={label} className="mb-0">
            <Input id={key} name={key} value={values[key]} onChange={handleChange} onBlur={handleBlur} placeholder={ph} />
          </FieldGroup>
        ))}
      </div>
    </div>
  )
}

export const Step2PersonalInfo = ({ formik, stepErrors, onPrev, onNext }) => {
  const { values, handleChange, handleBlur, setFieldValue } = formik
  const e = (f) => stepErrors?.[f]

  return (
    <SectionCard {...STEP} step={STEP.id} totalSteps={TOTAL_STEPS}>
      <Divider label="Client Demographics" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldGroup label="Full Name" required error={e('clientName')}>
          <Input id="clientName" name="clientName" value={values.clientName}
            onChange={handleChange} onBlur={handleBlur}
            placeholder="Enter client's full name" error={e('clientName')} autoComplete="name" />
        </FieldGroup>

        <FieldGroup label="Age (years)" required error={e('age')}>
          <Input id="age" name="age" type="number" value={values.age}
            onChange={handleChange} onBlur={handleBlur}
            placeholder="e.g. 12" error={e('age')} min={0} max={120} />
        </FieldGroup>

        <FieldGroup label="Date of Birth" required error={e('birthday')}>
          <Input id="birthday" name="birthday" type="date" value={values.birthday}
            onChange={handleChange} onBlur={handleBlur} error={e('birthday')} />
        </FieldGroup>

        <FieldGroup label="First Consultation Date">
          <Input id="firstConsultDate" name="firstConsultDate" type="date"
            value={values.firstConsultDate} onChange={handleChange} onBlur={handleBlur} />
        </FieldGroup>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldGroup label="Sex" required error={e('sex')}>
          <RadioGroup name="sex" options={SEX_OPTIONS} value={values.sex}
            onChange={v => setFieldValue('sex', v)} error={e('sex')} inline />
        </FieldGroup>
        <FieldGroup label="Ethnicity">
          <RadioGroup name="ethnicity" options={ETHNICITY_OPTIONS} value={values.ethnicity}
            onChange={v => setFieldValue('ethnicity', v)} inline />
        </FieldGroup>
      </div>

      <FieldGroup label="Respondent / Informant" hint="Who is completing this form?">
        <RadioGroup name="respondent" options={RESPONDENT_OPTIONS} value={values.respondent}
          onChange={v => setFieldValue('respondent', v)} inline />
      </FieldGroup>

      <Divider label="Referral & Assignment" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldGroup label="Referral Source">
          <RadioGroup name="referralSource" options={REFERRAL_SOURCES} value={values.referralSource}
            onChange={v => setFieldValue('referralSource', v)} />
          {values.referralSource === 'Other' && (
            <Input id="referralOther" name="referralOther" value={values.referralOther}
              onChange={handleChange} onBlur={handleBlur}
              placeholder="Specify referral source" className="mt-2" />
          )}
        </FieldGroup>

        <FieldGroup label="Assigned Psychologist" required error={e('assignedPsychologist')}>
          <RadioGroup name="assignedPsychologist" options={PSYCHOLOGISTS}
            value={values.assignedPsychologist}
            onChange={v => setFieldValue('assignedPsychologist', v)}
            error={e('assignedPsychologist')} />
          {values.assignedPsychologist === 'Other' && (
            <Input id="psychologistOther" name="psychologistOther" value={values.psychologistOther}
              onChange={handleChange} onBlur={handleBlur}
              placeholder="Psychologist name" error={e('psychologistOther')} className="mt-2" />
          )}
        </FieldGroup>
      </div>

      <Divider label="Emergency Contacts" />
      <EmergencyContact n={1} formik={formik} />
      <EmergencyContact n={2} formik={formik} />

      <NavButtons onPrev={onPrev} onNext={onNext} />
    </SectionCard>
  )
}
