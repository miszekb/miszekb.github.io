import { useEffect, useRef } from 'react';
import styles from './Category.module.css';

const Category = props => {
    const categoryBarRef = useRef();

    const showCategory = () => {
        categoryBarRef.current.children[0].innerHTML = props.name;
        categoryBarRef.current.classList.add(styles.activated);
        const audio = new Audio('category_appears.mp3');
        if (audio.paused) audio.play(); 
    };

    useEffect(() => {
        if (categoryBarRef.current.classList[1]) {
            categoryBarRef.current.classList.remove(styles.activated)
            setTimeout(() => {
                showCategory();
            }, 1000)
        } else {
            showCategory();
        }

    }, [props.name])

    return <div ref={categoryBarRef} className={styles.categoryContainer}>
        <div className={styles.categoryBar}></div>
    </div>
}

export default Category;