import React from 'react';
import styles from '@styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>      
      <div className={styles.logoConteiner}>
        <h1 className={styles.logo}>Balloon Voyages</h1>
      </div>
      <img src="/assets/icons/menu-icon.svg" alt="Menu Icon" className={styles.menuIcon}/>
      
    </header>
  );
}