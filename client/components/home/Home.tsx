"use client"; 

import React from 'react';
import styles from '@styles/Home.module.css';

export default function Home() {

  const data = [
    { name: 'Element 1', start: '51.7592° N, 19.4560° E', time: '3.434', latitude: '51.7592° N', longitude: '19.4560° E', altitude: '143.5', humidity: '56', pressure: '1020,9', temperature: '12' },
    { name: 'Element 2', start: '51.7592° N, 19.4560° E', time: '5.282', latitude: '51.7592° N', longitude: '19.4560° E', altitude: '143.5', humidity: '56', pressure: '1020,9', temperature: '12' },
    { name: 'Element 3', start: '51.7592° N, 19.4560° E', time: '6.393', latitude: '51.7592° N', longitude: '19.4560° E', altitude: '143.5', humidity: '56', pressure: '1020,9', temperature: '12' },
    { name: 'Element 4', start: '51.7592° N, 19.4560° E', time: '7.393', latitude: '51.7592° N', longitude: '19.4560° E', altitude: '143.5', humidity: '56', pressure: '1020,9', temperature: '12' },
    { name: 'Element 5', start: '51.7592° N, 19.4560° E', time: '8.383', latitude: '51.7592° N', longitude: '19.4560° E', altitude: '143.5', humidity: '56', pressure: '1020,9', temperature: '12' },
    { name: 'Element 5', start: '51.7592° N, 19.4560° E', time: '8.383', latitude: '51.7592° N', longitude: '19.4560° E', altitude: '143.5', humidity: '56', pressure: '1020,9', temperature: '12' },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Current flights</h1>

      <table className={styles.list}>
        <tr className={styles.firstRow}>
          <th className={styles.firstColumn}>Name</th>
          <th className={styles.secondColumn}>Start</th>
          <th className={styles.thirdColumn}>Current time</th>
          <th className={styles.fourthColumn}>Latitude</th>
          <th className={styles.fifthColumn}>Longitude</th>
          <th className={styles.sixthColumn}>Altitude</th>
          <th className={styles.seventhhColumn}>Humidity</th>
          <th className={styles.eighthColumn}>Pressure</th>
          <th className={styles.ninthColumn}>Temperature</th>
        </tr>
        {data.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
            <td>{row.name}</td>
            <td>{row.start}</td>
            <td>{row.time} s</td>
            <td>{row.latitude}</td>
            <td>{row.longitude}</td>
            <td>{row.altitude} km</td>
            <td>{row.humidity} %</td>
            <td>{row.pressure} hPa</td>
            <td>{row.temperature} °C</td>
          </tr>
        ))}
      </table>
    </div>
  );
}