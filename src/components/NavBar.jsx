import React from "react";
import { TbWorld } from "react-icons/tb";
import { FaRegFilePdf } from "react-icons/fa";
import { data } from "../data/data";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CiMail, CiPhone } from "react-icons/ci";


const NavBar = () => {
  return (
    <div className="h-screen bg-black flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-start sm:justify-center m-12 sm:mt-0">
        <figure>
          <img
            src="me.webp"
            alt={data.name}
            className="rounded-full w-64 mb-7"
          />
        </figure>
        <h1 className="text-white text-center font-bold text-3xl sm:text-5xl mb-2">
          {data.name}
        </h1>
        <h2 className="text-white text-center text-2xl sm:text-3xl mb-4 opacity-55">
          {data.label}
        </h2>
        <div className="flex items-center mb-4">
          <TbWorld aria-label="Location" className="mr-1 text-white" />
          <span className="text-white text-lg sm:text-xl opacity-55">
            {data.location}
          </span>
        </div>
        <a
          href="cvmartin.pdf"
          download="MartinDiazCV"
          className="text-white flex items-center mb-4 opacity-55"
        >
          <FaRegFilePdf aria-label="Download CV" className="mr-1" />
          Descargar CV
        </a>
      </main>
      <footer className="text-center bg-black py-2 w-full">
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
    </div>
  );
};

export default NavBar;
