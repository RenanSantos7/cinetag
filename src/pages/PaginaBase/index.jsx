import Cabecalho from '../../components/Cabecalho/Cabecalho'
import Rodape from '../../components/Rodape/Rodape'
import PageContainer from '../../components/PageContainer/PageContainer'
import Notificacao from '../../components/Notificacao/Notificacao'
import { FilmesProvider } from '../../context/FilmesContext'
import { Outlet } from 'react-router-dom'

export default function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FilmesProvider>
                <PageContainer>
                    <Outlet />
                </PageContainer>
                <Notificacao />
            </FilmesProvider>
            <Rodape />
        </main>
    )
}
