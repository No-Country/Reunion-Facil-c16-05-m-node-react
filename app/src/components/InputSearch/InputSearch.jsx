import './InputSearch.css'
import { useState } from 'react'

export default function InputSearch ({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (value) => {
    setSearchTerm(value)
    onSearch(value)
  }

  return (
    <div className='input-search'>
        <input
            className='inputfriends'
            type='text'
            placeholder='Buscar'
            onChange={(e) => handleSearchChange(e.target.value)}
        />
    </div>)
}
