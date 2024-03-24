import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import style from './FormEvent.module.css'

import { useForm, FormProvider } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { EventSchema } from '../../validators/EventSchema'
import { ProposalSchema } from '../../validators/ProposalSchema'
import { sendEventDetails } from '../../services/sendEventDetails'

export function FormEvent ({ children }) {
  const schema = EventSchema.merge(ProposalSchema)
  const methods = useForm({
    resolver: zodResolver(schema)
  })

  const {
    handleSubmit
  } = methods

  const onSubmit = handleSubmit((data) => {
    const { hour, date } = data
    const [day, month, year] = date.split('/')
    const datetime = `${year}-${month}-${day} ${hour}:00`

    const eventDetails = {
      title: data.nameEvent,
      description: data.describeEvent,
      id_user_org: 2,
      datetime,
      location: data.place,
      description_location: data.describePlace,
      guests: [1, 3, 4]
    }

    const responseEventCreate = sendEventDetails({ eventDetails })

    toast.promise(
      responseEventCreate,
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
      <FormProvider {...methods }>
        <form className={style.formContainer} onSubmit={onSubmit}>
            {children}
            <ToastContainer />
        </form>
      </FormProvider>
  )
}
