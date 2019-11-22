import React from "react";
import styles from "./App.module.css";
import { ReactComponent as LessonsIcon } from "./lessons.svg";
import { ReactComponent as TimeIcon } from "./time.svg";

const App: React.FC = () => {
  return (
    <div className={styles.cards}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.technology}>Laravel</div>
        <div className={styles.logo}>
          <img
            src="https://laracasts.com/images/series/2018/pngs/laravel-6-from-scratch.png"
            alt={"..."}
          />
        </div>
        <div className={styles.difficulty}>
          <div className={styles.difficultyGraph}>
            <div className={styles.difficultyGraphBar} />
            <div className={styles.difficultyGraphBar} />
            <div className={styles.difficultyGraphBar} />
          </div>
          <div className={styles.difficultyDetail}>
            <div>Intermediate</div>
            <div>Difficulty</div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>Laravel 6 From Scratch</div>
        <div className={styles.description}>
          In this series, step by step, I'll show you how to build web
          applications with Laravel 6. We'll start with the basics and
          incrementally dig deeper and...
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomElement}>
            <LessonsIcon />
            <div className={styles.bottomText}>36 Lessons</div>
          </div>
          <div className={styles.bottomElement}>
            <TimeIcon />
            <div className={styles.bottomText}>3:34:06 hrs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
