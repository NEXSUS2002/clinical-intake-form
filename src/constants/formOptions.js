// ─── Step Definitions ────────────────────────────────────────────
export const FORM_STEPS = [
  { id: 1,  label: 'Case Setup',     icon: '📋', title: 'Case Type Setup',                    subtitle: 'Select case type to configure the entire form flow' },
  { id: 2,  label: 'Personal',       icon: '👤', title: 'Personal Information',               subtitle: 'Client demographics, emergency contacts and referral details' },
  { id: 3,  label: 'Concerns',       icon: '📝', title: 'Presenting Concerns & History',      subtitle: 'Primary concerns, background and previous actions' },
  { id: 4,  label: 'Development',    icon: '🌱', title: 'Developmental & Relationship History', subtitle: 'Birth history, milestones and family dynamics' },
  { id: 5,  label: 'Medical',        icon: '🏥', title: 'Medical & Academic History',         subtitle: 'Health conditions, medications and educational background' },
  { id: 6,  label: 'Social & Risk',  icon: '🛡️', title: 'Social History & Risk Assessment',   subtitle: 'Social functioning, peer relationships and clinical risk screening' },
  { id: 7,  label: 'Skills',         icon: '📚', title: 'Academic Skills & Communication',    subtitle: 'Functional literacy, school readiness and communication methods' },
  { id: 8,  label: 'Mental Status',  icon: '🔍', title: 'Mental Status Examination',          subtitle: 'Clinician-administered MSE based on selected case type' },
  { id: 9,  label: 'Plan',           icon: '📊', title: 'Clinical Impression & Plan',         subtitle: 'Diagnosis, assessment recommendations and treatment planning' },
  { id: 10, label: 'Review',         icon: '✅', title: 'Review & Submit',                    subtitle: 'Final verification before submission' },
]

export const TOTAL_STEPS = FORM_STEPS.length

// ─── Case Type Definitions ────────────────────────────────────────
export const CASE_TYPES = [
  {
    value:       'assessment-child',
    icon:        '🧒',
    type:        'Assessment',
    subtype:     'Child & Adolescent',
    description: 'Developmental assessment, school readiness, behavioral evaluation for ages up to 17',
    color:       '#0E7C7B',
    mseVariant:  'A',
    planVariant: 'A',
  },
  {
    value:       'assessment-adult',
    icon:        '👤',
    type:        'Assessment',
    subtype:     'Adult (18+)',
    description: 'Adult psychological assessment, cognitive evaluation and clinical diagnosis',
    color:       '#7C3AED',
    mseVariant:  'B',
    planVariant: 'B',
  },
  {
    value:       'intervention-child',
    icon:        '🎯',
    type:        'Intervention',
    subtype:     'Child & Adolescent',
    description: 'Therapeutic intervention, behavioral modification and family therapy for youth',
    color:       '#D97706',
    mseVariant:  'C',
    planVariant: 'C',
  },
  {
    value:       'intervention-adult',
    icon:        '💬',
    type:        'Intervention',
    subtype:     'Adult (18+)',
    description: 'Psychotherapy, CBT, mood disorders, trauma processing and psychosocial support',
    color:       '#0284C7',
    mseVariant:  'C',
    planVariant: 'C',
  },
]

// ─── Referral Sources ─────────────────────────────────────────────
export const REFERRAL_SOURCES = [
  'Self-Referral',
  'School / Teacher',
  'Hospital',
  'Paediatrician',
  'General Practitioner',
  'Psychiatrist',
  'Other',
]

// ─── Psychologist Options ─────────────────────────────────────────
export const PSYCHOLOGISTS = [
  'Ms. Lee Li Li',
  'Ms. Hiew Yik Wei',
  'Other',
]

// ─── Demographics ─────────────────────────────────────────────────
export const SEX_OPTIONS         = ['Male', 'Female', 'Non-Binary', 'Prefer not to say']
export const ETHNICITY_OPTIONS   = ['Yoruba', 'Igbo', 'Hausa', 'Other']
export const RESPONDENT_OPTIONS  = ['Father', 'Mother', 'Self', 'Guardian', 'Other']

// ─── Concern Areas ────────────────────────────────────────────────
export const CONCERN_AREAS = [
  'Emotional',
  'Behavioral',
  'Social',
  'Academic',
  'Communication',
  'Attention / Concentration',
  'Sensory',
  'Medical',
  'Family',
  'Anxiety',
  'Mood / Depression',
  'None',
  'Other',
]

// ─── Birth / Delivery ─────────────────────────────────────────────
export const BIRTH_TERM_OPTIONS  = ['Early (Premature)', 'Full Term', 'Late Term', 'Post Term']
export const DELIVERY_OPTIONS    = ['Normal Vaginal', 'Assisted (Forceps/Vacuum)', 'Elective C-Section', 'Emergency C-Section']

// ─── Developmental History Items ─────────────────────────────────
export const DEV_HISTORY_ROWS = [
  { key: 'incubator',    label: 'Required incubator / special care at birth' },
  { key: 'speech_delay', label: 'Speech / language delays' },
  { key: 'motor_delay',  label: 'Gross / fine motor delays' },
  { key: 'feeding',      label: 'Feeding difficulties (infant / toddler)' },
  { key: 'sleep',        label: 'Persistent sleep difficulties' },
  { key: 'toilet',       label: 'Difficulties with toilet training' },
  { key: 'social_play',  label: 'Social / play development concerns' },
  { key: 'regression',   label: 'Developmental regression observed' },
  { key: 'early_intv',   label: 'Received early intervention services' },
]

export const DEV_HISTORY_HEADERS = ['Yes', 'No', 'Not Sure']

// ─── Employment Status ────────────────────────────────────────────
export const EMPLOYMENT_OPTIONS = [
  'Employed Full-Time',
  'Employed Part-Time',
  'Self-Employed',
  'Unemployed',
  'Student',
  'Retired',
  'Unable to Work',
]

// ─── Relationship Status ──────────────────────────────────────────
export const RELATIONSHIP_STATUS = [
  'Single',
  'In a Relationship',
  'Married',
  'Separated',
  'Divorced',
  'Widowed',
]

// ─── Medical Conditions ───────────────────────────────────────────
export const MEDICAL_CONDITIONS = [
  'Epilepsy / Seizures',
  'Asthma',
  'Diabetes',
  'Heart Condition',
  'Thyroid Disorder',
  'Hearing Impairment',
  'Visual Impairment',
  'Chronic Pain',
  'Neurological Condition',
  'Sleep Disorder',
  'N/A',
  'Other',
]

// ─── Academic Subjects ────────────────────────────────────────────
export const ACADEMIC_SUBJECTS  = ['Bahasa Malaysia', 'English Language', 'Mathematics', 'Science', 'History', 'Moral / Islamic Studies']
export const ACADEMIC_GRADES    = ['A', 'B', 'C', 'D', 'E', 'Fail', 'N/A']

// ─── Peer Interaction ─────────────────────────────────────────────
export const PEER_INTERACTION_ROWS = [
  { key: 'initiates',   label: 'Initiates social contact' },
  { key: 'maintains',   label: 'Maintains conversations' },
  { key: 'shares',      label: 'Shares / takes turns with peers' },
  { key: 'empathy',     label: 'Shows empathy to others' },
  { key: 'conflict',    label: 'Handles conflict appropriately' },
  { key: 'cooperative', label: 'Cooperative in group settings' },
]

export const PEER_FREQUENCY_HEADERS = ['Always', 'Often', 'Sometimes', 'Rarely', 'Never']

// ─── Communication Methods ────────────────────────────────────────
export const COMMUNICATION_ROWS = [
  { key: 'verbal',        label: 'Verbal speech (spontaneous)' },
  { key: 'two_word',      label: 'Two-word phrases' },
  { key: 'sentences',     label: 'Full sentences' },
  { key: 'pointing',      label: 'Pointing to communicate' },
  { key: 'sign',          label: 'Sign language / PECS' },
  { key: 'aac',           label: 'AAC device / communication app' },
  { key: 'writing_comm',  label: 'Writing to communicate' },
  { key: 'gestures',      label: 'Gestures and body language' },
  { key: 'eye_contact_c', label: 'Uses eye contact to communicate' },
]

// ─── Academic Skills ──────────────────────────────────────────────
export const PERSONAL_INFO_ROWS = [
  'Full name', 'Age', 'Birthday', 'Home address', "Parents' names",
  'School name', 'Grade / Year', 'Emergency phone', 'Own phone number',
  "Siblings' names", "Teacher's name", 'School address',
]

export const READING_ROWS = [
  'Identifies letters A–Z',
  'Reads simple CVC words',
  'Reads simple sentences',
  'Reads short paragraphs',
  'Reads with comprehension',
  'Reads aloud fluently',
]

export const WRITING_ROWS = [
  'Holds pencil correctly',
  'Writes own name',
  'Writes letters A–Z',
  'Writes numbers 0–9',
  'Copies from board',
  'Writes simple sentences',
  'Spells simple words',
  'Uses punctuation',
  'Writes paragraphs',
  'Completes written tasks independently',
]

export const MATH_ROWS = [
  'Counts 1–10',
  'Counts 1–100',
  'Identifies number values',
  'Performs addition',
  'Performs subtraction',
  'Performs multiplication',
  'Performs division',
  'Solves word problems',
]

export const SKILLS_HEADERS = ['Yes', 'Partially', 'No']

// ─── MSE Options ──────────────────────────────────────────────────
export const MSE_MOOD_OPTIONS = [
  'Euthymic', 'Depressed', 'Elevated', 'Anxious', 'Irritable',
  'Angry', 'Fearful', 'Hopeless', 'Guilty', 'Euphoric', 'Labile',
]

export const MSE_AFFECT_OPTIONS = [
  'Full Range', 'Restricted', 'Blunted', 'Flat',
  'Incongruent', 'Labile', 'Expansive', 'Tearful', 'Anxious', 'Bright',
]

export const MSE_THOUGHT_PROCESS_OPTIONS = [
  'Linear / Goal-Directed',
  'Circumstantial',
  'Tangential',
  'Flight of Ideas',
  'Loose Associations',
  'Thought Blocking',
  'Perseveration',
  'Poverty of Thought',
]

export const MSE_PERCEPTION_OPTIONS = [
  'No perceptual disturbance',
  'Auditory hallucinations',
  'Visual hallucinations',
  'Tactile hallucinations',
  'Illusions',
  'Depersonalization / Derealization',
]

export const MSE_ORIENTATION_OPTIONS = [
  'Person — knows who they are',
  'Place — knows where they are',
  'Time — knows date / day / year',
  'Situation — understands circumstances',
]

export const MSE_INSIGHT_OPTIONS = [
  'Good — Full insight',
  'Fair — Partial insight',
  'Poor — Minimal / no insight',
]

export const MSE_JUDGMENT_OPTIONS = [
  'Intact',
  'Mildly Impaired',
  'Moderately Impaired',
  'Severely Impaired',
]

export const SUICIDAL_IDEATION_OPTIONS = [
  'None Reported',
  'Passive (wish to die)',
  'Active — no plan',
  'Active with Plan',
  'Active with Intent',
  'History Only',
]

export const HOMICIDAL_IDEATION_OPTIONS = [
  'None Reported',
  'Passive',
  'Active — no plan',
  'Active with Plan',
  'History Only',
]

// ─── Provisional Diagnosis ────────────────────────────────────────
export const CHILD_DIAGNOSES = [
  'ASD (Autism Spectrum Disorder)',
  'ADHD',
  'Specific Learning Disorder (SLD)',
  'Intellectual Developmental Disorder (IDD)',
  'Developmental Language Disorder',
  'Anxiety Disorder',
  'Depressive Disorder',
  'Conduct Disorder',
  'Oppositional Defiant Disorder (ODD)',
  'Adjustment Disorder',
  'No Diagnosis at this time',
  'Deferred — Further Assessment Required',
]

export const ADULT_DIAGNOSES = [
  'Major Depressive Disorder',
  'Generalized Anxiety Disorder',
  'Panic Disorder',
  'Social Anxiety Disorder',
  'OCD',
  'PTSD',
  'Bipolar Disorder',
  'Adult ADHD',
  'Adult ASD',
  'Specific Learning Disorder',
  'Personality Disorder',
  'Psychotic Disorder',
  'Adjustment Disorder',
  'No Diagnosis at this time',
  'Deferred — Further Assessment Required',
]

// ─── Assessment Recommendations ──────────────────────────────────
export const CHILD_ASSESSMENTS = [
  'IQ / Cognitive Assessment',
  'ASD Screening (ADOS / ADI-R)',
  'ADHD Assessment (Conners / SNAP)',
  'Specific Learning Disorder Assessment',
  'Developmental Assessment',
  'Speech-Language Evaluation',
  'Occupational Therapy Assessment',
  'Neuropsychological Testing',
]

export const ADULT_ASSESSMENTS = [
  'Adult Cognitive Assessment',
  'Adult ADHD Assessment',
  'Personality Assessment (MMPI / PAI)',
  'Depression Screening (BDI / PHQ-9)',
  'Anxiety Screening (BAI / GAD-7)',
  'Neuropsychological Battery',
  'Psychiatric Evaluation',
  'Medical / Neurological Referral',
]

// ─── Treatment Frequency Rows ─────────────────────────────────────
export const TREATMENT_FREQUENCY_ROWS = [
  'SCDLIP (1:1 Therapy)',
  'CDLIP (Group Therapy)',
  'ABA Therapy',
  'Cognitive Literacy (CL)',
  'Cognitive Literacy C (CLC)',
]

export const FREQUENCY_HEADERS = ['1x/wk', '2x/wk', '3x/wk', '4x/wk', '5x/wk', 'N/A']

// ─── Parent Recommendations ───────────────────────────────────────
export const PARENT_RECOMMENDATIONS = [
  'Psychoeducation on diagnosis',
  'Diet Control (sugar / food dyes)',
  'Gadget / Screen Time Control',
  'Consistent Behavior Management',
  'Social Stories / Visual Supports',
  'Sensory Supports at home',
  'Attend Parent Training Program',
  'Home Therapy Activities',
]

// ─── Session Plan Items ───────────────────────────────────────────
export const SESSION_PLAN_ITEMS = [
  'Establish therapeutic alliance',
  'Psychoeducation (client)',
  'Psychoeducation (family)',
  'Treatment goal setting',
  'Suicidal risk precautions',
  'Safety plan development',
  'Mood monitoring / diary',
  'Behavioral activation',
  'Cognitive restructuring',
  'Exposure therapy',
  'Trauma processing',
  'Relapse prevention',
  'Social skills training',
  'Medication referral / review',
]

// ─── Follow-up Plan Options ───────────────────────────────────────
export const FOLLOW_UP_OPTIONS = [
  'Weekly sessions',
  'Fortnightly sessions',
  'Monthly sessions',
  'As needed',
  'Discharge — goals met',
  'Referral to other service',
]

// ─── Referral Professionals ───────────────────────────────────────
export const REFERRAL_PROFESSIONALS = [
  'Psychiatrist',
  'Paediatrician',
  'Neurologist',
  'Speech-Language Therapist',
  'Occupational Therapist',
  'Educational Psychologist',
  'Social Worker',
  'School Counselor',
  'GP / Family Medicine',
  'Hospital Specialist',
  'Dietitian',
  'None Required',
]

// ─── Risk Screening Questions ─────────────────────────────────────
export const RISK_ITEMS_COMMON = [
  { key: 'deprRisk',  label: 'Signs of depressed mood or anhedonia (loss of interest)' },
  { key: 'anxRisk',   label: 'Signs of excessive anxiety, fear or persistent worry' },
  { key: 'irritRisk', label: 'Significant irritability or anger outbursts' },
]

export const RISK_ITEMS_ADULT = [
  { key: 'delusRisk', label: 'Signs of delusional thinking (fixed false beliefs)' },
  { key: 'halluRisk', label: 'Reports of perceptual disturbances (hallucinations)' },
]

export const RISK_ANSWER_OPTIONS = ['Yes', 'No', 'Possibly']
