import styles from './page.module.css';
import { AboutMe } from '@/components/AboutMe/AboutMe';
import { Portfolio } from '@/components/Portfolio/Portfolio';
import { Stack } from '@/components/Stack/Stack';
import { Experience } from '@/components/Experience/Experience';
import { Education } from '@/components/Education/Education';

export default function Home() {
  return (
    <main className={styles.main}>
      <AboutMe />
      <Portfolio />
      <Stack />
      <Experience />
      <Education />
    </main>
  );
}
