import style from './EventCreationForm.module.css'

import { FormEvent } from '../../components/FormEvent/FormEvent'

import { Plus } from '../../icons'
import { Link } from 'react-router-dom'
import { FieldEventCreate } from '../../components/FieldEventCreate/FieldEventCreate'

export function EventCreationForm () {
  return (
      <FormEvent>
        <FieldEventCreate />
        <div className={style.interaction}>
          <Link to='invitado' type='button' className={style.addGuest}>Agregar Invitados <Plus /></Link>
          <button className={style.createEvent} type='submit'> Crear reunión </button>
        </div>
      </FormEvent>
  )
}
