import React from 'react';
import styles from './Experience.module.css';
import { WorkCard } from './WorkCard/WorkCard';

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
        <WorkCard
          position="Frontend разработчик"
          company=""
          dates="09.2023 - настоящее время"
          text="Приложение для разрешения споров и конфликтов на предприятии. Разработка в рамках мастреской Практикума. 
          Работа в команде 28 человек: frontend, backend, тестировщики, дизайнеры. Мой вклад в приложение - написание api, создание 
          общего стора на react.context, написание компонента создания/редактирования карточки сообщения."
        />
        <WorkCard
          position="Fullstack разработчик"
          company="ИП Никитина Е.Ю."
          dates="09.2023 - настоящее время"
          text="Сайт интернет-магазина Твои ткани. Основные задачи, кроме создания пользователькой части приложения, является
          написание admin части сайта с возможностями работы с каталогом, crm-система, подключение программы лояльности,
          финансовая аналитика."
        />
        <WorkCard
          position="Коммерческий опыт"
          company=""
          dates=""
          text="Более 5 лет работал менеджером проектов в ИТ-компании. 6 лет опыта в качестве менеджера по продажам и
           руководителя коммерческого отдела в телекоммуникационной отрасли. Благодаря этому опыту имею навыки высокой самоорганизации,
            умею договариваться и находить общий язык с людьми, работать в условиях многозадачности и сжатых сроков."
        />
      </div>
    </section>
  );
};

export { Experience };
