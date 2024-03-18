import './GuestsInvitation.css'
import { useState } from 'react'
import InputSearch from '../components/InputSearch/InputSearch'
import DisplayInvitations from '../components/DisplayInvitations/DisplayInvitations'
import InviteButton from '../components/InviteButton/InviteButton'

export function GuestsInvitation () {
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setSearchResults([])
    } else {
      const fakeSearchResults = [
        { id: 1, name: 'Catalina' },
        { id: 2, name: 'Santiago' },
        { id: 3, name: 'Alejandra' },
        { id: 4, name: 'Luis' },
        { id: 5, name: 'Jeronimo' },
        { id: 6, name: 'Emiliano' },
        { id: 7, name: 'Jacinta' },
        { id: 8, name: 'Octavio' }
      ]

      const filteredResults = fakeSearchResults.filter((friend) =>
        friend.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setSearchResults(filteredResults)
    }
  }
  return (
    <>
    <div className='page-container'>
      <InputSearch onSearch={handleSearch} />
      <DisplayInvitations searchResults={searchResults} />
      <InviteButton/>
    </div>
    </>
  )
}
