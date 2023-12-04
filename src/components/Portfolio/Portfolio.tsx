import React from 'react';
import styles from './Portfolio.module.css';
import { Card } from './Card/Card';

const Portfolio = () => {
  return (
    <section className={styles.container}>
      <article className={styles.title__zone}>
        <h2 className={styles.title__zone_title}>Портфолио</h2>
      </article>
      <div className={styles.projects}>
        <Card image="/images/preview/1.jpeg" />
        <Card image="/images/preview/2.jpg" />
        <Card image="/images/preview/3.webp" />
        <Card image="/images/preview/3.webp" />
        <Card image="/images/preview/2.jpg" />
        <Card image="/images/preview/1.jpeg" />
        <Card image="/images/preview/1.jpeg" />
        <Card image="/images/preview/3.webp" />
      </div>
    </section>
  );
};

export { Portfolio };
