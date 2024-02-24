import { InputForm } from '../Form/InputForm/InputForm'
import style from './EventProposalInput.module.css'
import { Clock, Calendar, MapPin } from '../../icons'

export function EventProposalInput ({ register, errors }) {
  return (
    <div className={style.container}>
      <div className={style.containerTempo}>
        <InputForm
          type='text'
          label='Fecha'
          register={register}
          placeholder='01/02/2024'
          id='date'
          error={errors?.date}
        >
          <Calendar />
        </InputForm>

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
