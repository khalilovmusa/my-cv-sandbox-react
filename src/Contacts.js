import React, { Component } from "react";
import "./Contacts.css";

export default class Contacts extends Component {
  render() {
    return (
      <>
        <div className="contacts-container">
          <div className="contact-text">CONTACTS</div>
          <div className="contacts-info-container">
            <div>
              <span>Email:</span>
              Musaxlilov29@gmail.com
            </div>
            <div>
              <span>Github:</span>
              <a href="https://github.com/khalilovmusa">
                https://github.com/khalilovmusa
              </a>
            </div>
            <div>
              <span>Linkedin:</span>
              <a href="www.linkedin.com/in/musa-khalilov-429057296">
                www.linkedin.com/in/musa-khalilov-429057296
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
