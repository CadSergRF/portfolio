import React from 'react';
import styles from './Card.module.css';
import Image from 'next/image';

type TCard = {
  image: string;
};

const Card = ({ image }: TCard) => {
  return (
    <div className={styles.container}>
      <div className={styles.image__container}>
        <Image src={image} fill alt="Превью приложения" className={styles.image} />
      </div>
      <div className={styles.buttons}>
        <button className={styles.btn}>Demo</button>
        <button className={styles.btn}>Code</button>
      </div>
    </div>
  );
};

export { Card };
