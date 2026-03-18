import { SectionCard } from "../../layout/SectionCard";
import { NavButtons } from "../../layout/NavButtons";
import { FieldGroup, Divider } from "../../ui/Typography";
import { Textarea } from "../../ui/Inputs";
import { RadioGroup } from "../../ui/Selectors";
import { CheckboxGroup } from "../../ui/Selectors";
import {
  CONCERN_AREAS,
  FORM_STEPS,
  TOTAL_STEPS,
} from "../../../constants/formOptions";
import { isChildCase } from "../../../utils/helpers";

const STEP = FORM_STEPS[2];

export const Step3Concerns = ({ formik, stepErrors, onPrev, onNext }) => {
  const { values, handleChange, handleBlur, setFieldValue } = formik;
  const isChild = isChildCase(values.caseType);
  const e = (f) => stepErrors?.[f];

  return (
    <SectionCard {...STEP} step={STEP.id} totalSteps={TOTAL_STEPS}>
      <FieldGroup
        label="Areas of Concern"
        required
        hint="Select all that apply to the client's current presentation"
        error={e("concerns")}
      >
        <CheckboxGroup
          options={CONCERN_AREAS}
          values={values.concerns}
          onChange={(v) => setFieldValue("concerns", v)}
          columns={3}
        />
      </FieldGroup>

      <FieldGroup
        label={
          isChild
            ? "Parent / Guardian's Presenting Concerns"
            : "Client's Presenting Concerns"
        }
        required
        hint="Include onset, frequency, severity and functional impact"
        error={e("concernsText")}
      >
        <Textarea
          id="concernsText"
          name="concernsText"
          value={values.concernsText}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={4}
          placeholder="Describe the main concerns in detail…"
          error={e("concernsText")}
        />
      </FieldGroup>

      <FieldGroup
        label="Background & History of Concerns"
        hint="Duration, triggers, progression, what makes it better or worse"
      >
        <Textarea
          id="concernsBackground"
          name="concernsBackground"
          value={values.concernsBackground}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={4}
          placeholder="When did this begin? How has it changed over time?"
        />
      </FieldGroup>

      <FieldGroup
        label="Actions Taken Previously"
        hint="Previous assessments, therapy, medications, school support, specialist visits"
      >
        <Textarea
          id="actionsTaken"
          name="actionsTaken"
          value={values.actionsTaken}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={3}
          placeholder="What interventions have been tried? What helped or didn't help?"
        />
      </FieldGroup>

      <Divider label="Family Context" />

      <FieldGroup label="Family Background & Structure">
        <Textarea
          id="familyBackground"
          name="familyBackground"
          value={values.familyBackground}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={3}
          placeholder="Who lives at home? Family structure, significant life events, dynamics…"
        />
      </FieldGroup>

      <FieldGroup label="Family History of Mental Health / Developmental Conditions">
        <RadioGroup
          name="familyHealthHistory"
          options={["Yes", "No", "Not Sure"]}
          value={values.familyHealthHistory}
          onChange={(v) => setFieldValue("familyHealthHistory", v)}
          inline
        />
        {(values.familyHealthHistory === "Yes" ||
          values.familyHealthHistory === "Not Sure") && (
          <Textarea
            id="familyHealthDetails"
            name="familyHealthDetails"
            value={values.familyHealthDetails}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Specify conditions and affected family members…"
            rows={2}
            className="mt-2"
          />
        )}
      </FieldGroup>

      {isChild && (
        <FieldGroup
          label="Siblings' Academic Performance"
          hint="How do siblings perform academically? Any learning difficulties?"
        >
          <Textarea
            id="siblingsAcademic"
            name="siblingsAcademic"
            value={values.siblingsAcademic}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={2}
            placeholder="Describe siblings' school performance and any concerns…"
          />
        </FieldGroup>
      )}

      <FieldGroup label="Significant Medical Conditions in Family">
        <RadioGroup
          name="familyCond"
          options={["Yes", "No"]}
          value={values.familyCond}
          onChange={(v) => setFieldValue("familyCond", v)}
          inline
        />
        {values.familyCond === "Yes" && (
          <Textarea
            id="familyCondDetails"
            name="familyCondDetails"
            value={values.familyCondDetails}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Conditions and family members affected…"
            rows={2}
            className="mt-2"
          />
        )}
      </FieldGroup>

      <NavButtons onPrev={onPrev} onNext={onNext} />
    </SectionCard>
  );
};
