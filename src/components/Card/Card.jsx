import styles from './Card.module.css'
import { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as iconeFavoritar } from '@fortawesome/free-regular-svg-icons'
import { faHeart as iconeDesfavoritar } from '@fortawesome/free-solid-svg-icons'
import { FilmesContext } from '../../context/FilmesContext'
import { useFavoritos } from '../../hooks/useFavoritos'
import { Link } from 'react-router-dom'

export default function Card({ video }) {
    const {
        favoritos, setFavoritos,
    } = useContext(FilmesContext)

    const [ehFavorito, setEhFavorito] = useState(favoritos.includes(video))

    const { notificar } = useFavoritos()

    function mudarFavorito() {
        setEhFavorito(!ehFavorito)

        if (favoritos.includes(video)) {
            setFavoritos(prev => prev.filter(
                favorito => favorito.id !== video.id
            ))
            notificar(`"${video.titulo}" foi removido dos favoritos`)

        } else {
            setFavoritos([...favoritos, video])
            notificar(`"${video.titulo}" foi adicionado aos favoritos`)
        }
    }

    return (
        <article className={styles.container}>
            <Link to={`/player/${video.id}`}>
                <img src={video.capa} alt={video.titulo} className={styles.capa} />
                <h2>{video.titulo}</h2>
            </Link>
            <FontAwesomeIcon
                icon={ehFavorito ? iconeDesfavoritar : iconeFavoritar}
                className={styles.favoritar}
                onClick={mudarFavorito}
            />
        </article>
    )
}
