import { createContext, useEffect, useState } from 'react'

export const FilmesContext = createContext()
FilmesContext.displayName = 'Filmes'

export function FilmesProvider({ children }) {
    const [videos, setVideos] = useState([])
    const [favoritos, setFavoritos] = useState([])
    const [notificando, setNotificando] = useState(false)
    const [msgNotificacao, setMsgNotificacao] = useState('')

    useEffect(() => {
        try {
            fetch('https://my-json-server.typicode.com/RenanSantos7/cinetag-api/videos')
                .then(response => response.json())
                .then(data => setVideos(data))
        } catch {
            console.log(error)
        }
    }, [])


    return (
        <FilmesContext.Provider value={{
            favoritos, setFavoritos,
            notificando, setNotificando,
            msgNotificacao, setMsgNotificacao,
            videos
        }}>
            {children}
        </FilmesContext.Provider>
    )

}
