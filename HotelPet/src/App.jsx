import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Rents from './pages/Rents'
import Data from './pages/Data'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Agenda" element={<Rents />} />
        <Route path="/Agendamento" element={<Data />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
