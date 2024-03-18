import { useEffect, useState } from 'react'
import { Plus } from '../../icons'
import style from './HomeEvent.module.css'

export function HomeEvent () {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/meeting/1`)
      .then(res => {
        if (res.ok) return res.json()
      })
      .then(data => {
        if (!data) return setEvents([])

        const newData = data.map(event => {
          return {
            idMeeting: event.id_meeting,
            idUserOrg: event.id_user_org,
            idSuggestion: event.id_suggestion,
            location: event.suggestion.location,
            datetime: event.suggestion.datetime
          }
        })

        setEvents(newData)
      })
  }, [])

  const timeformat = new Intl.DateTimeFormat('es', {
    dateStyle: 'short',
    timeStyle: 'short'
  })

  return (
      <div className={style.containPrincipal}>
          {
              events.length !== 0
                ? events.map(event => {
                  const [day, hour] = timeformat
                    .format(new Date(event.datetime)).split(',')

                  return (
                    <article key={event.idSuggestion} className={style.cardSuggestion}>
                      <div>
                        <span>
                            {
                            `${day}`
                                }
                        </span>
                        <span>{event.location}</span>
                      </div>
                      <h3>{hour}</h3>
                    </article>
                  )
                })
                : <div className={style.plus}> <Plus /> </div>
          }
    </div>
  )
}
