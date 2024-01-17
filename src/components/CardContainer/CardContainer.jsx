import styles from './CardContainer.module.css'

export default function CardContainer({children}) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}
