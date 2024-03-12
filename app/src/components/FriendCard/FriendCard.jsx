import './FriendCard.css'

export default function FriendCard ({ name, checked, onCheckboxChange }) {
  return (
    <div className='friend-card'>
      <div className='friend-logo-container'>
        <div>O</div>
      </div>
      <div className='friend-name'>{name}</div>
      <input
        className='checkbox'
        type='checkbox'
        checked={checked}
        onChange={onCheckboxChange}
      />
    </div>
  )
}
