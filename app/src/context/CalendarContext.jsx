import { createContext, useState } from 'react'

export const CalendarContext = createContext()

export function CalendarProvider ({ children }) {
  const [month, setMonth] = useState(new Date().getMonth())
  const [daySelect, setDaySelect] = useState(0)
  const year = new Date().getFullYear()
  const [date, setDate] = useState({
    day: 0,
    month: 0,
    year: 0
  })

  function confirmDate ({ year, month, day }) {
    setDate({ year, month, day })
  }

  function updateDay ({ day }) {
    setDaySelect(day)
  }

  function incrementMonth () {
    setMonth((month) => month === 11 ? 0 : month + 1)
  }

  function decrementMonth () {
    setMonth((month) => month === 0 ? 11 : month - 1)
  }

  return (
    <CalendarContext.Provider value={{
      date,
      confirmDate,
      year,
      month,
      incrementMonth,
      decrementMonth,
      daySelect,
      updateDay
    }}>
      {children}
    </CalendarContext.Provider>
  )
}
