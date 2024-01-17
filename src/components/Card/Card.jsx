import styles from './Card.module.css'
import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as iconeFavoritar } from '@fortawesome/free-regular-svg-icons'
import { faHeart as iconeDesfavoritar } from '@fortawesome/free-solid-svg-icons'
import { FilmesContext } from '../../context/FilmesContext'

export default function Card({video}) {

    const [ehFavorito, setEhFavorito] = useState(false)
    const { favoritos, setFavoritos } = useContext(FilmesContext)

    function mudarFavorito() {
        setEhFavorito(!ehFavorito)
        if (favoritos.includes(video)) {
            setFavoritos(prev => prev.filter(
                favoritos => favorito.id !== video.id
            ))
        } else {
            setFavoritos([...favoritos, video])
        }
    }

    return (
        <article className={styles.container}>
            <img src={video.capa} alt={video.titulo} className={styles.capa} />
            <h2>{video.titulo}</h2>
            <FontAwesomeIcon
                icon={ehFavorito ? iconeDesfavoritar : iconeFavoritar}
                className={styles.favoritar}
                onClick={mudarFavorito}
            />
        </article>
    )
}
