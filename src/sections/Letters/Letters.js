import styles from './Letters.module.css';

const Letters = props => {
    return <div className={styles.lettersContainer}>
        <div className={styles.lettersRow}>
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
        <div className={styles.lettersRow}>
            <div className={`${styles.letterCard} ${styles.unactive}`} />
            <div className={`${styles.letterCard} ${styles.unactive}`} />
            <div className={`${styles.letterCard} ${styles.unactive}`} />
            <div className={`${styles.letterCard} ${styles.active}`} />
            <div className={`${styles.letterCard} ${styles.active}`} />
            <div className={`${styles.letterCard} ${styles.active}`} />
            <div className={`${styles.letterCard} ${styles.active}`} />
            <div className={`${styles.letterCard} ${styles.active}`} />
            <div className={`${styles.letterCard} ${styles.active}`} />
            <div className={`${styles.letterCard} ${styles.unactive}`} />
            <div className={`${styles.letterCard} ${styles.unactive}`} />
            <div className={`${styles.letterCard} ${styles.unactive}`} />
        </div>
        <div className={styles.lettersRow}>
            <div className={`${styles.letterCard} ${styles.unactive}`} />
            <div className={`${styles.letterCard} ${styles.unactive}`} />
            <div className={`${styles.letterCard} ${styles.unactive}`} />
            <div className={`${styles.letterCard} ${styles.active}`} />
            <div className={`${styles.letterCard} ${styles.active}`} />
            <div className={`${styles.letterCard} ${styles.active}`} />
            <div className={`${styles.letterCard} ${styles.active}`} />
            <div className={`${styles.letterCard} ${styles.active}`} />
            <div className={`${styles.letterCard} ${styles.active}`} />
            <div className={`${styles.letterCard} ${styles.unactive}`} />
            <div className={`${styles.letterCard} ${styles.unactive}`} />
            <div className={`${styles.letterCard} ${styles.unactive}`} />
        </div>
        <div className={styles.lettersRow}>
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
    </div>
}

export default Letters;