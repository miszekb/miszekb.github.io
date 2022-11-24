import styles from './Score.module.css';
import TeamScore from './TeamScore/TeamScore';

const Score = props => {
    return <div className={styles.scoreSection}>
        <TeamScore name="Choinki" />
        <TeamScore name="Gwiazdki" />
        <TeamScore name="Bombki" />
    </div>
}

export default Score;