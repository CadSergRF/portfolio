import { StackItem } from '../StackItem/StackItem';
import { TStackItem } from '@/types/types';

import styles from './StackItems.module.css';

type Props = {
  name: string;
  stackItem: TStackItem[];
};

const StackItems = ({ name, stackItem }: Props) => {
  return (
    <>
      <div>
        <h3 className={styles.stack__zone_title}>Веб-разработка</h3>
        <div className={styles.stack__zone_icons}>
          {stackItem.map((item) => (
            <StackItem key={item.name} imagePath={item.imagePath} name={item.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export { StackItems };
