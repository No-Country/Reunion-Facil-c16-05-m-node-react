import { useState, useEffect } from 'react'

export function useClock (setValue) {
  const [selectedHour, setSelectedHour] = useState('00')
  const [selectedMinutes, setSelectedMinutes] = useState('00')
  const [selectedPeriod, setSelectedPeriod] = useState('')
  const [displayedHour, setDisplayedHour] = useState('')

  useEffect(() => {
    updateDisplayedHour(selectedHour, selectedMinutes, selectedPeriod)
  }, [selectedHour, selectedMinutes, selectedPeriod])

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
    setSelectedPeriod(period)
  }

  const updateDisplayedHour = (hour, minutes, period) => {
    const formattedHour = formatHour(hour, period)
    setDisplayedHour(`${formattedHour}:${minutes}`)
  }

  const formatHour = (hour, period) => {
    if (period === 'PM' && parseInt(hour, 10) < 12) {
      return (parseInt(hour, 10) + 12).toString().padStart(2, '0')
    } else if (period === 'AM' && parseInt(hour, 10) === 12) {
      return '00'
    }
    return hour.padStart(2, '0')
  }

  const confirmTime = () => {
    setValue('hour', `${formatHour(selectedHour, selectedPeriod)}:${selectedMinutes}`)
  }

  return {
    selectedHour,
    selectedMinutes,
    selectedPeriod,
    displayedHour,
    handleHourChange,
    handleMinutesChange,
    handlePeriodChange,
    confirmTime
  }
}
