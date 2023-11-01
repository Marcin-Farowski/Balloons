import styles from "@styles/LoginForm.module.css";
import React from "react";

function LoginForm() {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.loginText}>Login</h2>
      <h3 className={styles.toStartAdventureText}>to start adventure</h3>
      <input
        type="text"
        placeholder="Username"
        className={styles.input + " " + styles.firstInput}
      />
      <input type="password" placeholder="Password" className={styles.input} />
      <a href="#" className={styles.forgotPassword}>
        Forgot password?
      </a>
      <button className={styles.loginButton}>Log in</button>
      <div className={styles.signUp}>
        Need an account? <a href="/register">SIGN UP</a>
      </div>
    </div>
  );
}

export default LoginForm;
