import styles from '../styles/menu.module.css'
import logo from '../../photos/spotify.logo.svg'
import {
    House,
    Search,
    Collection,
    PlusSquareFill,
    SuitHeart,
} from 'react-bootstrap-icons'

export const Menu = () => {
    return (
        <div className={styles.menu}>
            <img src={logo} className={styles.logo} />
            <div id={styles['navigation']}>
                <a className={styles.bar}>
                    <House id={styles['icon']} />
                    <p className={styles.text}>Home</p>
                </a>
                <a className={styles.bar}>
                    <Search id={styles['icon']} />
                    <p className={styles.text}>Search</p>
                </a>
                <a className={styles.bar}>
                    <Collection id={styles['icon']} />
                    <p className={styles.text}>Your Library</p>
                </a>
            </div>
            <div className={styles.bar}>
                <PlusSquareFill id={styles['icon']} />
                <p className={styles.text}>Create Playlist</p>
            </div>
            <div className={styles.bar}>
                <SuitHeart id={styles['icon']} />
                <p className={styles.text}>Liked songs</p>
            </div>

            <div id={styles['playlists']}></div>
        </div>
    )
}
