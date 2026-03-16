import { useState, useCallback, useRef } from 'react'
import { STEP_SCHEMAS } from '../utils/validators'
import { TOTAL_STEPS } from '../constants/formOptions'

export const useFormNavigation = (formik) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [stepErrors, setStepErrors]   = useState({})
  const topRef = useRef(null)

  const scrollToTop = useCallback(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const validateCurrentStep = useCallback(async () => {
    const schema = STEP_SCHEMAS[currentStep]
    if (!schema) { setStepErrors({}); return true }

    try {
      await schema.validate(formik.values, { abortEarly: false })
      setStepErrors({})
      return true
    } catch (yupError) {
      const errs = {}
      yupError.inner?.forEach((e) => { if (e.path) errs[e.path] = e.message })
      setStepErrors(errs)
      return false
    }
  }, [currentStep, formik.values])

  const goNext = useCallback(async () => {
    const valid = await validateCurrentStep()
    if (!valid) { scrollToTop(); return }
    setStepErrors({})
    setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS))
    scrollToTop()
  }, [validateCurrentStep, scrollToTop])

  const goPrev = useCallback(() => {
    setStepErrors({})
    setCurrentStep((s) => Math.max(s - 1, 1))
    scrollToTop()
  }, [scrollToTop])

  return {
    currentStep,
    stepErrors,  // ← keyed by field name, populated when Next is clicked
    topRef,
    goNext,
    goPrev,
    isFirst: currentStep === 1,
    isLast:  currentStep === TOTAL_STEPS,
  }
}
