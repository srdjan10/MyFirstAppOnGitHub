import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer">
        <a
          href=""
          target="_blank"
        >
          View Source on Github
        </a>
        <span> / </span>
        <a href="mailto:srdjanilic10@gmail.com" target="_blank">
          Need any help?
        </a>
        <span> / </span>
        <a href="" target="_blank">
          Say Hi on Twitter
        </a>
        <span> / </span>
        <a href="" target="_blank">
          Read My Blog
        </a>
      </p>
      <p>
        &copy; {currentYear} <strong>Online market</strong> - Ryzen web development Cacak
      </p>
    </footer>
  );
};

export default Footer;