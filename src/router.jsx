import Favoritos from './pages/Favoritos/Favoritos'
import Inicio from './pages/Inicio/Inicio'
import Player from './pages/Player/Player'
import NaoEncontrado from './pages/NaoEcontrado/NaoEncontrado'
import PaginaBase from './pages/PaginaBase'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PaginaBase />}>
            <Route index element={<Inicio />} />
            <Route path='favoritos' element={<Favoritos />} />
            <Route path='player/:id' element={<Player />} />
            <Route path='*' element={<NaoEncontrado />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
