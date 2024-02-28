import style from './AreaForm.module.css'

export function AreaForm ({ register, label, error, placeholder, id }) {
  return (
    <div className={style.containerArea}>
      <label>
        <span> {label} </span>
        <textarea
          {...register(id)}
          rows='3'
          placeholder={placeholder}
        />
      </label>
      <span className={style.error}> {error && error.message} </span>
    </div>
  )
}
