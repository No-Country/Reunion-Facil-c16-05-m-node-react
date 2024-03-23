import style from './EventCreationForm.module.css'

import { InputForm } from '../../components/Form/InputForm/InputForm'
import { AreaForm } from '../../components/Form/AreaForm/AreaForm'
import { EventProposalInput } from '../../components/EventProposalInput/EventProposalInput'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { EventSchema } from '../../validators/EventSchema'
import { ProposalSchema } from '../../validators/ProposalSchema'
import { Plus } from '../../icons'
import { Link } from 'react-router-dom'

const schema = EventSchema.merge(ProposalSchema)

export function EventCreationForm () {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } =
    useForm({
      resolver: zodResolver(schema)
    })

  const onSubmit = handleSubmit((data) => {
    const { hour, date } = data
    const [day, month, year] = date.split('/')
    const datetime = `${year}-${month}-${day} ${hour}:00`
    const functionThatReturnPromise = () => {
      const obj = {
        title: data.nameEvent,
        description: data.describeEvent,
        id_user_org: 2,
        datetime,
        location: data.place,
        description_location: data.describePlace,
        guests: [1, 3, 4]
      }

      return fetch(`${import.meta.env.VITE_BASE_URL}/meeting`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
        .then(res => {
          if (res.ok) return res.json()

          throw new Error('Algo salio mal')
        })
        .then(
          data => console.log(data)
        )
        .catch(error => {
          console.log(error)
        })
    }

    toast.promise(
      functionThatReturnPromise,
      {
        pending: 'Creando tu reunión',
        success: 'Reunión creada 👌',
        error: 'Hubo un problema con la creacion 🤯'
      },
      {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })
  })

  return (
    <>
      <form className={style.formContainer} onSubmit={onSubmit}>
        <InputForm
          type='text'
          label='Nombre reunión'
          register={register}
          placeholder='Qué título tiene la reunión'
          id='nameEvent'
          error={errors?.nameEvent}
        />

        <AreaForm
          label='Descripción reunión'
          register={register}
          placeholder='Deseas agregar algún detalle'
          id='describeEvent'
          error={errors?.describeEvent}
        />

        <EventProposalInput
          register={register}
          errors={errors}
          setValue={setValue}
        />

        <AreaForm
          label='Descripción lugar'
          register={register}
          placeholder='Deseas agregar algún detalle'
          id='describePlace'
          error={errors?.describePlace}
        />
        <div className={style.interaction}>
          <Link to='invitado' type='button' className={style.addGuest}>Agregar Invitados <Plus /></Link>
          <button className={style.createEvent} type='submit'> Crear reunión </button>
        </div>
      </form>
      <ToastContainer />
    </>
  )
}
