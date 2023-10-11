import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  let name = "Marta Nowak";
  let age = 40;
  return (
    <div className="AboutMe">
      <h3>
        Hi, I'm {name}. I'm {age} years old and I like to code.
      </h3>
      <p>Here I try to show off my programming skills..</p>
    </div>
  );
}
