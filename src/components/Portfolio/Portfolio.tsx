import { Card } from './Card/Card';
import { portfolio } from '@/data/portfolio';

import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.container}>
      <article className={styles.title__zone}>
        <h2 className={styles.title__zone_title}>Портфолио</h2>
      </article>
      <div className={styles.projects}>
        {portfolio.map((item) => (
          <Card
            key={item.image}
            image={item.image}
            name={item.name}
            linkDemo={item.linkDemo}
            linkCode={item.linkCode}
          />
        ))}
      </div>
    </section>
  );
};

export { Portfolio };
