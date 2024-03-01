import { InputForm } from '../Form/InputForm/InputForm'
import style from './EventProposalInput.module.css'
import { Clock, MapPin } from '../../icons'
import { CalendarAll } from '../CalendarAll/CalendarAll'

export function EventProposalInput ({ register, errors , setValue }) {
  return (
    <div className={style.container}>
      <div className={style.containerTempo}>

        <CalendarAll
          errors={errors?.date}
          register={register}
          setValue={setValue}
         />

        <InputForm
          type='text'
          label='Hora'
          register={register}
          placeholder='19:00'
          id='hour'
          error={errors?.hour}
        >
          <Clock />
        </InputForm>
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
