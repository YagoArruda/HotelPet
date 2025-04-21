import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Schedule from './pages/Schedule'
import Data from './pages/Data'
import New from './pages/New'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Agenda" element={<Schedule />} />
        <Route path="/Agendamento" element={<Data />} />
        <Route path="/Agendar" element={<New />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
