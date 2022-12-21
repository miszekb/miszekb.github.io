import { useState } from 'react';
import styles from './Score.module.css';
import TeamScore from './TeamScore/TeamScore';

const Score = () => {
    const [ activeTeam, setActiveTeam ] = useState(null); 

    const chooseTeam = (teamName) => {
        setActiveTeam(teamName);
        const audio = new Audio('team_selection.mp3');
        audio.play();
    }

    return <div className={styles.scoreSection}>
        <TeamScore key="Bałwany" name="Bałwany" onClick={chooseTeam} activeTeamName={activeTeam} />
        <TeamScore key="Renifery" name="Renifery" onClick={chooseTeam} activeTeamName={activeTeam} />
        <TeamScore key="Gwiazdki" name="Gwiazdki" onClick={chooseTeam} activeTeamName={activeTeam} />
    </div>
}

export default Score;