import styles from './Letters.module.css';

const FakeLetterRow = () => {
    return <div className={styles.lettersRow}>
        <div className={`${styles.letterCard} ${styles.unactive}`} />
        <div className={`${styles.letterCard} ${styles.unactive}`} />
        <div className={`${styles.letterCard} ${styles.unactive}`} />
        <div className={`${styles.letterCard} ${styles.unactive}`} />
        <div className={`${styles.letterCard} ${styles.unactive}`} />
        <div className={`${styles.letterCard} ${styles.unactive}`} />
        <div className={`${styles.letterCard} ${styles.unactive}`} />
        <div className={`${styles.letterCard} ${styles.unactive}`} />
        <div className={`${styles.letterCard} ${styles.unactive}`} />
</div>
}

export default FakeLetterRow;