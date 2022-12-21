import React from "react"

import styles from './TeamScore.module.css';

const avatars = {
    Bałwany: 'balwany@2x.png',
    Gwiazdki: 'gwiazdki@2x.png',
    Renifery: 'renifery@2x.png'
}

const TeamScore = props => {
    return <div onClick={() => props.onClick(props.name)} className={`${styles.teamContainer} ${props.name !== props.activeTeamName && styles.fadedOut}`}>
        <div className={styles.teamAvatar}>
            <img src={avatars[props.name]} />
        </div>
        <div className={styles.scoreInput}>
            <div className={styles.teamName}>{props.name}</div>
            <input type="text"/>
        </div>
    </div>
}

export default TeamScore;