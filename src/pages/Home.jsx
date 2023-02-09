import { Menu } from '../common/components/Menu'
import styles from './stylesheets/home.module.css'
import profile from '../photos/user.default.png'

export const Home = () => {
    return (
        <div className={styles.home}>
            <Menu />
            <div id={styles['window']}>
                <div id={styles['bar']}>
                    {/* <button id={ styles["mini-profile"]}>
                        <img src={ profile}  id={ styles["profile-picture"]}/>
                        <span id={styles["profile-name"]}>tuudug</span>
                    </button> */}
                </div>
            </div>
        </div>
    )
}
