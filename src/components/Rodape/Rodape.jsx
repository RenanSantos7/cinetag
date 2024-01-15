import styles from './Rodape.module.css'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__wrapper}>
                <p>Desenvolvido por Renan Santos</p>
                <p>No curso <em>React: praticando React com Js</em> da Alura</p>
            </div>
        </footer>
    )
}
