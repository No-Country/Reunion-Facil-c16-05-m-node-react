import { InputForm } from '../Form/InputForm/InputForm'
import style from './EventProposalInput.module.css'

import { MapPin } from '../../icons'
import { CalendarAll } from '../CalendarAll/CalendarAll'
import { ClockCardAll } from '../ClockCardAll/ClockCardAll'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

export function EventProposalInput () {
  const [selectedTime, setSelectedTime] = useState('19:00')
  const { setValue, register, formState: { errors } } = useFormContext()

  const handleTimeChange = (time) => {
    setSelectedTime(time)
    setValue('hour', time)
  }

  return (
    <div className={style.container}>
      <div className={style.containerTempo}>

        <CalendarAll />

        <ClockCardAll
          selectedTime={selectedTime}
          onTimeChange={handleTimeChange}
        />
      </div>

      <InputForm
        type='text'
        label='Lugar'
        register={register}
        placeholder='Honduras 5560,Buenos Aires'
        id='place'
        error={errors?.place}
      >
        <MapPin />
      </InputForm>
    </div>
  )
}
