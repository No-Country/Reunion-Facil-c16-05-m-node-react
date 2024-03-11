import { useState } from 'react'
import style from './GuestSelected.module.css'

export default function GuestSelected () {
  const [listGuests, setListGuests] = useState([{ idUser: 1, nickname: 'A' }, { idUser: 2, nickname: 'B' }, { idUser: 3, nickname: 'C' }])

  const handleRemove = ({ nickname }) => () => {
    setListGuests((listGuests) => {
      const newListNames = listGuests.filter((guest) => guest.nickname !== nickname)
      return newListNames
    })
  }

  return (
  <section className={style.listGuestSelected}>
      {
        listGuests.map(({ idUser, nickname }) => {
          return (
        <article
          key={idUser}
          className={style.containGuest}>
          <span>{nickname[0].toUpperCase()}</span>
          <button onClick={handleRemove({ nickname })}>❌</button>
        </article>
          )
        })
      }
  </section>
  )
}
