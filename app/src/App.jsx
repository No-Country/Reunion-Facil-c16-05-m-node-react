import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { EventCreationForm } from './pages/EventCreationForm'
import { GuestsInvitation } from './pages/GuestsInvitation'
import Header from './components/Header/Header'

function App () {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path = '/' element = {<GuestsInvitation/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
