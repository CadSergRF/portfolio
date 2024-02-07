import { WorkCard } from './WorkCard/WorkCard';
import { experience } from '@/data/experience';

import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <article className={styles.title__zone}>
        <h2 className={styles.title__zone_title}>Опыт работы</h2>
        <p className={styles.title__zone_text}>
          Меня вдохновляет работа с людьми, которые так же, как и я, увлечены созданием чего-то
          нового и интересного.
        </p>
      </article>
      <div className={styles.experience}>
        {experience.map((item) => (
          <WorkCard
            key={item.text}
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

export { Experience };
