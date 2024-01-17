import styles from './Inicio.module.css'
import Banner from '../../components/Banner/Banner'
import Titulo from '../../components/Titulo/Titulo'
import Card from '../../components/Card/Card'
import CardContainer from '../../components/CardContainer/CardContainer'
import videos from '../../json/db.json'

export default function Inicio() {
    return (
        <>
            <Banner imagem='home' />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>

            <CardContainer>
                {videos.map(video => (
                    <Card video={video} key={video.id} />
                ))}
            </CardContainer>
        </>
    )
}
