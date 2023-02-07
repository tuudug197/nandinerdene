import { Menu } from '../common/components/Menu'
import styles from './stylesheets/home.module.css'

export const Home = () => {
    return (
        <div className={styles.home}>
            <Menu />
        </div>
    )
}
