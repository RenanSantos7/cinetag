import { createContext, useState } from 'react'
import videos from '@/json/db.json'

export const FilmesContext = createContext()
FilmesContext.displayName= 'Filmes'

export function FilmesProvider({children}) {
    const [favoritos, setFavoritos] = useState([])

    return (
        <FilmesContext.Provider value={{favoritos, setFavoritos}}>
            {children}
        </FilmesContext.Provider>
    )

}
