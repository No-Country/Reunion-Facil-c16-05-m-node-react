import { Link, Outlet, useLocation } from 'react-router-dom'
import { LogotipoReunionFacils } from '../../components/LogotipoReunionFacil/LogotipoReunionFacil'
import style from './Header.module.css'
import { Arrow } from '../../icons'

export function Header () {
  const { pathname } = useLocation()

  if (pathname.endsWith('invitado')) {
    return (
      <>
        <div className={style.header}>
          <nav>
            <Link to="/crear-reunion">
              <Arrow />
              <span>Invitados</span>
            </Link>
          </nav>
          <LogotipoReunionFacils />
        </div>
        <Outlet />
      </>
    )
  }

  return (
    <>
      <div className={style.header}>
        <nav>
          <Link to="/">
            <Arrow />
            <span>Crear nueva reunión</span>
          </Link>
        </nav>
        <LogotipoReunionFacils />
      </div>
      <Outlet />
    </>
  )
}
