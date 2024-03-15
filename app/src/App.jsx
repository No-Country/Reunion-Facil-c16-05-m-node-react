import { Route, Routes } from 'react-router-dom'
import './App.css'
import { EventCreationForm } from './pages/EventCreationForm/EventCreationForm'
import { Header } from './layout/Header/Header'
import { HeaderHome } from './layout/HeaderHome/HeaderHome'
import { HomeEvent } from './pages/HomeEvent/HomeEvent'

function App () {
  return (
    <Routes>
      <Route path='/' element={<HeaderHome />}>
        <Route index element={<HomeEvent /> } />
      </Route>
      <Route path='/crear-reunion' element={<Header />}>
        <Route index element={<EventCreationForm />} />
        <Route path='invitado' element={<h1>Pantalla de agregar invitado</h1>} />
      </Route>
    </Routes>
  )
}

export default App
