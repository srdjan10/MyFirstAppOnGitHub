import React from "react";
import '../component/Footer.css';

const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footerone">
      <p className="footerone">
        <a className="footerone"
          href="https://github.com/srdjan10/MyFirstAppOnGitHub"
          target="_blank"
        >
          View Source on Github
        </a>
        <span> / </span>
        <a className="footerone" href="mailto:srdjanilic10@gmail.com" target="_blank">
          Need any help?
        </a>
        <span> / </span>
        <a className="footerone" href="" target="_blank">
          Say Hi on Twitter
        </a>
        <span> / </span>
        <a className="footerone" href="" target="_blank">
          Read My Blog
        </a>
        <p>
        &copy; {currentYear} <strong>Online market</strong> - Vatela web development Cacak
      </p>
      </p>
    </footer>
  );
};

export default Footer;