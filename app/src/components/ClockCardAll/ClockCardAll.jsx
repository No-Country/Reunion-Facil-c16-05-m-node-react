import ClockCard from '../ClockCard/ClockCard'
import { Clock as ClockIcon } from '../../icons'
import { InputForm } from '../Form/InputForm/InputForm'
import { useClock } from '../../hook/useClock'
import { PopUp } from '../PopUp/PopUp'
import { PopUpContainer } from '../PopUpContainer/PopUpContainer'
import { useFormContext } from 'react-hook-form'

export function ClockCardAll ({ selectedTime, onTimeChange }) {
  const { setValue, register, formState: { errors } } = useFormContext()
  const {
    selectedHour,
    selectedMinutes,
    selectedPeriod,
    handleHourChange,
    handleMinutesChange,
    handlePeriodChange,
    confirmTime
  } = useClock(setValue)

  return (
    <PopUp>
      <PopUpContainer icon={ <ClockIcon /> }>
      <InputForm
          type='text'
          label='Hora'
          register={register}
          placeholder='19:00'
          id='hour'
          error={errors?.hour}
          value={selectedTime}
          readOnly
        />
      </PopUpContainer>

      <ClockCard
        selectedHour={selectedHour}
        selectedMinutes={selectedMinutes}
        selectedPeriod={selectedPeriod}
        handleHourChange={handleHourChange}
        handleMinutesChange={handleMinutesChange}
        handlePeriodChange={handlePeriodChange}
        confirmTime={confirmTime}
        onAccept={confirmTime}
        onTimeChange={onTimeChange}
      />
    </PopUp>
  )
}
