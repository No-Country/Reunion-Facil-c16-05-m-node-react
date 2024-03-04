import { cloneElement, useState } from 'react'
import style from './PopUp.module.css'

export function PopUp ({ children }) {
  const [show, setShow] = useState(false)
  const onClose = () => {
    setShow(false)
  }

  const onOpen = () => {
    setShow(true)
  }

  if (children.length === undefined) throw new Error('Hay un Error en PopUp')

  if (children.length > 2) throw new Error('No debe ir mas que el input y su elemento al que desea realizar popUp')

  return (
    <>
      {show &&
        <div className={style.Popup}>
            <div className={style.popupContent}>
            { cloneElement(children[1], { onClose }) }
            </div>
        </div>
      }
      { cloneElement(children[0], { onOpen }) }
    </>
  )
}
