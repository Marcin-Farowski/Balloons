"use client"; 

import React from 'react';
import styles from '@styles/FlightHistory.module.css';

export default function FlightHistory() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Full history</h1>

        <div className={styles.oddRow}>
            <h2 className={styles.firstColumn}>Name:</h2>
            <h2 className={styles.secondColumn}>Element 1</h2>
        </div>

        <div className={styles.evenRow}>
            <h2 className={styles.firstColumn}>Start:</h2>
            <h2 className={styles.secondColumn}>51.7592° N, 19.4560° E</h2>
        </div>

        <div className={styles.oddRow}>
            <h2 className={styles.firstColumn}>Altitude:</h2>
            <h2 className={styles.secondColumn}>143.5 km</h2>
        </div>

        <div className={styles.evenRow}>
            <h2 className={styles.firstColumn}>Humidity:</h2>
            <h2 className={styles.secondColumn}>56 %</h2>
        </div>

        <div className={styles.oddRow}>
            <h2 className={styles.firstColumn}>Pressure:</h2>
            <h2 className={styles.secondColumn}>1020,9 hPa</h2>
        </div>

        <div className={styles.evenRow}>
            <h2 className={styles.firstColumn}>Temperature:</h2>
            <h2 className={styles.secondColumn}>12 °C</h2>
        </div>

        <div className={styles.oddRow}>
            <h2 className={styles.firstColumn}>Wind speed:</h2>
            <h2 className={styles.secondColumn}>104 m/s</h2>
        </div>

        <div className={styles.evenRow}>
            <h2 className={styles.firstColumn}>Time:</h2>
            <h2 className={styles.secondColumn}>5.7 s</h2>
        </div>
    </div>
  );
}