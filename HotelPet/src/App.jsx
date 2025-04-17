import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Rents from './pages/Rents'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Rents" element={<Rents />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
