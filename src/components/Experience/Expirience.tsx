import React from 'react';
import styles from './Experience.module.css';

const Expirience = () => {
  return (
    <section id="#experience" className={styles.container}>
      <article className={styles.title__zone}>
        <h2 className={styles.title__zone_title}>Опыт работы</h2>
        <p className={styles.title__zone_text}>
          Меня вдохновляет работа с людьми, которые так же, как и я, увлечены созданием чего-то
          потрясающего.
        </p>
      </article>
      <div>Место работы</div>
    </section>
  );
};

export { Expirience };
