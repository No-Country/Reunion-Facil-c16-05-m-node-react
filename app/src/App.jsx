import { Route, Routes } from 'react-router-dom'
import './App.css'
import { EventCreationForm } from './pages/EventCreationForm/EventCreationForm'
import { Header } from './layout/Header/Header'
import { HeaderHome } from './layout/HeaderHome/HeaderHome'
import { HomeEvent } from './pages/HomeEvent/HomeEvent'
import { GuestsInvitation } from './pages/GuestsInvitation'

function App () {
  return (
    <Routes>
      <Route path='/' element={<HeaderHome />}>
        <Route index element={<HomeEvent /> } />
      </Route>
      <Route path='/crear-reunion' element={<Header />}>
        <Route index element={<EventCreationForm />} />
        <Route path='invitado' element={<GuestsInvitation />} />
      </Route>
    </Routes>
  )
}

export default App
