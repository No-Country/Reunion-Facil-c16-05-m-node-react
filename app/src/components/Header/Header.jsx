import { Link, Outlet, useLocation } from 'react-router-dom'
import { LogotipoReunionFacils } from '../../components/LogotipoReunionFacil/LogotipoReunionFacil'
import style from './Header.module.css'

export default function Header () {
  const { pathname } = useLocation()

  if (pathname.endsWith('invitado')) {
    return (
      <>
        <div className={style.header}>
          <nav>
            <Link to="/crear-reunion">⬅</Link>
            <span>Invitados</span>
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
        <span>Invitados</span>
        <LogotipoReunionFacils />
      </div>
      <Outlet />
    </>
  )
}
