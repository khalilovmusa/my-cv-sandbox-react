import React, { Component } from "react";
import "./PersonalInfo.css";

export default class PersonalInfo extends Component {
  render() {
    return (
      <>
        <div className="personalinfo-wrapper">
          <div className="name-div">
            Musa Khalilov <div>Front-end developer</div>
          </div>
          <span>Male, 19, 9 July 2005</span>
        </div>
      </>
    );
  }
}
