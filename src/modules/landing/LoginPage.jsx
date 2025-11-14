import { useState } from 'react'
import styles from '../../css/Login.module.css'
import { Fragment } from 'react'
import SEOMetadata from '../../SEOMetadata'
import { setCookie } from "../../stores/Cookies.store"

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Hardcoded credentials
  const VALID_USERNAME = 'admin'
  const VALID_PASSWORD = 'password123'

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      setCookie("accessToken", "abc123token", 1)
      setCookie("session_id", crypto.randomUUID(), 1)
      setCookie("session_device", navigator.userAgent, 1)
      setCookie("session_login_time", Date.now().toString(), 1)
      setCookie("session_flag", "logged_in", 1)
      window.location.href = "/dashboard";
      setIsLoggedIn(true)
      setUsername('')
      setPassword('')
    } else {
      setError('Invalid username or password')
      setPassword('')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername('')
    setPassword('')
  }

  return (
    <Fragment>
      <SEOMetadata
        title="Login — NMIS"
        description="Secure login access to the NMIS administrative dashboard."
        keywords="nmis, login, admin"
        image="https://example.com/og-image.png"
        url="https://nmis.gov/login"
        type="website"
        twitterCard="summary_large_image"
      />
      <div className={styles.container}>
        <div className={styles.loginCard}>
          <h1 className={styles.title}>Login</h1>
          {error && <div className={styles.error}>{error}</div>}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="username" className={styles.label}>
                Username
              </label>
              <input
                type="text"
                id="username"
                className={styles.input}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className={styles.button}>
              Login
            </button>
          </form>

        </div>
      </div>


    </Fragment>
  )
}
