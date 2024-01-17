import { useContext } from 'react'
import styles from './Favoritos.module.css'
import { FilmesContext } from '../../context/FilmesContext'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import CardContainer from '../../components/CardContainer/CardContainer'
import Titulo from '../../components/Titulo/Titulo'

export default function Favoritos() {

    const { favoritos } = useContext(FilmesContext)

    return (
        <>
            <Banner imagem='favoritos' />

            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>

            <CardContainer>
                {favoritos.length
                    ? (favoritos.map((favorito) => (
                        <Card key={favorito.id} video={favorito} />
                      )))
                    : (<p>Você não possui favoritos ainda</p>)}
            </CardContainer>
        </>
    )
}
