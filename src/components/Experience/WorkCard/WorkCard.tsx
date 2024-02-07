import React from 'react';
import styles from './WorkCard.module.css';
import { TWorkCard } from '@/types/types';

const WorkCard = ({ position, company, dates, text }: TWorkCard) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3 className={styles.title__position}>{position}</h3>
        <h4 className={styles.title__company}>{company}</h4>
      </div>
      <h5 className={styles.dates}>{dates}</h5>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export { WorkCard };
