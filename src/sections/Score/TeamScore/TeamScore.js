import { useState } from "react"

import styles from './TeamScore.module.css';

const TeamScore = props => {
    const [ teamsScore, setTeamsScore ] = useState(0);

    return <div className={styles.teamContainer}>
        <div className={styles.teamAvatar}>
            <img src="https://previews.123rf.com/images/jpgon/jpgon1411/jpgon141100521/33774351-illustration-of-a-cute-star-avatar-wearing-glasses.jpg"/>
        </div>
        <div className={styles.scoreInput}>
            <div className={styles.teamName}>{props.name}</div>
            {teamsScore}
        </div>
    </div>
}

export default TeamScore;