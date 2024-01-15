import './App.css'
import Inicio from './pages/Inicio/Inicio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
