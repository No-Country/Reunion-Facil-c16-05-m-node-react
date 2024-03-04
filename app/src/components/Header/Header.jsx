import { LogotipoReunionFacils } from '../LogotipoReunionFacil/LogotipoReunionFacil'
import style from './Header.module.css'

export function Header () {
  return (
    <div className={style.header}>
      <span>Crear nueva reunión</span>
      <LogotipoReunionFacils />
    </div>
  )
}
