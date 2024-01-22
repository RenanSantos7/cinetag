import styles from './NaoEncontrado.module.css'

export default function NaoEncontrado() {
    return (
        <section className={styles.container}>
            <h2>Ooops...</h2>
            <p>O conteúdo que você procura não foi encontrado</p>
        </section>
    )
}
