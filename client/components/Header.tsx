"use client"; 

import React, { useState } from 'react';
import styles from '@styles/Header.module.css';
import Menu from '@components/Menu'

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className={styles.header}>      
      <div className={styles.logoConteiner}>
        <a href="/home">
          <h1 className={styles.logo}>Balloon Voyages</h1>
        </a>
      </div>
      <img 
      src="/assets/icons/menu-icon.svg" 
      alt="Menu Icon" 
      className={styles.menuIcon} 
      onClick={toggleMenu}/>

      {isMenuVisible && <Menu onClose={toggleMenu} />}
      
    </header>
  );
}