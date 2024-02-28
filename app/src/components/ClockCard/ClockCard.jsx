import { useState } from 'react'
import style from './ClockCard.module.css'

function ClockCard () {
  const [selectedHour, setSelectedHour] = useState('00')
  const [selectedMinutes, setSelectedMinutes] = useState('00')
  const [selectedPeriod, setSelectedPeriod] = useState('')
  const [accepted, setAccepted] = useState(false)

  const handleHourChange = (e) => {
    const hour = e.target.value
    if (hour === '' || (/^\d+$/.test(hour) && Number(hour, 10) >= 0 && Number(hour, 10) <= 24)) {
      setSelectedHour(hour)
    }
  }

  const handleMinutesChange = (e) => {
    const minutes = e.target.value
    if (minutes === '' || (/^\d+$/.test(minutes) && parseInt(minutes, 10) >= 0 && parseInt(minutes, 10) <= 59)) {
      setSelectedMinutes(minutes)
    }
  }

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period)
  }

  const handleCancel = () => {
    // To do: CANCEL and close pop up
  }

  const handleAccept = () => {
    setAccepted(true)
  }

  return (
    <div className={style['clock-card']}>
      <div className={style.content}>
        <h2 className={style.title}>Ingresar hora</h2>
        <div>
          <div className={style.inputs}>
            <div className={style.input}>
              <input
                className={style.hourSelector}
                type="text"
                value={selectedHour}
                onChange={handleHourChange}
                maxLength={2}
              />
              <label className={style.label}>Hora</label>
              </div>
              <span className={style.span}>:</span>
              <div className={style.input}>
              <input
                className={style.hourSelector}
                type="text"
                value={selectedMinutes}
                onChange={handleMinutesChange}
                maxLength={2}
              />
              <label className={style.label}>Minutos</label>
              </div>
              <div className={style['period-buttons']}>
              <button
                className={`${style['period-button']} ${
                  selectedPeriod === 'AM' ? style.selected : ''
                }`}
                onClick={() => handlePeriodChange('AM')}
              >
                AM
              </button>
              <button
                className={`${style['period-button']} ${
                  selectedPeriod === 'PM' ? style.selected : ''
                }`}
                onClick={() => handlePeriodChange('PM')}
              >
                PM
              </button>
              </div>
            </div>
            <div className={style['action-buttons']}>
            <button
              className={`${style['cancel-button']} ${accepted ? style.accepted : ''}`}
              onClick={handleCancel}
            >
              Cancelar
            </button>
            <button
              className={`${style['accept-button']} ${accepted ? style.accepted : ''}`}
              onClick={handleAccept}
            >
              Aceptar
            </button>
          </div>
          </div>
        </div>
      </div>
  )
}

export default ClockCard
