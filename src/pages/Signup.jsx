import React, { useState } from 'react'
import styles from './stylesheets/signup.module.css'
import dark from './stylesheets/signup.dark.module.css'
import { useTheme } from '../providers/theme'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../common/components/logo'

export const Signup = () => {
    const { isDark, _ } = useTheme()
    const theme = isDark ? dark : styles
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const signup = (event) => {
        event.preventDefault()
        // Add code for sending sign up information to the server here
        console.log(
            `Username: ${username}, Email: ${email}, Password: ${password}`
        )
    }

    return (
        <>
            <Logo />
            <div className={theme.formContainer}>
                <form id={ styles["form"]}>
                    <h1 className={styles.title}>
                        Sign up with your email address
                    </h1>
                    <label className={styles.query}>
                        <p>What's your email?</p>
                        <input
                            className={ theme.input}
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Enter your email"
                        />
                    </label>

                    <label className={styles.query}>
                        <p>Create a password</p>
                        <input
                            className={ theme.input}
                            type="password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            placeholder="Create username"
                        />
                    </label>

                    <label className={styles.query}>
                        <p>What should we call you?</p>
                        <input
                            className={ theme.input}
                            type="text"
                            value={username}
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                            placeholder="Enter a profile name"
                        />
                    </label>
                    <p className={styles.subtitle}>
                        By clicking on sign-up, you agree to Spotify's
                        <a
                            href="https://www.spotify.com/mn/legal/end-user-agreement/"
                            className={styles.hypertext}
                        >
                            {' '}
                            Terms and Conditions of Use.
                        </a>
                        To learn more about how Spotify collects, uses, shares
                        and protects your personal data, please see
                        <a
                            href="https://www.spotify.com/mn/legal/privacy-policy/"
                            className={styles.hypertext}
                        >
                            {' '}
                            Spotify's Privacy Policy.
                        </a>
                    </p>
                    <button onClick={signup} id={styles["signup"]}>
                        Sign Up
                    </button>
                    <hr />
                    <h1 className={styles.title}>Already have an account?</h1>
                    <button
                        onClick={() => navigate('/login')}
                        id={styles["redirect"]}
                    >
                        Log in
                    </button>
                </form>
            </div>
        </>
    )
}
