"use client"; 

import React from 'react';
import styles from '@styles/EditBalloonList.module.css';

export default function AddBalloonForm() {

  const data = [
    { name: 'Element 1', start: '51.7592° N, 19.4560° E' },
    { name: 'Element 2', start: '51.7592° N, 19.4560° E' },
    { name: 'Element 3', start: '51.7592° N, 19.4560° E' },
    { name: 'Element 4', start: '51.7592° N, 19.4560° E' },
    { name: 'Element 5', start: '51.7592° N, 19.4560° E' },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>List to edit</h1>

      <table className={styles.list}>
        <tr className={styles.firstRow}>
          <th className={styles.firstColumn}>Name</th>
          <th className={styles.secondColumn}>Start</th>
          <th className={styles.thirdColumn}>Actions</th>
        </tr>
        {data.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
            <td>{row.name}</td>
            <td>{row.start}</td>
            <td>
              <a href="/edit-balloon-id">
               <img
                src="/assets/icons/edit-icon.svg"
                alt="Edit Balloon Icon"
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