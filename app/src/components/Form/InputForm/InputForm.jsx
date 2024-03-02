import style from './InputForm.module.css'

export function InputForm ({ register, label, error, type, placeholder, id, children }) {
  return (
    <div className={style.containerInput}>
      <label>
        <span> {label} </span>
        <div>
          <input
            type={type}
            {...register(id)}
            placeholder={placeholder}
          />
          { children }
        </div>
      </label>
      <span className={style.error}> {error && error.message} </span>
    </div>
  )
}
