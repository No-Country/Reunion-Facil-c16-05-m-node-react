// DisplayInvitations.jsx

import { useState, useEffect } from 'react'
import FriendCard from '../FriendCard/FriendCard'
import './DisplayInvitations.css'

export default function DisplayInvitations ({ searchResults }) {
  const [checkedFriends, setCheckedFriends] = useState({})

  useEffect(() => {
    // Reset checkedFriends when searchResults change
    setCheckedFriends({})
  }, [searchResults])

  const handleCheckboxChange = (friendId) => {
    setCheckedFriends((prevCheckedFriends) => ({
      ...prevCheckedFriends,
      [friendId]: !prevCheckedFriends[friendId]
    }))
  }

  return (
    <>
      <div className='container-full'>
        <div className='container'>
          {searchResults.map((friend) => (
            <FriendCard
              key={friend.id}
              name={friend.name}
              checked={checkedFriends[friend.id] || false}
              onCheckboxChange={() => handleCheckboxChange(friend.id)}
            />
          ))}
        </div>
      </div>
    </>
  )
}
