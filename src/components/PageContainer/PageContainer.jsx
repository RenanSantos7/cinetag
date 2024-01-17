import styles from './PageContainer.module.css'

export default function PageContainer({children}) {
    return (
        <section className={styles.pageContainer}>
            {children}
        </section>
    )
}
