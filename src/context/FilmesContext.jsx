import { createContext, useState } from 'react'
import videos from '@/json/db.json'

export const FilmesContext = createContext()
FilmesContext.displayName= 'Filmes'

export function FilmesProvider({children}) {
    const [favoritos, setFavoritos] = useState([])
    const [notificando, setNotificando] = useState(false)
    const [msgNotificacao, setMsgNotificacao] = useState('')

    return (
        <FilmesContext.Provider value={{
            favoritos, setFavoritos,
            notificando, setNotificando,
            msgNotificacao, setMsgNotificacao
        }}>
            {children}
        </FilmesContext.Provider>
    )

}
