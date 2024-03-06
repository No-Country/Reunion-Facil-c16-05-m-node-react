import { InputForm } from '../Form/InputForm/InputForm'
import style from './EventProposalInput.module.css'

import { MapPin } from '../../icons'
import { CalendarAll } from '../CalendarAll/CalendarAll'
import { ClockCardAll } from '../ClockCardAll/ClockCardAll'
import { useState } from 'react'

export function EventProposalInput ({ register, errors, setValue }) {
  const [selectedTime, setSelectedTime] = useState('19:00')

  const handleTimeChange = (time) => {
    setSelectedTime(time)
    setValue('hour', time)
  }

  return (
    <div className={style.container}>
      <div className={style.containerTempo}>

        <CalendarAll
          error={errors?.date}
          register={register}
          setValue={setValue}
        />

        <ClockCardAll
          error={errors?.hour}
          register={register}
          selectedTime={selectedTime}
          onTimeChange={handleTimeChange}
          setValue={setValue}
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
