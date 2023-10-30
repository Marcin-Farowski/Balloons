import LoginForm from "@components/LoginForm";
import styles from "@styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.headerText}>Balloon Voyages</h1>
      <div className={styles.formContainer}>
        <LoginForm />
      </div>
    </main>
  );
}
