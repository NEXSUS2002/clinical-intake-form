import { useMemo } from 'react'
import {
  isChildCase,
  isAdultCase,
  isAssessmentCase,
  isInterventionCase,
  getCaseTypeColor,
  getCaseTypeLabel,
} from '../utils/helpers'

/**
 * Hook that derives boolean flags and metadata from the selected case type.
 *
 * @param {string} caseType - The selected case type value
 * @returns {object} Boolean flags and metadata
 */
export const useCaseType = (caseType) => {
  return useMemo(() => ({
    isChild:        isChildCase(caseType),
    isAdult:        isAdultCase(caseType),
    isAssessment:   isAssessmentCase(caseType),
    isIntervention: isInterventionCase(caseType),
    color:          getCaseTypeColor(caseType),
    label:          getCaseTypeLabel(caseType),
    isSelected:     !!caseType,
  }), [caseType])
}
