import React from 'react';
import styles from './Card.module.css';
import Image from 'next/image';
import Link from 'next/link';

type TCard = {
  image: string;
  name: string;
  linkDemo: string;
  linkCode: string;
};

const Card = ({ image, name, linkDemo, linkCode }: TCard) => {
  return (
    <div className={styles.container}>
      <div className={styles.image__container}>
        <Image src={image} fill alt="Превью приложения" className={styles.image} />
      </div>
      <div className={styles.name__container}>
        <h3 className={styles.name}>{name}</h3>
      </div>
      <div className={styles.buttons}>
        <Link href={linkDemo} className={styles.link} rel="noopener noreferrer" target="_blank">
          Demo
        </Link>
        <Link href={linkCode} className={styles.link} rel="noopener noreferrer" target="_blank">
          Code
        </Link>
      </div>
    </div>
  );
};

export { Card };
