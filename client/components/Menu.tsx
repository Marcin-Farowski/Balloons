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

      <div className={styles.listRow}>
        <img
          src="/assets/icons/flight-icon.svg"
          alt="Flight Icon"
          className={styles.listIcon}
        />
        <h1 className={styles.listText}>Flights</h1>
      </div>

      <div className={styles.listRow}>
        <img
          src="/assets/icons/plus-icon.svg"
          alt="Flight Icon"
          className={styles.listIcon}
        />
        <h1 className={styles.listText}>Add balloon</h1>
      </div>

      <div className={styles.listRow}>
        <img
          src="/assets/icons/edit-icon.svg"
          alt="Flight Icon"
          className={styles.listIcon}
        />
        <h1 className={styles.listText}>Edit balloon</h1>
      </div>

      <div className={styles.listRow}>
        <img
          src="/assets/icons/history-icon.svg"
          alt="Flight Icon"
          className={styles.listIcon}
        />
        <h1 className={styles.listText}>Flight history</h1>
      </div>

      <div className={styles.listRow}>
        <img
          src="/assets/icons/about-us-icon.svg"
          alt="Flight Icon"
          className={styles.listIcon}
        />
        <h1 className={styles.listText}>About us</h1>
      </div>

      <div className={styles.lastRow}>
        <h1 className={styles.listText}>Log out</h1>

        <img
          src="/assets/icons/log-out-icon.svg"
          alt="Flight Icon"
          className={styles.logOutIcon}
        />
      </div>
    </div>
  );
}

export default Menu;