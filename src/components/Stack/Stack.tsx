import React from 'react';
import styles from './Stack.module.css';
import Image from 'next/image';

const Stack = () => {
  return (
    <section id="stack" className={styles.container}>
      <article className={styles.title__zone}>
        <h2 className={styles.title__zone_title}>Используемый стек и технологии</h2>
        <p className={styles.title__zone_text}>
          Свободное время посвящаю саморазвитию - читаю документацию и различные авторские статьи по
          веб-разработке, изучаю новые технологии, решаю задачи на CodeWars.
        </p>
      </article>
      <div className={styles.stack__zone}>
        <div className={styles.stack__zone_item}>
          <h3 className={styles.stack__zone_title}>Веб-разработка</h3>
          <div className={styles.stack__zone_icons}>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/html.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>HTML</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/css.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>CSS</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/sass.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>Sass / SCSS</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/javascript.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>Java Script</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/typescript.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>Type Script</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/react.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>React</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/reacthookform.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>React Hook Form</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/nextjs.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>NextJS</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/zustand.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>Zustand</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/redux.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>Redux Toolkit</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/nodejs.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>NodeJS</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/express.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>Express</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/mongoDB.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>MongoDB</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/docker.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>Docker</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/eslint.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>ESLint</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/git.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>GIT</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/vscode.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>VSCode</figcaption>
            </figure>
          </div>
        </div>
        <div className={styles.stack__zone_item}>
          <h3 className={styles.stack__zone_title}>UI/UX дизайн</h3>
          <div className={styles.stack__zone_icons}>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/canva.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>Canva</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/figma.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>Figma</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/illustrator.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>Illustrator</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/materialUI.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>Material UI</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/photoshop.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>Photoshop</figcaption>
            </figure>
            <figure className={styles.stack__zone_icon}>
              <Image src="/images/icons/storybook.svg" width={40} height={40} alt="HTML5" />
              <figcaption className={styles.stack__zone_icon_text}>Storybook</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stack };
