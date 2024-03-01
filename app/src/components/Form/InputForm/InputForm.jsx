import style from './InputForm.module.css'
export function InputForm ({ register, label, error, type, placeholder, id, children, onClick }) {
  return (
    <div className={style.containerInput}>
      <label>
        <span> {label} </span>
        <div className={style.inputIconContainer}>
          <input
            type={type}
            {...register(id)}
            placeholder={placeholder}
            onClick={onClick}
          />
          <div className={style.icon}>{children}</div>
        </div>
      </label>
      <span className={style.error}> {error && error.message} </span>
    </div>
  )
}
