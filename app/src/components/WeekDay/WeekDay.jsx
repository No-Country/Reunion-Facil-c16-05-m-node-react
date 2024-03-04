import style from './WeekDay.module.css'

export function WeekDay ({ lang }) {
  const intlWeekDay = new Intl.DateTimeFormat(lang, {
    weekday: 'short'
  })

  const weekDayName = [...Array(7).keys()]

  return (
    <ol className={style['days-of-month']}>
      {
        weekDayName.map(dayIndex => {
          const date = new Date(1997, 7, 11 + dayIndex)
          const weekDay = intlWeekDay.format(date)
          return (
            <li key={dayIndex}>
            {weekDay.split('')
              .with(0, weekDay[0].toUpperCase())
              .join('')}
            </li>
          )
        }
        )
      }
    </ol>
  )
}
