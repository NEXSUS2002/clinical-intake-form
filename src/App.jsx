import { useState, useMemo } from 'react'
import { Formik } from 'formik'
import { Header }      from './components/layout/Header'
import { ProgressBar } from './components/layout/ProgressBar'
import { SuccessScreen } from './components/form/SuccessScreen'
import {
  Step1CaseSetup, Step2PersonalInfo, Step3Concerns,
  Step4Development, Step5Medical, Step6SocialRisk,
  Step7Skills, Step8MSE, Step9Plan, Step10Review,
} from './components/form/steps'
import { useFormNavigation } from './hooks/useFormNavigation'
import { INITIAL_FORM_VALUES } from './constants/initialValues'
import { TOTAL_STEPS } from './constants/formOptions'
import { generateCaseId, formatDate } from './utils/helpers'

export default function App() {
  const [submitted, setSubmitted] = useState(false)
  const [caseId] = useState(() => generateCaseId())
  const today    = useMemo(() => formatDate(new Date()), [])

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Submitted:', values)
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <Formik
      initialValues={INITIAL_FORM_VALUES}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {(formik) =>
        submitted ? (
          <SuccessScreen
            values={formik.values}
            caseId={caseId}
            onReset={() => { formik.resetForm(); setSubmitted(false) }}
          />
        ) : (
          <FormContent formik={formik} caseId={caseId} today={today} />
        )
      }
    </Formik>
  )
}

function FormContent({ formik, caseId, today }) {
  const { currentStep, stepErrors, topRef, goNext, goPrev, isFirst, isLast } =
    useFormNavigation(formik)

  // stepErrors is passed to every step so they can display field-level errors
  // after the user clicks "Next". Components should use stepErrors[field], not
  // formik.errors[field] (which is never populated since we do manual Yup runs).
  const shared = { formik, stepErrors, onPrev: goPrev, onNext: goNext }

  return (
    <div className="min-h-screen bg-app-bg">
      <Header caseId={caseId} caseType={formik.values.caseType} today={today} />

      <main
        ref={topRef}
        className="max-w-3xl mx-auto px-4 py-6 pb-16"
      >
        <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />

        {currentStep === 1  && <Step1CaseSetup  {...shared} />}
        {currentStep === 2  && <Step2PersonalInfo {...shared} />}
        {currentStep === 3  && <Step3Concerns   {...shared} />}
        {currentStep === 4  && <Step4Development {...shared} />}
        {currentStep === 5  && <Step5Medical    {...shared} />}
        {currentStep === 6  && <Step6SocialRisk {...shared} />}
        {currentStep === 7  && <Step7Skills     {...shared} />}
        {currentStep === 8  && <Step8MSE        {...shared} />}
        {currentStep === 9  && <Step9Plan       {...shared} />}
        {currentStep === 10 && (
          <Step10Review
            formik={formik}
            stepErrors={stepErrors}
            caseId={caseId}
            onPrev={goPrev}
            onSubmit={formik.handleSubmit}
          />
        )}

        <p className="text-center mt-8 text-xs text-slate-400">
          ClinPsych Portal · Intake Management System · All data is encrypted and protected
        </p>
      </main>
    </div>
  )
}
