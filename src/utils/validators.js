import * as Yup from 'yup'

// ─── Step 1: Case Setup ───────────────────────────────────────────
export const step1Schema = Yup.object({
  caseType: Yup.string()
    .required('Please select a case type to continue.'),
})

// ─── Step 2: Personal Information ────────────────────────────────
export const step2Schema = Yup.object({
  clientName: Yup.string()
    .trim()
    .min(2, 'Name must be at least 2 characters.')
    .required('Client name is required.'),

  age: Yup.number()
    .typeError('Age must be a number.')
    .min(0, 'Age cannot be negative.')
    .max(120, 'Please enter a valid age.')
    .required('Age is required.'),

  sex: Yup.string()
    .required('Please select a sex / gender.'),

  birthday: Yup.string()
    .required('Date of birth is required.'),

  assignedPsychologist: Yup.string()
    .required('Please assign a psychologist.'),

  psychologistOther: Yup.string().when('assignedPsychologist', {
    is: 'Other',
    then: (s) => s.trim().required('Please specify the psychologist name.'),
    otherwise: (s) => s.notRequired(),
  }),
})

// ─── Step 3: Concerns & History ──────────────────────────────────
export const step3Schema = Yup.object({
  concerns: Yup.array()
    .of(Yup.string())
    .min(1, 'Please select at least one area of concern.'),

  concernsText: Yup.string()
    .trim()
    .min(10, 'Please provide more detail (at least 10 characters).')
    .required('Please describe the presenting concerns.'),
})

// ─── Step 4: Development ─────────────────────────────────────────
export const step4Schema = Yup.object({
  birthTerm:    Yup.string().notRequired(),
  deliveryMode: Yup.string().notRequired(),
})

// ─── Step 5: Medical ─────────────────────────────────────────────
export const step5Schema = Yup.object({
  hospitalizationDetails: Yup.string().when('hospitalization', {
    is: 'Yes',
    then: (s) => s.trim().required('Please provide hospitalization details.'),
    otherwise: (s) => s.notRequired(),
  }),

  psychiatricCondDetails: Yup.string().when('psychiatricCond', {
    is: 'Yes',
    then: (s) => s.trim().required('Please describe the psychiatric condition.'),
    otherwise: (s) => s.notRequired(),
  }),
})

// ─── Step 6: Social & Risk ────────────────────────────────────────
export const step6Schema = Yup.object({
  selfHarmDetails: Yup.string().when('selfHarmThoughts', {
    is: (v) => v === 'Yes' || v === 'History of',
    then: (s) => s.trim().min(10, 'Please provide sufficient detail for risk documentation.').required('Details are required when self-harm is indicated.'),
    otherwise: (s) => s.notRequired(),
  }),
})

// ─── Step 7–9: Optional validation (all fields soft-required) ─────
export const step7Schema  = Yup.object({})
export const step8Schema  = Yup.object({})

export const step9Schema = Yup.object({
  safetyPlanDetails: Yup.string().when('selfHarmThoughts', {
    is: 'Yes',
    then: (s) => s.trim().min(20, 'Safety plan must be sufficiently detailed.').required('A safety plan is required when self-harm risk is identified.'),
    otherwise: (s) => s.notRequired(),
  }),
})

export const step10Schema = Yup.object({})

// ─── Schema map by step ───────────────────────────────────────────
export const STEP_SCHEMAS = {
  1:  step1Schema,
  2:  step2Schema,
  3:  step3Schema,
  4:  step4Schema,
  5:  step5Schema,
  6:  step6Schema,
  7:  step7Schema,
  8:  step8Schema,
  9:  step9Schema,
  10: step10Schema,
}
