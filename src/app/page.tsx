import Image from 'next/image';
import styles from './page.module.css';
import { Header } from '@/components/Header/Header';
import { AboutMe } from '@/components/AboutMe/AboutMe';
import { Portfolio } from '@/components/Portfolio/Portfolio';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <AboutMe />
      <Portfolio />
    </main>
  );
}
