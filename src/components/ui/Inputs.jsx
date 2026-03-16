import { useState } from 'react'

const baseClass = 'w-full px-3 py-2.5 rounded-lg text-sm font-body border text-navy bg-slate-50 transition-all duration-150 outline-none'
const focusClass = 'focus:border-teal focus:ring-2 focus:ring-teal-pale focus:bg-white'
const errorClass = (e) => e ? 'border-error bg-error-bg' : 'border-slate-line'

export const Input = ({
  id, name, value, onChange, onBlur,
  placeholder, type = 'text', error, className = '',
  autoComplete, min, max,
}) => (
  <input
    id={id} name={name} type={type}
    value={value} onChange={onChange} onBlur={onBlur}
    placeholder={placeholder}
    autoComplete={autoComplete}
    min={min} max={max}
    className={`${baseClass} ${focusClass} ${errorClass(error)} ${className}`}
  />
)

export const Textarea = ({
  id, name, value, onChange, onBlur,
  placeholder, rows = 3, error, className = '',
}) => (
  <textarea
    id={id} name={name}
    value={value} onChange={onChange} onBlur={onBlur}
    placeholder={placeholder}
    rows={rows}
    className={`${baseClass} ${focusClass} ${errorClass(error)} resize-y leading-relaxed ${className}`}
  />
)
