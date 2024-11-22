import React, { Component } from "react";
import "./UserCV.css";

import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Contacts from "./Contacts";

export default class UserCV extends Component {
  render() {
    return (
      <>
        <div className="cv-wrapper">
          <PersonalInfo />
          <Contacts />
          <Experience />
        </div>
      </>
    );
  }
}
