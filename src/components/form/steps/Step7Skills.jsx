import { SectionCard } from '../../layout/SectionCard'
import { NavButtons }  from '../../layout/NavButtons'
import { FieldGroup, Divider } from '../../ui/Typography'
import { Textarea } from '../../ui/Inputs'
import { TableInput } from '../../ui/Widgets'
import {
  PERSONAL_INFO_ROWS, READING_ROWS, WRITING_ROWS, MATH_ROWS,
  SKILLS_HEADERS, COMMUNICATION_ROWS, FORM_STEPS, TOTAL_STEPS,
} from '../../../constants/formOptions'
import { isChildCase } from '../../../utils/helpers'

const STEP = FORM_STEPS[6]

export const Step7Skills = ({ formik, stepErrors, onPrev, onNext }) => {
  const { values, handleChange, handleBlur, setFieldValue } = formik
  const isChild = isChildCase(values.caseType)
  const nest = (key, sub, val) => setFieldValue(key, { ...values[key], [sub]: val })

  return (
    <SectionCard
      {...STEP}
      title={isChild ? 'Academic Skills & School Readiness' : 'Communication & Daily Functioning'}
      step={STEP.id}
      totalSteps={TOTAL_STEPS}
    >
      {isChild && (
        <>
          <FieldGroup
            label="Personal Information Recall"
            hint="Can the child independently recall the following information?"
          >
            <TableInput
              headers={SKILLS_HEADERS}
              rows={PERSONAL_INFO_ROWS}
              data={values.personalInfoRecall}
              onChange={(r, c) => nest('personalInfoRecall', r, c)}
            />
          </FieldGroup>

          <Divider label="Reading Skills" />
          <TableInput
            headers={SKILLS_HEADERS}
            rows={READING_ROWS}
            data={values.readingSkills}
            onChange={(r, c) => nest('readingSkills', r, c)}
          />

          <Divider label="Writing Skills" />
          <TableInput
            headers={SKILLS_HEADERS}
            rows={WRITING_ROWS}
            data={values.writingSkills}
            onChange={(r, c) => nest('writingSkills', r, c)}
          />

          <Divider label="Mathematics Skills" />
          <TableInput
            headers={SKILLS_HEADERS}
            rows={MATH_ROWS}
            data={values.mathSkills}
            onChange={(r, c) => nest('mathSkills', r, c)}
          />

          <Divider label="Communication Methods" />
        </>
      )}

      <FieldGroup
        label="Communication Methods Used"
        hint="Select 'Yes' for all methods the client currently uses"
      >
        <TableInput
          headers={['Yes', 'No']}
          rows={COMMUNICATION_ROWS}
          data={values.communicationMethods}
          onChange={(r, c) => nest('communicationMethods', r, c)}
        />
      </FieldGroup>

      <FieldGroup label="Additional Notes" className="mt-5">
        <Textarea
          id="additionalInfo"
          name="additionalInfo"
          value={values.additionalInfo}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Any other relevant observations about skills, functioning or communication style…"
          rows={3}
        />
      </FieldGroup>

      <NavButtons onPrev={onPrev} onNext={onNext} />
    </SectionCard>
  )
}
