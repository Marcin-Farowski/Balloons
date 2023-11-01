"use client";

import styles from "@styles/LoginForm.module.css";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleLogin();
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/v1/auth/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const { token } = data;

        localStorage.setItem("jwtToken", token);

        console.log("Login successful");

        router.push("/home");
      } else {
        setError("Invalid credentials.");
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  return (
    <div className={styles.component}>
      <h2 className={styles.loginText}>Login</h2>
      <h3 className={styles.toStartAdventureText}>to start adventure</h3>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input + " " + styles.firstInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className={styles.error}>{error}</div>}
        <a href="#" className={styles.forgotPassword}>
          Forgot password?
        </a>
        <button className={styles.loginButton} onClick={() => handleSubmit}>
          Log in
        </button>
      </form>
      <div className={styles.signUp}>
        Need an account? <a href="/register">SIGN UP</a>
      </div>
    </div>
  );
}

export default LoginForm;
