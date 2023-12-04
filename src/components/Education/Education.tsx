import React from 'react';
import styles from './Education.module.css';
import { WorkCard } from '../Experience/WorkCard/WorkCard';

const Education = () => {
  return (
    <section id="education" className={styles.container}>
      <article className={styles.title__zone}>
        <h2 className={styles.title__zone_title}>Образование</h2>
        <p className={styles.title__zone_text}>
          Всю свою жизнь я руководствовался тем, что образование важно. Я стараюсь узнавать что-то
          новое каждый день.
        </p>
      </article>
      <div className={styles.education}>
        <WorkCard
          position="Frontend разработчик"
          company="Яндекс.Практикум"
          dates="сентябрь 2022 - август 2023"
          text="Обучение по технологиям и направлениям: HTML, CSS, SCSS, JavaScript, адаптивная и кросс-браузерная верстка,
          БЭМ, создание приложений с использованием React, Redux Toolkit, TypeScript, NodeJS, ExpressJS, MongoDB"
        />
        <WorkCard
          position="Инженер электронной техники"
          company="ТУСУР"
          dates="1997 - 2002"
          text=""
        />
      </div>
    </section>
  );
};

export { Education };
