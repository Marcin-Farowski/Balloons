"use client";

import styles from "@styles/RegisterForm.module.css";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

function RegisterForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleRegister();
  };

  const handleRegister = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, lastName, email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const { token } = data;

        localStorage.setItem("jwtToken", token);

        console.log("Registration successful");

        router.push("/home");
      } else {
        setError("Invalid credentials.");
      }
    } catch (error) {
      console.error("An error occurred during register:", error);
    }
  };

  return (
    <div className={styles.component}>
      <h2 className={styles.registerText}>Register</h2>
      <h3 className={styles.toStartAdventureText}>to start adventure</h3>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <input
          type="text"
          placeholder="First name"
          className={styles.input}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last name"
          className={styles.input}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Mail"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input + " " + styles.lastInput}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className={styles.error}>{error}</div>}
        <button className={styles.signUpButton} onClick={() => handleSubmit}>
          Sign up
        </button>
      </form>
      <div className={styles.logIn}>
        Do you have an account? <a href="/">LOG IN</a>
      </div>
    </div>
  );
}

export default RegisterForm;
