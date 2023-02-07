import styles from '../styles/logo.module.css'
import { useTheme } from '../../providers/theme'
import { Sun, Moon } from 'react-bootstrap-icons'
import logo from '../../photos/spotify.logo.noir.png'

export const Logo = () => {
    const { isDark, setIsDark } = useTheme()

    return (
        <div className={styles.logoContainer}>
            <img src={logo} className={styles.logo}></img>

            {isDark ? (
                <Moon
                    id={styles['moon']}
                    onClick={() => setIsDark((prev) => !prev)}
                />
            ) : (
                <Sun
                    id={styles['sun']}
                    onClick={() => setIsDark((prev) => !prev)}
                />
            )}
        </div>
    )
}
