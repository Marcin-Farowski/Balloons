"use client"; 

import React from 'react';
import styles from '@styles/AddBalloonForm.module.css';

export default function AddBalloonForm() {

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Add new balloon</h1>

        <input
          type="text"
          name="balloon name"
          placeholder="Balloon name"
          className={styles.input + " " + styles.firstInput}
          required
        />
        <input
          type="text"
          name="start"
          placeholder="Start"
          className={styles.input + " " + styles.firstInput}
          required
        />

        <button className={styles.addButton} >
            Add balloon
        </button>
    </div>
  );
}