import { useEffect, useRef } from 'react';
import styles from './Category.module.css';

const Category = props => {
    const categoryBarRef = useRef();

    useEffect(() => {
        categoryBarRef.current.classList.add(styles.activated);
        const audio = new Audio('category_appears.mp3');
        audio.play();
    }, [])

    return <div ref={categoryBarRef} className={styles.categoryContainer}>
        <div className={styles.categoryBar}>{props.name}</div>
    </div>
}

export default Category;