import './App.css'
import { Calendar } from './components/Calendar/Calendar'
import { CalendarProvider } from './context/CalendarContext'

function App () {
  return (
    <>
      {/* <h1>Inicio de la App Reunion Facil</h1> */}
      <CalendarProvider>
        {/* //TODO: Input Calendar */}
        <Calendar />
      </CalendarProvider>
    </>
  )
}

export default App
