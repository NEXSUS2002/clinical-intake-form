// ─── Date Helpers ────────────────────────────────────────────────
/**
 * Format a Date object to YYYY-MM-DD string
 * @param {Date} date
 * @returns {string}
 */
export const formatDate = (date) => {
  if (!date) return ''    // Prevents run-time error

  /**
   * toISOString() → "2025-03-16T12:00:00.000Z"
   * .split('T') → ["2025-03-16", "12:00:00.000Z"]
   * [0] extracts the date portion
   */
  return date.toISOString().split('T')[0]
}

/**
 * Format a date string for display
 * @param {string} dateStr - YYYY-MM-DD
 * @returns {string}
 */
export const formatDateDisplay = (dateStr) => {
  if (!dateStr) return '—'
  try {
    const d = new Date(dateStr + 'T00:00:00')
    return d.toLocaleDateString('en-MY', { day: '2-digit', month: 'short', year: 'numeric' })
  } catch {
    return dateStr
  }
}

/**
 * Calculate age from birthday string
 * @param {string} birthday - YYYY-MM-DD
 * @returns {number|null}
 */
export const calculateAge = (birthday) => {
  if (!birthday) return null
  const today = new Date()
  const born  = new Date(birthday)
  let age = today.getFullYear() - born.getFullYear()
  const m = today.getMonth() - born.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < born.getDate())) age--
  return age
}

// ─── Case ID Generator ────────────────────────────────────────────
/**
 * Generate a unique clinical case ID
 * @returns {string} e.g. "CAS-2025-4731"
 */
export const generateCaseId = () => {
  const year = new Date().getFullYear()
  const num  = String(Math.floor(Math.random() * 9000) + 1000)
  return `CAS-${year}-${num}`
}

// ─── Case Type Helpers ────────────────────────────────────────────
/**
 * Determine if case type involves a child/adolescent
 * @param {string} caseType
 * @returns {boolean}
 */
export const isChildCase = (caseType) =>
  caseType === 'assessment-child' || caseType === 'intervention-child'

/**
 * Determine if case type involves an adult
 * @param {string} caseType
 * @returns {boolean}
 */
export const isAdultCase = (caseType) =>
  caseType === 'assessment-adult' || caseType === 'intervention-adult'

/**
 * Determine if case type is assessment
 * @param {string} caseType
 * @returns {boolean}
 */
export const isAssessmentCase = (caseType) =>
  caseType === 'assessment-child' || caseType === 'assessment-adult'

/**
 * Determine if case type is intervention
 * @param {string} caseType
 * @returns {boolean}
 */
export const isInterventionCase = (caseType) =>
  caseType === 'intervention-child' || caseType === 'intervention-adult'

/**
 * Get a human-readable case type label
 * @param {string} caseType
 * @returns {string}
 */
export const getCaseTypeLabel = (caseType) => {
  const map = {
    'assessment-child':    'Assessment · Child & Adolescent',
    'assessment-adult':    'Assessment · Adult',
    'intervention-child':  'Intervention · Child & Adolescent',
    'intervention-adult':  'Intervention · Adult',
  }
  return map[caseType] || caseType
}

/**
 * Get the accent color for a case type
 * @param {string} caseType
 * @returns {string}
 */
export const getCaseTypeColor = (caseType) => {
  const map = {
    'assessment-child':   '#0E7C7B',
    'assessment-adult':   '#7C3AED',
    'intervention-child': '#D97706',
    'intervention-adult': '#0284C7',
  }
  return map[caseType] || '#0E7C7B'
}

// ─── Risk Helpers ─────────────────────────────────────────────────
/**
 * Determine if there is an elevated safety risk requiring a safety plan
 * @param {object} values - formik values
 * @returns {boolean}
 */
export const hasElevatedRisk = (values) => {
  const si = values.mseSuicidalIdeation || ''
  return (
    values.selfHarmThoughts === 'Yes' ||
    si.includes('Active') ||
    si === 'Active with Plan' ||
    si === 'Active with Intent'
  )
}

// ─── Array / Object Helpers ───────────────────────────────────────
/**
 * Toggle an item in an array (immutable)
 */
export const toggleArrayItem = (arr, item) =>
  arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item]

/**
 * Set a nested object key (immutable)
 */
export const setNestedKey = (obj, key, value) => ({ ...obj, [key]: value })

// ─── Completion Checkers ──────────────────────────────────────────
export const isSectionComplete = (stepId, values) => {
  switch (stepId) {
    case 1:  return !!values.caseType
    case 2:  return !!(values.clientName && values.age && values.sex && values.birthday && values.assignedPsychologist)
    case 3:  return !!(values.concerns?.length > 0 && values.concernsText)
    default: return true
  }
}

// ─── String Helpers ───────────────────────────────────────────────
export const truncate = (str, n = 40) =>
  str && str.length > n ? str.slice(0, n) + '…' : str

export const joinList = (arr = []) => arr.filter(Boolean).join(', ') || '—'
