import { SectionCard } from '../../layout/SectionCard'
import { NavButtons }  from '../../layout/NavButtons'
import { FieldGroup, Divider } from '../../ui/Typography'
import { Input, Textarea } from '../../ui/Inputs'
import { RadioGroup } from '../../ui/Selectors'
import { ScaleInput, TableInput } from '../../ui/Widgets'
import {
  BIRTH_TERM_OPTIONS, DELIVERY_OPTIONS, DEV_HISTORY_ROWS, DEV_HISTORY_HEADERS,
  EMPLOYMENT_OPTIONS, RELATIONSHIP_STATUS, FORM_STEPS, TOTAL_STEPS,
} from '../../../constants/formOptions'
import { isAdultCase } from '../../../utils/helpers'

const STEP = FORM_STEPS[3]

export const Step4Development = ({ formik, stepErrors, onPrev, onNext }) => {
  const { values, handleChange, handleBlur, setFieldValue } = formik
  const isAdult = isAdultCase(values.caseType)
  const nest = (key, sub, val) => setFieldValue(key, { ...values[key], [sub]: val })

  return (
    <SectionCard {...STEP} step={STEP.id} totalSteps={TOTAL_STEPS}>
      <Divider label="Family Relationship Quality" />

      {[
        { k: 'relFather',   l: 'Relationship with Father / Father Figure' },
        { k: 'relMother',   l: 'Relationship with Mother / Mother Figure' },
        { k: 'relSiblings', l: 'Relationship with Siblings' },
      ].map(({ k, l }) => (
        <FieldGroup key={k} label={l} hint="Rate from 1 (Very Poor) to 5 (Excellent)">
          <ScaleInput value={values[k]} onChange={v => setFieldValue(k, v)} />
        </FieldGroup>
      ))}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldGroup label="Closest Relationship" hint="Who is the client closest to?">
          <Input id="closestRelation" name="closestRelation" value={values.closestRelation}
            onChange={handleChange} onBlur={handleBlur} placeholder="e.g. Mother, Best friend" />
        </FieldGroup>
        <FieldGroup label="Discipline Method & Frequency">
          <Textarea id="disciplineMethod" name="disciplineMethod" value={values.disciplineMethod}
            onChange={handleChange} onBlur={handleBlur} rows={2}
            placeholder="How and how often is discipline administered?" />
        </FieldGroup>
        <FieldGroup label="Rewards / Positive Reinforcement">
          <Textarea id="rewardsMethod" name="rewardsMethod" value={values.rewardsMethod}
            onChange={handleChange} onBlur={handleBlur} rows={2}
            placeholder="How are positive behaviors reinforced?" />
        </FieldGroup>
      </div>

      <Divider label="Birth & Early Development" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldGroup label="Birth Term">
          <RadioGroup name="birthTerm" options={BIRTH_TERM_OPTIONS} value={values.birthTerm}
            onChange={v => setFieldValue('birthTerm', v)} />
        </FieldGroup>
        <FieldGroup label="Mode of Delivery">
          <RadioGroup name="deliveryMode" options={DELIVERY_OPTIONS} value={values.deliveryMode}
            onChange={v => setFieldValue('deliveryMode', v)} />
        </FieldGroup>
      </div>

      <FieldGroup label="Developmental History" hint="Select the most accurate response for each item">
        <TableInput headers={DEV_HISTORY_HEADERS} rows={DEV_HISTORY_ROWS}
          data={values.devHistory} onChange={(r, c) => nest('devHistory', r, c)} />
      </FieldGroup>

      <FieldGroup label="Developmental History Notes">
        <Textarea id="devDetails" name="devDetails" value={values.devDetails}
          onChange={handleChange} onBlur={handleBlur} rows={3}
          placeholder="Additional details on milestones, ages achieved, early interventions…" />
      </FieldGroup>

      {isAdult && (
        <div className="bg-purple-50 rounded-xl p-5 mt-2 border border-purple-100">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-lg">💼</span>
            <h3 className="text-sm font-bold text-navy">
              Occupational &amp; Relationship History
              <span className="ml-2 text-[11px] font-semibold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
                Adult Cases Only
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FieldGroup label="Employment Status">
              <RadioGroup name="employmentStatus" options={EMPLOYMENT_OPTIONS}
                value={values.employmentStatus} onChange={v => setFieldValue('employmentStatus', v)} />
            </FieldGroup>
            <FieldGroup label="Occupational / Work History">
              <Textarea id="workHistory" name="workHistory" value={values.workHistory}
                onChange={handleChange} onBlur={handleBlur} rows={4}
                placeholder="Job history, current role, work-related stressors…" />
            </FieldGroup>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-1">
            <FieldGroup label="Current Relationship Status">
              <RadioGroup name="relStatus" options={RELATIONSHIP_STATUS}
                value={values.relStatus} onChange={v => setFieldValue('relStatus', v)} />
            </FieldGroup>
            <div>
              <FieldGroup label="Relationship Details">
                <Textarea id="relStatusDetails" name="relStatusDetails"
                  value={values.relStatusDetails} onChange={handleChange} onBlur={handleBlur}
                  rows={2} placeholder="Duration, quality, significant events…" />
              </FieldGroup>
              <FieldGroup label="Past Significant Relationships">
                <Textarea id="pastRelationships" name="pastRelationships"
                  value={values.pastRelationships} onChange={handleChange} onBlur={handleBlur}
                  rows={2} placeholder="Previous relationships, losses, separations…" />
              </FieldGroup>
            </div>
          </div>
        </div>
      )}

      <NavButtons onPrev={onPrev} onNext={onNext} />
    </SectionCard>
  )
}
