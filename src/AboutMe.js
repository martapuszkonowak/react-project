import React from "react";
import Projects from "./Projects";
import "./AboutMe.css";

export default function AboutMe(props) {
  return (
    <div className="AboutMe">
      <h3>
        Hi, I'm {props.name}. I'm {props.age} years old and I like to code.
      </h3>
      <p>See my latest projects:</p>
      <Projects />
    </div>
  );
}
