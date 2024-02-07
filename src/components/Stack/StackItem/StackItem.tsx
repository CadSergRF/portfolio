import Image from 'next/image';

import { TStackItem } from '@/types/types';

import styles from './StackItem.module.css';

const StackItem = ({ imagePath, name }: TStackItem) => {
  return (
    <figure className={styles.stack__zone_icon}>
      <Image src={imagePath} width={40} height={40} alt={`${name} icon`} />
      <figcaption className={styles.stack__zone_icon_text}>{name}</figcaption>
    </figure>
  );
};

export { StackItem };
