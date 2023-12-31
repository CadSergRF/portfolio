import React from 'react';
import styles from './AboutMe.module.css';
import Image from 'next/image';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <section id="AboutMe" className={styles.container}>
      <article className={styles.info__block}>
        <h2 className={styles.title}>Привет. Меня зовут Сергей.</h2>
        <p className={styles.text}>
          Я web-разработчик из Кемерово - Кузбасс. В настоящее время я работаю над двумя проектами.
          Первый - это сайт интернет-магазина тканей. Второй - стартап, проект приложения для
          разрешения споров.
        </p>
        <p className={styles.text}>
          Постоянно стремлюсь расширять и углублять свои знания. Я открыт к предложениям как частных
          проектов, так и системных работодателей на должность Frontend developer / Web developer.
        </p>
        <div className={styles.contacts}>
          <p className={styles.contacts__title}>Телефон</p>
          <p className={styles.contacts__text}>+7-913-120-4020</p>
          <p className={styles.contacts__title}>EMAIL</p>
          <p className={styles.contacts__text}>cadsergrf@yandex.ru</p>
          <p className={styles.contacts__title}>Telegram</p>
          <Link
            href="https://t.me/cadserg"
            className={styles.contacts__text}
            rel="noopener noreferrer"
            target="_blank">
            @CadSerg
          </Link>
          <p className={styles.contacts__title}>GitHub</p>
          <Link
            href="https://github.com/CadSergRF"
            className={styles.contacts__text}
            rel="noopener noreferrer"
            target="_blank">
            Профиль github
          </Link>
        </div>
      </article>
      <div className={styles.image_container}>
        <Image
          priority={true}
          src="/images/avatar.jpeg"
          className={styles.image}
          width={300}
          height={300}
          alt="Логотип автора"
        />
      </div>
    </section>
  );
};

export { AboutMe };
