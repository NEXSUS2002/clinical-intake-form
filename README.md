# 🧠 ClinPsych Portal — Clinical Intake Form

A professional, multi-step clinical intake management system built for clinical psychologists.
Features conditional branching, per-section validation, and 4 MSE variants.

---

## ✨ Features

- **10-step multi-page form** with smooth navigation and progress tracking
- **4 case types** with full conditional logic:
  - Assessment · Child & Adolescent
  - Assessment · Adult
  - Intervention · Child & Adolescent
  - Intervention · Adult
- **Per-step validation** using Formik + Yup — can't proceed until required fields are filled
- **Conditional sections**: occupational history, academic skills, MSE variants and clinical plans shown/hidden based on case type
- **Risk flags**: self-harm and suicidal ideation trigger a mandatory safety plan in Step 9
- **4 MSE Variants** tailored to case type (variants A, B, C — most detailed for adult intervention)
- **Responsive design** — works on mobile, tablet and desktop
- **Professional clinical aesthetic** — navy + teal color system, Playfair Display + DM Sans typography

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18+ (v20 recommended)
- **npm** v9+ or **pnpm** / **yarn**

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

The app opens automatically at **http://localhost:3000**

### 3. Build for production

```bash
npm run build
npm run preview    # Preview the production build locally
```

---

## 📁 Project Structure

```
clinical-intake-form/
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx                   # App entry point
│   ├── App.jsx                    # Root component, Formik setup, step routing
│   ├── index.css                  # Global styles + Tailwind CSS v4 imports
│   │
│   ├── constants/
│   │   ├── formOptions.js         # All dropdown/radio/checkbox options & labels
│   │   └── initialValues.js       # Formik initial form state shape
│   │
│   ├── utils/
│   │   ├── helpers.js             # Date, case type, risk, array helpers
│   │   └── validators.js          # Yup validation schemas per step
│   │
│   ├── hooks/
│   │   ├── useFormNavigation.js   # Step navigation + per-step validation
│   │   └── useCaseType.js         # Derived booleans from caseType value
│   │
│   ├── styles/
│   │   └── tokens.js              # Design tokens (colors, fonts, shadows)
│   │
│   └── components/
│       ├── ui/                    # Reusable design system components
│       │   ├── Typography.jsx     # Label, Hint, ErrorMessage, FieldGroup, Divider, InfoBox, Badge
│       │   ├── Inputs.jsx         # Input, Textarea
│       │   ├── Selectors.jsx      # RadioGroup, CheckboxGroup
│       │   ├── Widgets.jsx        # ScaleInput (1-5 rating), TableInput (radio per row)
│       │   └── index.js
│       │
│       ├── layout/                # Page structure components
│       │   ├── Header.jsx         # Sticky top bar with case ID and type badge
│       │   ├── ProgressBar.jsx    # Step progress indicator
│       │   ├── SectionCard.jsx    # Gradient card with icon and step label
│       │   ├── NavButtons.jsx     # Previous / Save Draft / Next / Submit
│       │   └── index.js
│       │
│       └── form/
│           ├── SuccessScreen.jsx  # Post-submission confirmation screen
│           └── steps/
│               ├── Step1CaseSetup.jsx      # Case type selection + form flow preview
│               ├── Step2PersonalInfo.jsx   # Demographics, contacts, referral, assignment
│               ├── Step3Concerns.jsx       # Presenting concerns, family history
│               ├── Step4Development.jsx    # Relationships, birth, milestones, adult occ. hx
│               ├── Step5Medical.jsx        # Medical, psychiatric, academic history
│               ├── Step6SocialRisk.jsx     # Social functioning + risk screening
│               ├── Step7Skills.jsx         # Academic skills (child) + communication methods
│               ├── Step8MSE.jsx            # Mental Status Examination (4 variants)
│               ├── Step9Plan.jsx           # Clinical plan (assessment or intervention)
│               ├── Step10Review.jsx        # Summary and final submission
│               └── index.js
│
├── index.html
├── vite.config.js
├── package.json
├── eslint.config.js
└── .gitignore
```

---

## 🧱 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| **React** | 19 | UI framework |
| **Vite** | 6 | Build tool + dev server |
| **Tailwind CSS** | v4 | Utility CSS (via `@tailwindcss/vite`) |
| **Formik** | 2.4 | Form state management |
| **Yup** | 1.4 | Schema-based validation |
| **date-fns** | 3 | Date formatting utilities |

---

## 📋 Form Sections by Case Type

| Section | Child Assessment | Adult Assessment | Child Intervention | Adult Intervention |
|---------|:---:|:---:|:---:|:---:|
| Personal Info | ✅ | ✅ | ✅ | ✅ |
| Concerns | ✅ | ✅ | ✅ | ✅ |
| Developmental History | ✅ | ✅ | ✅ | ✅ |
| **Occupational History** | ❌ | ✅ | ❌ | ✅ |
| Medical History | ✅ | ✅ | ✅ | ✅ |
| Social & Risk | ✅ | ✅ | ✅ | ✅ |
| **Academic Skills** | ✅ | ❌ | ✅ | ❌ |
| **Communication** | ✅ | ✅ | ✅ | ✅ |
| MSE Variant | A | B | C | C (detailed) |
| **Assessment Plans** | ✅ | ✅ | ❌ | ❌ |
| **Intervention Plans** | ❌ | ❌ | ✅ | ✅ |

---

## 🔐 Validation Rules

| Step | Required Fields |
|------|----------------|
| 1 - Case Setup | Case type must be selected |
| 2 - Personal | Name, Age, Sex, Date of Birth, Assigned Psychologist |
| 3 - Concerns | At least 1 concern area, concern description (10+ chars) |
| 5 - Medical | Hospitalization details (if Yes), psychiatric details (if Yes) |
| 6 - Social & Risk | Self-harm details required if self-harm indicated |
| 9 - Plan | Safety plan required if elevated risk flagged |

---

## 🎨 Design System

### Colors
- **Navy** `#0D1B2A` — primary text, headers
- **Teal** `#0E7C7B` — primary action, selection states  
- **Gold** `#C9994A` — save draft accent
- **Slate** `#475569` — secondary text

### Typography
- **Display:** Playfair Display (section titles)
- **Body:** DM Sans (all UI text)

---

## 🔄 Extending the Form

### Adding a new field
1. Add the field key to `src/constants/initialValues.js`
2. Add any options to `src/constants/formOptions.js`
3. Add the field to the relevant `StepN.jsx` component
4. Add validation to `src/utils/validators.js` if required

### Adding a new step
1. Add step definition to `FORM_STEPS` in `src/constants/formOptions.js`
2. Create `StepN.jsx` in `src/components/form/steps/`
3. Export from `steps/index.js`
4. Add routing case in `App.jsx`

---

## 📄 License

For clinical / research use. Adapt freely for your practice management system.
