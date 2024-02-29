import { cloneElement } from 'react'

export function PopUpContainer ({ children, icon, onOpen }) {
  return (
    <>
      {
        cloneElement(children,
          {},
            <button
                type='button'
                onClick={() => typeof onOpen === 'function' && onOpen()}>
                {icon}
            </button>)
      }
    </>
  )
}
