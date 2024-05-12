import React from "react";
import { data } from "../data/data";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-center bg-black py-5 mb-20 sm:mb-0 w-full">
      <div className="flex items-center justify-center">
        <a href={data.urlLinkedIn} className="text-white text-5xl mx-4">
          <FaLinkedin />
        </a>
        <a href={data.urlGitHub} className="text-white text-5xl mx-4">
          <FaGithub />
        </a>
        <a href={`mailto:${data.email}`} className="text-white text-5xl mx-4">
          <CiMail />
        </a>
        <a href={`tel:${data.phone}`} className="text-white text-5xl mx-4">
          <CiPhone />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
