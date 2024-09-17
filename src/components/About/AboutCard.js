import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hai semuanya, Saya <span className="purple">Nirvana Ivanta </span>
            dari <span className="purple"> Blitar, Indonesia</span>
            <br />
            Saat ini saya seorang Mahasiswa dan Frontend Web Developer
            <br />
            <br />
            Di sela-sela coding, saya gemar melakukan beberapa hal seperti :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Analisa Data
            </li>
            <li className="about-activity">
              <ImPointRight /> Menulis Artikel
            </li>
            <li className="about-activity">
              <ImPointRight /> Mendesain UI/UX
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
