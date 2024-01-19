import { useContext, useEffect } from 'react'
import styles from './Notificacao.module.css'
import { FilmesContext } from '../../context/FilmesContext'

export default function Notificacao() {
    const { notificando, msgNotificacao } = useContext(FilmesContext)
    
    useEffect(() => {
        console.log(`notificando: ${notificando}`);
    }, [notificando])

    return (
        <article className={`${styles.notificacao} ${notificando ? styles.aparente : ''}`} >
            {msgNotificacao}
        </article>
    )
}
