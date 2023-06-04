import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GithubIcon onClick={() => window.open('https://github.com/Drewe4401')} />
        <YoutubeIcon onClick={() => window.open('https://www.youtube.com/channel/UCsvDJvZnu0Y-fdPtBp5s28A')} />
        <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/andrew-e-b87048222')}/>
      </div>
      <p> &copy; 2023 https://portfoliodrewe4401.web.app/</p>
    </div>
  );
}

export default Footer;