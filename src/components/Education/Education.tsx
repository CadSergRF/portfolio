import { WorkCard } from '../Experience/WorkCard/WorkCard';
import { education } from '@/data/education';

import styles from './Education.module.css';

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
        {education.map((item) => (
          <WorkCard
            key={item.position}
            position={item.position}
            company={item.company}
            dates={item.dates}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
};

export { Education };
