import React, { Component } from "react";
import "./Experience.css";

export default class Experience extends Component {
  render() {
    return (
      <>
        <div className="experience-container">
          <div className="experience-text">EXPERİENCE</div>
          <div className="experience-info-container">
            <div className="experience-section-header">
              Helpdesk | 2023 sep - 2024 march
            </div>
            <div className="experience-section-main">
              <div className="experience-name">
                Information and Communication Technologies Department of ASOIU
              </div>
              <ul>
                <li>
                  Customer Service Skills – Provided prompt and courteous
                  assistance to users, ensuring a positive experience while
                  handling inquiries and complaints professionally.
                </li>
                <li>
                  Cmmunication – Explained complex technical issues in simple
                  terms to non-technical users, facilitating clear understanding
                  and quick solutions.
                </li>
                <li>
                  Technical Troubleshooting – Diagnosed and resolved technical
                  issues efficiently, improving user satisfaction and minimizing
                  downtime.
                </li>
                <li>
                  Time Management – Managed multiple support tickets and
                  prioritized tasks to meet user needs in a timely manner.
                </li>
                <li>
                  Documentation and Reporting – Recorded issues and resolutions
                  in helpdesk software, contributing to a comprehensive
                  knowledge base and improved service continuity.
                </li>
                <li>
                  Software and Systems Knowledge – Gained hands-on experience
                  with Windows, Linux, Ubuntu
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
