import styles from './stylesheets/signup.module.css'
import dark from './stylesheets/signup.dark.module.css'
import { useTheme } from '../providers/theme'
import { Logo } from '../common/components/logo'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const { isDark, setIsDark } = useTheme()
    const theme = isDark ? dark : styles
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const login = (event) => {
        event.preventDefault()
        // Add code for sending sign up information to the server here
        console.log(` Email: ${email}, Password: ${password}`)
    }

    return (
        <>
            <Logo />
            <div className={theme.formContainer}>
                <form id={styles['form']}>
                    <h1 className={styles.title}>
                        To continue, log in to Spotify.
                    </h1>
                    <label className={styles.query}>
                        <p>Email adress or username</p>
                        <input
                            className={theme.input}
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Enter your email"
                        />
                    </label>

                    <label className={theme.query}>
                        <p>Password</p>
                        <input
                            className={theme.input}
                            type="password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            placeholder="Password"
                        />
                    </label>
                    <button onClick={login} id={styles['signup']}>
                        Login
                    </button>
                    <hr className={theme.separator}></hr>
                    <h1 className={styles.title}>Don't have an account?</h1>
                    <button
                        id={styles['redirect']}
                        onClick={() => navigate('/signup')}
                        className={styles.login}
                    >
                        Sign up
                    </button>
                </form>
            </div>
        </>
    )
}
