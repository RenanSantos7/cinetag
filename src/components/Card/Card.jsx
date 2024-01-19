import styles from './Card.module.css'
import { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as iconeFavoritar } from '@fortawesome/free-regular-svg-icons'
import { faHeart as iconeDesfavoritar } from '@fortawesome/free-solid-svg-icons'
import { FilmesContext } from '../../context/FilmesContext'
import { useFavoritos } from '../../hooks/useFavoritos'

export default function Card({ video }) {
    const { 
        favoritos, setFavoritos,
        notificando, setNotificando,
        msgNotificacao, setMsgNotificacao
    } = useContext(FilmesContext)
    
    const [ehFavorito, setEhFavorito] = useState(favoritos.includes(video))

    function notificar(msg) {
        const tempoNotificacao = 3000
        setNotificando(true)
        setTimeout(setNotificando(false), tempoNotificacao)
        setMsgNotificacao(`O filme "${video.titulo}" ${msg}!`)
        console.log(`notifiquei: ${msgNotificacao}`);
    }

    function mudarFavorito() {
        setEhFavorito(!ehFavorito)

        if (favoritos.includes(video)) {
            setFavoritos(prev => prev.filter(
                favorito => favorito.id !== video.id
            ))
            notificar('foi removido dos favoritos')

        } else {
            setFavoritos([...favoritos, video])
            notificar('foi adicionado aos favoritos')
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
