import { useState } from 'react'

export function useClock (setValue) {
  const [selectedHour, setSelectedHour] = useState('00')
  const [selectedMinutes, setSelectedMinutes] = useState('00')
  const [selectedPeriod, setSelectedPeriod] = useState('')

  const handleHourChange = (hour) => {
    if (hour === '' || (/^\d+$/.test(hour) && parseInt(hour, 10) >= 1 && parseInt(hour, 10) <= 12)) {
      setSelectedHour(hour)
    }
  }

  const handleMinutesChange = (minutes) => {
    if (minutes === '' || (/^\d+$/.test(minutes) && parseInt(minutes, 10) >= 0 && parseInt(minutes, 10) <= 59)) {
      setSelectedMinutes(minutes)
    }
  }

  const handlePeriodChange = (period) => {
    if (period === 'PM' && parseInt(selectedHour, 10) < 12) {
      setSelectedHour((parseInt(selectedHour, 10) + 12).toString().padStart(2, '0'))
    } else if (period === 'AM' && parseInt(selectedHour, 10) === 12) {
      setSelectedHour('00')
    }
    setSelectedPeriod(period)
  }

  const confirmTime = () => {
    const formattedMinutes = selectedMinutes.padStart(2, '0')
    const formattedHour = selectedPeriod === 'PM' && parseInt(selectedHour, 10) < 12
      ? (parseInt(selectedHour, 10) + 12).toString().padStart(2, '0')
      : selectedPeriod === 'AM' && parseInt(selectedHour, 10) === 12
        ? '00'
        : selectedHour.padStart(2, '0')
    const formattedTime = `${formattedHour}:${formattedMinutes}`
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
