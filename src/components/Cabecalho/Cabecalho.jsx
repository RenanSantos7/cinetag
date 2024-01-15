import { Link } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import logo from './logo.png'
import CabecalhoLink from '../CabecalhoLink/CabecalhoLink'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to='/'>
                <img src={logo} alt='Logo do CineTag' />
            </Link>

            <nav>
                <CabecalhoLink url='/' key='home'>Home</CabecalhoLink>
                <CabecalhoLink url='/favoritos' key='favoritos'>Favoritos</CabecalhoLink>
            </nav>
        </header>
    )
}
