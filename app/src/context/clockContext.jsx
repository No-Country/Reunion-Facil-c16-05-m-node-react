import { createContext, useState } from 'react'

export const ClockContext = createContext()

export function ClockProvider ({ children }) {
  const [selectedHour, setSelectedHour] = useState('00')
  const [selectedMinutes, setSelectedMinutes] = useState('00')
  const [selectedPeriod, setSelectedPeriod] = useState('')

  const handleHourChange = (hour) => {
    if (hour === '' || (/^\d+$/.test(hour) && Number(hour, 10) >= 0 && Number(hour, 10) <= 24)) {
      setSelectedHour(hour)
    }
  }

  const handleMinutesChange = (minutes) => {
    if (minutes === '' || (/^\d+$/.test(minutes) && parseInt(minutes, 10) >= 0 && parseInt(minutes, 10) <= 59)) {
      setSelectedMinutes(minutes)
    }
  }

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period)
  }

  const handleCancel = () => {
    // TODO: Cancel and close pop up
  }

  const handleAccept = () => {
    // TO DO: Accept and send data to backend
  }

  const contextValues = {
    selectedHour,
    selectedMinutes,
    selectedPeriod,
    handleHourChange,
    handleMinutesChange,
    handlePeriodChange,
    handleCancel,
    handleAccept
  }

  return (
    <ClockContext.Provider value={contextValues}>
      {children}
    </ClockContext.Provider>
  )
}
