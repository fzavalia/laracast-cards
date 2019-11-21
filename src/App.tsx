import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="cards">
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
    <div className="card">
      <div className="left">
        <div className="technology">Laravel</div>
        <div className="logo">
          <img
            src="https://laracasts.com/images/series/2018/pngs/laravel-6-from-scratch.png"
            alt={"..."}
          />
        </div>
        <div className="difficulty">
          <div className="difficulty-graph">
            <div className="difficulty-graph-bar off" />
            <div className="difficulty-graph-bar" />
            <div className="difficulty-graph-bar" />
          </div>
          <div className="difficulty-detail">
            <div className="difficulty-detail-difficulty">Intermediate</div>
            <div className="difficulty-detail-text">Difficulty</div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="title">Laravel 6 From Scratch</div>
        <div className="description">
          In this series, step by step, I'll show you how to build web
          applications with Laravel 6. We'll start with the basics and
          incrementally dig deeper and...
        </div>
        <div className="bottom">
          <div className="lessons">
            <div className="lessons-icon" />
            <div className="lessons-text">36 Lessons</div>
          </div>
          <div className="duration">
            <div className="duration-icon" />
            <div className="duration-text">3:34:06 hrs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
