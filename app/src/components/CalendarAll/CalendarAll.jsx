import { Calendar } from '../Calendar/Calendar'
import { Calendar as CalendarIcon } from '../../icons'
import { InputForm } from '../Form/InputForm/InputForm'
import { useCalendar } from '../../hook/useCalendar'
import { PopUp } from '../PopUp/PopUp'
import { PopUpContainer } from '../PopUpContainer/PopUpContainer'

export function CalendarAll ({ error, register , setValue }) {
  const {
    year,
    month,
    incrementMonth,
    decrementMonth,
    daySelect,
    updateDay,
    confirmDate
  } = useCalendar()

  return (
    <PopUp>
      <PopUpContainer icon={ <CalendarIcon /> }>
        <InputForm
          type='text'
          label='Fecha'
          register={register}
          placeholder='01/02/2024'
          id='date'
          error={error}
        />
      </PopUpContainer>

      <Calendar
        year={year}
        month={month}
        incrementMonth={incrementMonth}
        decrementMonth={decrementMonth}
        daySelect={daySelect}
        updateDay={updateDay}
        confirmDate={confirmDate}
        setValue={setValue}
        />
    </PopUp>
  )
}
