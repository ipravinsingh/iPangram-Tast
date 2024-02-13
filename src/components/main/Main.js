import React from "react";
import "./Main.css";
import Checkbox from "../checkbox/Checkbox";

function Main() {
  return (
    <div className="main">
      <div className="container">
        <div className="left">
          <div className="dayDate">
            <h4>Mon</h4>
            <p>8:02</p>
          </div>
          <div className="dayDate">
            <h4>Tue</h4>
            <p>8:03</p>
          </div>
          <div className="dayDate">
            <h4>Wed</h4>
            <p>8:05</p>
          </div>
          <div className="dayDate">
            <h4>Thu</h4>
            <p>8:05</p>
          </div>
          <div className="dayDate">
            <h4>Fri</h4>
            <p>8:06</p>
          </div>
        </div>
        <div className="right">
          <p className="paragraph">Past</p>
          <p className="paragraph">Past</p>
          <Checkbox />
          <hr />
          <Checkbox />
          <hr />
          <Checkbox />
        </div>
      </div>
    </div>
  );
}

export default Main;
