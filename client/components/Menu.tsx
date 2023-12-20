import React from 'react';
import styles from '@styles/Menu.module.css';

const Menu = ({ onClose }: { onClose: () => void }) => {

  return (
    <div className={styles.infoContainer}>
      <img
        src="/assets/icons/close-icon.svg"
        alt="Close Icon"
        className={styles.closeIcon}
        onClick={onClose} 
      />

      <div className={styles.helloMessage}>
        <h1>Hi,</h1>
        <h1 className={styles.userName}>UserName!</h1>
      </div>

      <a href="/home">
        <div className={styles.listRow}>
          <img
            src="/assets/icons/flight-icon.svg"
            alt="Flight Icon"
            className={styles.listIcon}
          />
          <h1 className={styles.listText}>Flights</h1>
        </div>
      </a>

      <a href="/add-balloon">
        <div className={styles.listRow}>
          <img
            src="/assets/icons/plus-icon.svg"
            alt="Add Balloon Icon"
            className={styles.listIcon}
          />
          <h1 className={styles.listText}>Add balloon</h1>
        </div>
      </a>

      <a href="/edit-balloon">
        <div className={styles.listRow}>
          <img
            src="/assets/icons/edit-icon.svg"
            alt="Edit Balloon Icon"
            className={styles.listIcon}
          />
          <h1 className={styles.listText}>Edit balloon</h1>
        </div>
      </a>

      <a href="/flight-history">
        <div className={styles.listRow}>
          <img
            src="/assets/icons/history-icon.svg"
            alt="Flight History Icon"
            className={styles.listIcon}
          />
          <h1 className={styles.listText}>Flight history</h1>
        </div>
      </a>

      <a href="/about-us">
        <div className={styles.listRow}>
          <img
            src="/assets/icons/about-us-icon.svg"
            alt="About Us Icon"
            className={styles.listIcon}
          />
          <h1 className={styles.listText}>About us</h1>
        </div>
      </a>

      <div className={styles.lastRow}>
        <h1 className={styles.listText}>Log out</h1>

        <img
          src="/assets/icons/log-out-icon.svg"
          alt="Log Out Icon"
          className={styles.logOutIcon}
        />
      </div>
    </div>
  );
}

export default Menu;