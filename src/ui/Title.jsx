import React from 'react'
import { twMerge } from 'tailwind-merge'

function Title({ text,className }) {
    const newClassName =twMerge( `text-3xl font-bold ${className}`)
  return (
   <h1 className={newClassName}> {text}</h1>
  )
}

export default Title