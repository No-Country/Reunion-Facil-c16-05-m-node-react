import style from './ClockCard.module.css'

function ClockCard ({
  selectedHour,
  selectedMinutes,
  selectedPeriod,
  handleHourChange,
  handleMinutesChange,
  handlePeriodChange,
  onClose,
  setValue,
  onAccept
}) {
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
                onChange={(e) => handleHourChange(e.target.value)}
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
                onChange={(e) => handleMinutesChange(e.target.value)}
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
              className={`${style['cancel-button']} ${style.accepted}`}
              onClick={() => {
                onClose()
              }}
            >
              Cancelar
            </button>
            <button
            className={`${style['accept-button']} ${style.accepted}`}
            onClick={() => {
              onAccept()
              onClose()
            }}
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
