import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="Projects">
      <h4>Here they are!</h4>
      <div className="Container">
        <div className="row">
          <div className="col-6">
            <img
              src="/images/dictionary.png"
              alt="Dictionary project preview"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-6">
            <img
              src="/images/weather.png"
              alt="Weather project preview"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
