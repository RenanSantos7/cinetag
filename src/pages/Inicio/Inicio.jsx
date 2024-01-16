import Banner from '../../components/Banner/Banner'
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import Rodape from '../../components/Rodape/Rodape'
import Titulo from '../../components/Titulo/Titulo'
import styles from './Inicio.module.css'

export default function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem='home' />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <Rodape />
        </>
    )
}
