import Image from 'next/image';
import styles from './page.module.css';
import { Header } from '@/components/Header/Header';
import { AboutMe } from '@/components/AboutMe/AboutMe';
import { Portfolio } from '@/components/Portfolio/Portfolio';
import { Stack } from '@/components/Stack/Stack';
import { Experience } from '@/components/Experience/Experience';
import { Footer } from '@/components/Footer/Footer';
import { Education } from '@/components/Education/Education';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <AboutMe />
      <Portfolio />
      <Stack />
      <Experience />
      <Education />
      <Footer />
    </main>
  );
}
