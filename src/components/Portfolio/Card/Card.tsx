import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type TCard = {
  image: string;
  name: string;
  linkDemo?: string;
  linkCode: string;
};

const Card = ({ image, name, linkDemo, linkCode }: TCard) => {
  return (
    <div className={styles.container}>
      <div className={styles.image__container}>
        <Image
          priority={true}
          src={image}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          alt="Превью приложения"
          className={styles.image}
        />
      </div>
      <div className={styles.name__container}>
        <h3 className={styles.name}>{name}</h3>
      </div>
      <div
        className={clsx(styles.buttons, {
          [styles.buttons_two]: linkDemo,
        })}
      >
        {linkDemo && (
          <Link
            href={linkDemo}
            className={styles.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            Demo
          </Link>
        )}
        <Link
          href={linkCode}
          className={styles.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          Code
        </Link>
      </div>
    </div>
  );
};

export { Card };
