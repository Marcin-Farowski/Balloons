"use client"; 

import React from 'react';
import styles from '@styles/FlightHistoryList.module.css';

export default function FlightHistoryList() {

  const data = [
    { name: 'Element 1', start: '51.7592° N, 19.4560° E', altitude: '143.5', humidity: '56', pressure: '1020,9', temperature: '12' },
    { name: 'Element 2', start: '51.7592° N, 19.4560° E', altitude: '143.5', humidity: '56', pressure: '1020,9', temperature: '12' },
    { name: 'Element 3', start: '51.7592° N, 19.4560° E', altitude: '143.5', humidity: '56', pressure: '1020,9', temperature: '12' },
    { name: 'Element 4', start: '51.7592° N, 19.4560° E', altitude: '143.5', humidity: '56', pressure: '1020,9', temperature: '12' },
    { name: 'Element 5', start: '51.7592° N, 19.4560° E', altitude: '143.5', humidity: '56', pressure: '1020,9', temperature: '12' },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Flight history</h1>

      <table className={styles.list}>
        <tr className={styles.firstRow}>
          <th className={styles.firstColumn}>Name</th>
          <th className={styles.secondColumn}>Start</th>
          <th className={styles.thirdColumn}>Altitude</th>
          <th className={styles.fourthColumn}>Humidity</th>
          <th className={styles.fifthColumn}>Pressure</th>
          <th className={styles.sixthColumn}>Temperature</th>
          <th className={styles.seventhColumn}>Actions</th>
        </tr>
        {data.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
            <td>{row.name}</td>
            <td>{row.start}</td>
            <td>{row.altitude} km</td>
            <td>{row.humidity} %</td>
            <td>{row.pressure} hPa</td>
            <td>{row.temperature} °C</td>
            <td>
              <a href="/flight-history-id">
               <img
                src="/assets/icons/more.svg"
                alt="Action button"
                className={styles.editIcon}
                />
              </a>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}