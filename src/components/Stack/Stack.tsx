import React from 'react';
import styles from './Stack.module.css';
import Image from 'next/image';
import { StackItems } from './StackItems/StackItems';
import { stackDesign, stackFrontend } from '@/data/stack';

const Stack = () => {
  return (
    <section id="stack" className={styles.container}>
      <article className={styles.title__zone}>
        <h2 className={styles.title__zone_title}>Используемый стек и технологии</h2>
        <p className={styles.title__zone_text}>
          Свободное время посвящаю саморазвитию - читаю документацию и различные авторские статьи по
          веб-разработке, изучаю новые технологии, решаю задачи на CodeWars.
        </p>
      </article>
      <div className={styles.stack__zone}>
        <StackItems name="Веб-разработка" stackItem={stackFrontend} />
        <StackItems name="UI/UX дизайн" stackItem={stackDesign} />
      </div>
    </section>
  );
};

export { Stack };
