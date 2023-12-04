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
        <Card
          image="/images/preview/concordia_1.jpg"
          name="Приложение для разрешения споров"
          linkDemo=""
          linkCode="https://github.com/CadSergRF/my-dispute-resolution"
        />
        <Card
          image="/images/preview/navigator_1.jpg"
          name="Сервис поиска маршрута"
          linkDemo="https://cadsergrf.github.io/Leaflet-OSRM/"
          linkCode="https://github.com/CadSergRF/Leaflet-OSRM"
        />
        <Card
          image="/images/preview/films_1.jpg"
          name="Сервис поиска фильмов"
          linkDemo="https://github.com/CadSergRF/movies-explorer-frontend"
          linkCode="https://github.com/CadSergRF/movies-explorer-api"
        />
        <Card
          image="/images/preview/foto-service.jpg"
          name="Сервис размещения фотографий"
          linkDemo="https://cadsergrf.github.io/mesto/"
          linkCode="https://github.com/CadSergRF/react-mesto-api-full-gha"
        />
        <Card
          image="/images/preview/travel.jpg"
          name="Сайт о путешествии по России"
          linkDemo="https://cadsergrf.github.io/cs_russian-travel/"
          linkCode="https://github.com/CadSergRF/cs_russian-travel"
        />
      </div>
    </section>
  );
};

export { Portfolio };
