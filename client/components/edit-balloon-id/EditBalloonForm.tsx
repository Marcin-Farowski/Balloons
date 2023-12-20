"use client"; 

import React from 'react';
import styles from '@styles/EditBalloonForm.module.css';

export default function EditBalloonList() {

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Edit balloon</h1>

        <input
          type="text"
          name="balloon name"
          placeholder="Colfast"
          className={styles.input + " " + styles.firstInput}
          required
        />
        <input
          type="text"
          name="start"
          placeholder="51.7592° N, 19.4560° E"
          className={styles.input + " " + styles.firstInput}
          required
        />

        <button className={styles.addButton} >
            Save
        </button>
    </div>
  );
}