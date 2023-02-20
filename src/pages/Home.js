import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import ReactRoundedImage from "react-rounded-image";
import Myphoto from "../assets/me.png"
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
      <ReactRoundedImage
          image={Myphoto}
          roundedColor="#05386B"
          imageWidth="300"
          imageHeight="300"
          roundedSize="26"
          borderRadius="70"
        />
        <h2> Hello, My name is Andrew Ellender</h2>
        <div className="prompt">
          <p>I am seeking a position in Software Development that will help further my skills and work towards personal projects of my own.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, Flutter, TailwindCSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, .NET, MySQL, Amazon Web Services, Google Cloud
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              Java, Javascript, PHP, Python, C, C#
              </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;