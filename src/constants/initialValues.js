import { formatDate } from '../utils/helpers'

export const INITIAL_FORM_VALUES = {
  // ── Meta ──
  caseType: '',

  // ── Section 2: Personal Information ──
  clientName:         '',
  age:                '',
  sex:                '',
  ethnicity:          '',
  birthday:           '',
  firstConsultDate:   formatDate(new Date()),
  respondent:         '',

  // Emergency Contact 1
  em1Name:     '',
  em1Phone:    '',
  em1Relation: '',

  // Emergency Contact 2
  em2Name:     '',
  em2Phone:    '',
  em2Relation: '',

  // Referral & Assignment
  referralSource:      '',
  referralOther:       '',
  assignedPsychologist:'',
  psychologistOther:   '',

  // ── Section 3: Concerns ──
  concerns:         [],
  concernsText:     '',
  concernsBackground: '',
  actionsTaken:     '',
  familyBackground: '',
  familyHealthHistory: '',
  familyHealthDetails: '',
  siblingsAcademic: '',
  familyCond:       '',
  familyCondDetails:'',

  // ── Section 4: Development ──
  relFather:   0,
  relMother:   0,
  relSiblings: 0,
  closestRelation:  '',
  disciplineMethod: '',
  rewardsMethod:    '',
  birthTerm:    '',
  deliveryMode: '',
  devHistory:   {},
  devDetails:   '',

  // Adult — Occupational
  employmentStatus: '',
  workHistory:      '',
  relStatus:        '',
  relStatusDetails: '',
  pastRelationships:'',

  // ── Section 5: Medical ──
  healthConcerns:          '',
  medications:             '',
  hospitalization:         '',
  hospitalizationDetails:  '',
  medicalConditions:       [],
  conditionResolution:     '',
  psychiatricCond:         '',
  psychiatricCondDetails:  '',
  psychiatricHosp:         '',
  psychiatricHospDetails:  '',
  previousInterventions:   '',
  academicHistory:         '',
  academicGrades:          {},

  // ── Section 6: Social & Risk ──
  leisureActivities: '',
  numFriends:        '',
  peerInteraction:   {},
  forensicHistory:   '',

  // Risk Screening
  deprRisk:        '',
  anxRisk:         '',
  irritRisk:       '',
  delusRisk:       '',
  halluRisk:       '',
  selfHarmThoughts: '',
  selfHarmDetails:  '',
  harmOthersThoughts: '',
  harmOthersDetails:  '',

  // ── Section 7: Skills ──
  personalInfoRecall: {},
  readingSkills:      {},
  writingSkills:      {},
  mathSkills:         {},
  communicationMethods: {},
  additionalInfo:     '',

  // ── Section 8: MSE ──
  mseAppearance: '',
  mseAttitude:   '',
  mseBehavior:   '',
  mseSpeech:     '',
  mseMood:       [],
  mseAffect:     [],
  mseThoughtProcesses: '',
  mseThoughtContent:   '',
  mseSuicidalIdeation: '',
  mseSuicidalDetails:  '',
  mseHomicidalIdeation: '',
  mseHomicidalDetails:  '',
  msePerception:   '',
  mseOrientation:  [],
  mseInsight:      '',
  mseJudgment:     '',

  // ── Section 9: Plan ──
  provisionalDiagnosis:     [],
  differentialDiagnosis:    '',
  caseFormulation:          '',
  assessmentRecommendations:[],
  treatmentFrequency:       {},
  parentRecommendations:    [],
  assessmentJustification:  '',
  sessionPlans:             [],
  safetyPlanDetails:        '',
  clientHomework:           '',
  followUpPlan:             '',
  referrals:                [],
}
