import styles from './stylesheets/login.module.css'
import dark from './stylesheets/login.dark.module.css'
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
        <div className={styles.login}>
            <Logo />
            <div className={theme.formContainer}>
                <div>
                    <h1 className={theme.white} id={theme.title}>
                        To continue, log in to Spotify.
                    </h1>
                    <form>
                        <label>
                            <p className={theme.white}>
                                Email adress or username
                            </p>
                            <input
                                className={theme.input}
                                type="email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                placeholder="Enter your email"
                            />
                        </label>

                        <label>
                            <p className={theme.white}>Password</p>
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

                        <button onClick={login} id={styles['login']}>
                            Login
                        </button>
                        <hr></hr>
                        <h1 className={theme.white}>Don't have an account?</h1>
                        <button
                            onClick={() => navigate('/signup')}
                            className={styles.login}
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
