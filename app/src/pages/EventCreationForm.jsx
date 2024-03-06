import style from './EventCreationForm.module.css'

import { InputForm } from '../components/Form/InputForm/InputForm'
import { AreaForm } from '../components/Form/AreaForm/AreaForm'
import { EventProposalInput } from '../components/EventProposalInput/EventProposalInput'
import { Header } from '../components/Header/Header'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { EventSchema } from '../validators/EventSchema'
import { ProposalSchema } from '../validators/ProposalSchema'
import { Plus } from '../icons'

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
    const functionThatReturnPromise = () => {
      // eslint-disable-next-line
      //TODO: fetch POST
      return new Promise((resolve) => setTimeout(resolve, 3000))
    }

    toast.promise(
      functionThatReturnPromise,
      {
        pending: 'Creando tu reunión',
        success: 'Promise resolved 👌',
        error: 'Debes tener almenos un invitado 🤯'
      },
      {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })
  })

  return (
    <>
      <Header />
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
          <button disabled type='button' className={style.addGuest}>Agregar Invitados <Plus /></button>
          <button className={style.createEvent} type='submit'> Crear reunión </button>
        </div>
      </form>
      <ToastContainer />
    </>
  )
}
