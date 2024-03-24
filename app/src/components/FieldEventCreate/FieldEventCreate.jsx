import { useFormContext } from 'react-hook-form'
import { InputForm } from '../Form/InputForm/InputForm'
import { AreaForm } from '../Form/AreaForm/AreaForm'
import { EventProposalInput } from '../EventProposalInput/EventProposalInput'

export function FieldEventCreate () {
  const { formState: { errors }, register } = useFormContext()
  return (
    <>
      <InputForm
      type='text'
      label='Nombre reunión'
      placeholder='Qué título tiene la reunión'
      id='nameEvent'
      register={register}
      error={errors?.nameEvent}
      />

      <AreaForm
        label='Descripción reunión'
        placeholder='Deseas agregar algún detalle'
        id='describeEvent'
        register={register}
        error={errors?.describeEvent}
      />

      <EventProposalInput />

      <AreaForm
        label='Descripción lugar'
        placeholder='Deseas agregar algún detalle'
        id='describePlace'
        register={register}
        error={errors?.describePlace}
      />
    </>
  )
}
