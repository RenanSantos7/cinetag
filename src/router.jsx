import Cabecalho from './components/Cabecalho/Cabecalho'
import Rodape from './components/Rodape/Rodape'
import PageContainer from './components/PageContainer/PageContainer'
import Notificacao from './components/Notificacao/Notificacao'
import Favoritos from './pages/Favoritos/Favoritos'
import Inicio from './pages/Inicio/Inicio'
import Player from './pages/Player/Player'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FilmesProvider } from './context/FilmesContext'

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <FilmesProvider>
          <PageContainer>
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/favoritos' element={<Favoritos />} />
              <Route path='/player/:id' element={<Player />} />
            </Routes>
          </PageContainer>
          <Notificacao />
        </FilmesProvider>
        <Rodape />
      </BrowserRouter>
    </>
  )
}
