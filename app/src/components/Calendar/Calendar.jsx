import { WeekDay } from '../WeekDay/WeekDay.jsx'
import style from './Calendar.module.css'
export function Calendar ({
  year,
  month,
  incrementMonth,
  decrementMonth,
  daySelect,
  updateDay,
  confirmDate,
  onClose,
  setValue
}) {
  const LANG = 'es'

  const startOn = new Date(year, month, 1).getDay()

  const numberOfDay = new Date(year, month + 1, 0).getDate()
  const daysofMonth = [...Array(numberOfDay).keys()]

  const intl = new Intl.DateTimeFormat(LANG, {
    month: 'long'
  })

  const monthName = intl.format(new Date(year, month))

  return (
    <div className={style.calendarContain}>
      <header>
        <button type='button' onClick={decrementMonth}> { '<' } </button>
        <h1 className={style['year-month']}>
          {`${monthName.split('')
            .with(0, monthName[0].toUpperCase())
            .join('')
            } ${year}`}
        </h1>
        <button
          type='button'
          onClick={incrementMonth}>
          {'>'}
        </button>
      </header>

      <WeekDay lang={LANG} />

      <ol className={style.days}>
        {
          daysofMonth.map(dayIndex => {
            const idMonth = dayIndex + 1
            return (
            <li
              key={`M-${idMonth}`}
              style={dayIndex === 0
                ? { gridColumnStart: startOn.toString() }
                : {}}
              >
                <button
                  type='button'
                  className={daySelect === idMonth.toString()
                    ? style['day-selected']
                    : ''}

                  onClick={(event) => {
                    const selectValue = event.currentTarget.textContent
                    updateDay({ day: selectValue })
                  }}>
                {idMonth}
              </button>
            </li>
            )
          }
          )
        }
      </ol>
      <footer>
        <button
          type='button'
          onClick={() => {
            if (daySelect === 0) return

            confirmDate({ year, month, day: daySelect })
            const date = `${daySelect.toString().padStart(2, '0')}/${(month + 1).toString().padStart(2, '0')}/${year}`
            setValue('date', date)
            confirmDate({ year, month, day: daySelect })
            if (typeof onClose === 'function') onClose()
          }}>
          Aceptar
        </button>
        <button
          type='button'
          onClick={() => typeof onClose === 'function' && onClose()}>Cancelar</button>
      </footer>
    </div>
  )
}
