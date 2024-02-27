import { createContext, useState } from 'react'

export const clockContext = createContext()

export function ClockProvider ({ children }) {
  const [selectedHour, setSelectedHour] = useState('00')
  const [selectedMinutes, setSelectedMinutes] = useState('00')
  const [selectedPeriod, setSelectedPeriod] = useState('')

  const contextValues = {
    selectedHour,
    selectedMinutes,
    selectedPeriod,
    setSelectedHour,
    setSelectedMinutes,
    setSelectedPeriod
  }

  return (
  <clockContext.Provider value={contextValues}>
    {children}
  </clockContext.Provider>
  )
}
