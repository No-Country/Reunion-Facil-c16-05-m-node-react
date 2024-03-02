import { useState } from 'react'

export function useClock (setValue) {
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

  const confirmTime = () => {
    const formattedTime = `${selectedHour}:${selectedMinutes} ${selectedPeriod}`
    setValue('hour', formattedTime)
  }

  return {
    selectedHour,
    selectedMinutes,
    selectedPeriod,
    handleHourChange,
    handleMinutesChange,
    handlePeriodChange,
    confirmTime
  }
}
