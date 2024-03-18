import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Cross, Hamburger, Home, LogoReunionFacil, User } from '../../icons'
import style from './HeaderHome.module.css'

export function HeaderHome () {
  const [unfolded, setUnfolded] = useState(false)

  return (
    <>
      <div className={style.headerContainer}>
        <div className={style.containHeaderHome}>
          <button
            onClick={() => { setUnfolded(unfold => !unfold) }}
          > {
              unfolded ? <Cross /> : <Hamburger />
          }
          </button>
          <span>
            Reunion <br/> Facil
          </span>
        </div>
      </div>

      { unfolded && (
      <ul className={style.menu}>
          <li>
            <Link to='/'>
              <Home />
              <span>HOME</span>
            </Link>
        </li>
          {/* <li>
            <Link to='#'>
              <User />
              <span>PERFIL</span>
            </Link>
        </li> */}
          <li>
            <Link to='/crear-reunion'>
              <LogoReunionFacil />
              <span>CREAR REUNIÓN</span>
            </Link>
        </li>
      </ul>
      )}
      <Outlet />
    </>
  )
}
