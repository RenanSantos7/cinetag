import styles from './Player.module.css'
import Banner from '../../components/Banner/Banner'
import Titulo from '../../components/Titulo/Titulo'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { FilmesContext } from '../../context/FilmesContext'
import NaoEncontrado from '../NaoEcontrado/NaoEncontrado'

export default function Player() {

    const parametros = useParams()

    const { videos } = useContext(FilmesContext)

    const video = videos.find(video => (
        video.id === Number(parametros.id)
    ))

    if (!video) {
        return <NaoEncontrado />
    }

    return (
        <>
            <Banner imagem='player' />
            <Titulo>
                <h1>{video.titulo}</h1>
            </Titulo>

            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    titulo={video.titulo}
                    frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen="true"
                ></iframe>
            </section>
        </>
    )
}
