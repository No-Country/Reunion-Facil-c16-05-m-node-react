import { CalendarContext } from '../context/CalendarContext.jsx'
import { useContext } from 'react'
export function useCalendar () {
  const context = useContext(CalendarContext)
  if (context === undefined) throw new Error("You can't access calendar data.")
  return context
}
