import { Route, Routes } from 'react-router-dom'
import './App.css'
import { EventCreationForm } from './pages/EventCreationForm'
import { Header } from './layout/Header/Header'

function App () {
  return (
    <Routes>
      <Route path='/crear-reunion' element={<Header />}>
        <Route index element={<EventCreationForm />} />
        <Route path='invitado' element={<h1>Pantalla de agregar invitado</h1>} />
      </Route>
    </Routes>
  )
}

export default App
