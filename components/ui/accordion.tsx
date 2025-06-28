"use client"

import type * as React from "react"
import { useState, useContext, createContext } from "react"

const AccordionContext = createContext({
  open: false,
  setOpen: (open: boolean) => {},
})

interface AccordionProps {
  children: React.ReactNode
  defaultValue?: boolean
}

const Accordion = ({ children, defaultValue = false }: AccordionProps) => {
  const [open, setOpen] = useState(defaultValue)

  return <AccordionContext.Provider value={{ open, setOpen }}>{children}</AccordionContext.Provider>
}

interface AccordionItemProps {
  value: string
  children: React.ReactNode
}

const AccordionItem = ({ value, children }: AccordionItemProps) => {
  return <div id={value}>{children}</div>
}

interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
}

const AccordionTrigger = ({ children, className }: AccordionTriggerProps) => {
  const { open, setOpen } = useContext(AccordionContext)

  return (
    <button className={className} onClick={() => setOpen(!open)}>
      {children}
    </button>
  )
}

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
}

const AccordionContent = ({ children, className }: AccordionContentProps) => {
  const { open } = useContext(AccordionContext)

  return open ? <div className={className}>{children}</div> : null
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
