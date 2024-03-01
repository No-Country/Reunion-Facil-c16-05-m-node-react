import { cloneElement } from 'react'
import './PopUpContainer.css'

export function PopUpContainer ({ children, icon, onOpen }) {
  return (
    <>
      {
        cloneElement(children,
          {},
            <button
              className='icon-input'
              type='button'
              onClick={() => typeof onOpen === 'function' && onOpen()}>
              {icon}
            </button>)
      }
    </>
  )
}
