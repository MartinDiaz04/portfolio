import React from "react";
import { TbWorld } from "react-icons/tb";
import { FaRegFilePdf } from "react-icons/fa";
import { data } from "../data/data";

const NavBar = () => {
  return (
    <div className="bg-black h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center">
        <figure>
          <img
            src="me.webp"
            alt={data.name}
            className="rounded-full w-44 md:w-64 mb-4"
          />
        </figure>
        <h1 className="text-white font-bold text-3xl md:text-5xl mb-2">
          {data.name}
        </h1>
        <h2 className="text-white text-2xl md:text-3xl mb-4">{data.label}</h2>
        <div className="flex items-center mb-4">
          <TbWorld aria-label="Location" className="mr-1 text-white" />
          <span className="text-white text-lg md:text-xl">{data.location}</span>
        </div>
        <a
          href="cvmartin.pdf"
          download="MartinDiazCV"
          className="text-white flex items-center mb-4"
        >
          <FaRegFilePdf aria-label="Download CV" className="mr-1" />
          Descargar CV
        </a>
      </main>      
    </div>
  );
};

export default NavBar;
