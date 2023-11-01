import styles from "@styles/RegisterForm.module.css";
import React from "react";

function RegisterForm() {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.registerText}>Register</h2>
      <h3 className={styles.toStartAdventureText}>to start adventure</h3>
      <input type="text" placeholder="Username" className={styles.input} />
      <input type="email" placeholder="Mail" className={styles.input} />
      <input
        type="password"
        placeholder="Password"
        className={styles.input + " " + styles.lastInput}
      />
      <button className={styles.signUpButton}>Sign up</button>
      <div className={styles.logIn}>
        Do you have an account? <a href="/">LOG IN</a>
      </div>
    </div>
  );
}

export default RegisterForm;
