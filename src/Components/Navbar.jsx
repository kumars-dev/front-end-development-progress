import React from "react";
import logo from "../assets/mk.webp";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center py-6 justify-between">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={100} height={100} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="www.linkedin.com/in/montu-kumar-1991b0202"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin"
        >
          <FaLinkedin/>
        </a>
        <a
          href="https://github.com/kumars-dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github"
        >
          <FaGithub/>
        </a>
        {/* <a
          href="https://www.instagram.com/in/example-user-name/projects/my-project-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram"
        >
          <FaInstagram/>
        </a> */}
       
      </div>
    </nav>
  );
};

export default Navbar;
