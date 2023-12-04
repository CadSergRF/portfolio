import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo_zone}>
        <Image src="/images/Logo2.svg" width={60} height={80} alt="Логотип автора" />
        <h1 className={styles.title}>Сергей Евдокимов</h1>
      </div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link href="#AboutMe" className={styles.menu_item}>
              Привет
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className={styles.menu_item}>
              Портфолио
            </Link>
          </li>
          <li>
            <Link href="#stack" className={styles.menu_item}>
              Стек
            </Link>
          </li>
          <li>
            <Link href="#experience" className={styles.menu_item}>
              Опыт работы
            </Link>
          </li>
          <li>
            <Link href="#education" className={styles.menu_item}>
              Образование
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
