import React from "react";
import styles from "./App.module.css";
import { ReactComponent as LessonsIcon } from "./img/lessons.svg";
import { ReactComponent as TimeIcon } from "./img/time.svg";

const App: React.FC = () => {
  return (
    <div className={styles.cards}>
      <Card
        technology="Laravel"
        title="Laravel 6 From Scratch"
        description="In this series, step by step, I'll show you how to build web applications with Laravel 6. We'll start with the basics and incrementally dig deeper and..."
        lessons={36}
        time="3:34:06 hrs"
        image="https://laracasts.com/images/series/2018/pngs/laravel-6-from-scratch.png"
        difficulty="intermediate"
        color="red"
      />
      <Card
        technology="Vue"
        title="Learn Vue 2: Step By Step"
        description="Vue is easily one of the most exciting additions to the front-end world in many years. With its intuitive API, and the fact that it can be applied to..."
        lessons={49}
        time="7:43:06 hrs"
        image="https://laracasts.com/images/series/2018/pngs/learning-vue-step-by-step.png"
        difficulty="hard"
        color="yellow"
      />
      <Card
        technology="PHP"
        title="The PHP Practitioner"
        description="We all start somewhere. When it comes to web development with PHP, well, your first stop is this series. Designed specifically and exclusively for beg..."
        lessons={25}
        time="4:46:29 hrs"
        image="https://laracasts.com/images/series/2018/pngs/the-php-practitioner.png"
        difficulty="easy"
        color="blue"
      />
    </div>
  );
};

interface CardProps {
  technology: string;
  title: string;
  description: string;
  lessons: number;
  time: string;
  image: string;
  difficulty: "easy" | "intermediate" | "hard";
  color: "red" | "yellow" | "blue" | "purple";
}

const Card = (props: CardProps) => {
  let difficultyText: string;
  let difficultyNum: number;

  switch (props.difficulty) {
    case "easy":
      difficultyText = "Beginner";
      difficultyNum = 1;
      break;
    case "intermediate":
      difficultyText = "Intermediate";
      difficultyNum = 2;
      break;
    case "hard":
      difficultyText = "Advanced";
      difficultyNum = 3;
  }

  const difficultyBarClassName = (difficulty: number) => {
    let className = styles.difficultyGraphBar;
    if (difficulty > difficultyNum) className += " " + styles.off;
    return className;
  };

  return (
    <div className={styles.card}>
      <div className={`${styles.left} ${styles[props.color]}`}>
        <div className={styles.technology}>{props.technology}</div>
        <div className={styles.logo}>
          <img src={props.image} alt={"..."} />
        </div>
        <div className={styles.difficulty}>
          <div className={styles.difficultyGraph}>
            {[3, 2, 1].map(difficulty => (
              <div
                key={difficulty}
                className={difficultyBarClassName(difficulty)}
              />
            ))}
          </div>
          <div className={styles.difficultyDetail}>
            <div>{difficultyText}</div>
            <div>Difficulty</div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.bottom}>
          <div className={styles.bottomElement}>
            <LessonsIcon />
            <div className={styles.bottomText}>{props.lessons} Lessons</div>
          </div>
          <div className={styles.bottomElement}>
            <TimeIcon />
            <div className={styles.bottomText}>{props.time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
