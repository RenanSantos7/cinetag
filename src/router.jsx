import Favoritos from './pages/Favoritos/Favoritos'
import Inicio from './pages/Inicio/Inicio'
import Cabecalho from './components/Cabecalho/Cabecalho'
import Rodape from './components/Rodape/Rodape'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageContainer from './components/PageContainer/PageContainer'
import { FilmesProvider } from './context/FilmesContext'
import Notificacao from './components/Notificacao/Notificacao'

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
            </Routes>
          </PageContainer>
          <Notificacao />
        </FilmesProvider>
        <Rodape />
      </BrowserRouter>
    </>
  )
}
