import RegisterForm from "@components/register/RegisterForm";
import styles from "@styles/page.module.css";

export default function Register() {
  return (
    <main className={styles.main}>
      <h1 className={styles.headerText}>Balloon Voyages</h1>
      <div className={styles.formContainer}>
        <RegisterForm />
      </div>
    </main>
  );
}
