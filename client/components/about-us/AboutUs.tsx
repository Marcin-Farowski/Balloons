"use client"; 

import React from 'react';
import styles from '@styles/AboutUs.module.css';

export default function AboutUs() {

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>

        <h2 className={styles.welcome}>Welcome to Balloon Voyages! </h2>
        <h2 className={styles.text}>We specialize in thrilling missions using stratospheric balloons, 
            pushing the boundaries of exploration. Our team of experts and enthusiasts 
            is dedicated to reaching the limits of the atmosphere. Through our commitment 
            to research and cutting-edge technology, we offer unforgettable experiences 
            while supporting scientific projects worldwide. Join us in exploring the fascinating 
            world of stratospheric balloons and be a part of our journey to new heights in the sky.</h2>

        <h2 className={styles.text}>The project carried out as part of the 'Programowanie Defensywne' course in the years 2023/24. </h2>
        <div className={styles.madeBy}>
            <h2 className={styles.text}>Made by:</h2>
            <h2 className={styles.names}>Marcin Farowski and Patrycja Kalita.</h2>
        </div>
    </div>
  );
}