import styles from "../../css/Login.module.css"
import { deleteCookie } from "../../stores/Cookies.store"

export default function DashboardPage() {

  const handleLogout = () => {
    deleteCookie("accessToken");
    deleteCookie("session_id");
    deleteCookie("session_device");
    deleteCookie("session_login_time");
    deleteCookie("session_flag");

    window.location.href = "/";
  };

  return (
    <div className={styles.container}>
      <div className={styles.welcomeCard}>
        <h1 className={styles.welcomeTitle}>Welcome!</h1>
        <p className={styles.welcomeText}>
          You have successfully logged in to your dashboard.
        </p>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      </div>
    </div>
  );
}
