import React from "react";
const githubIcon = require("./components/images/github.svg");

const GithubLink = ({ link, text }) => {
  return (
    <a href={link} className="githubSection">
      <img className="icon__github" src={githubIcon} alt="github" />
      {text}
    </a>
  );
};

export default GithubLink;
