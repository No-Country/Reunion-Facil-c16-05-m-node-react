import { cloneElement } from 'react'

export function PopUpContainer ({ children, icon, onOpen }) {
  const { label } = children.props

  return (
    <>
      {
        cloneElement(children,
          {},
          <button
            aria-label={`boton que abre un popup de ${label}`}
            type='button'
            onClick={() => typeof onOpen === 'function' && onOpen()}>
            {icon}
          </button>
        )
      }
    </>
  )
}
