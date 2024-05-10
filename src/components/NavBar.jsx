import React from "react";
import { TbWorld } from "react-icons/tb";
import { FaRegFilePdf } from "react-icons/fa";
import { data } from "../data/data";
import Header from "./Header";
import Footer from "./Footer";

const NavBar = () => {
  return (
    <div className="flex-wrap gap-5 h-screen">
      <Header />
      <main className="bg-black h-auto">
        <figure className=" w-auto flex justify-center my-10">
          <img
            src="/img/foto.png"
            className="rounded-full h-auto w-44 md:w-64"
          ></img>
        </figure>
        <div className="w-auto mx-5 my-16 grid grid-cols-1">
          <h1 className="text-white m-auto font-bold text-3xl md:text-5xl mb-2 ">
            {data.name}
          </h1>
          <h2 className="text-white m-auto text-2xl  md:text-3xl">
            {data.label}
          </h2>
          <h4 className="text-white m-auto flex items-center text-lg md:text-xl">
            <TbWorld className="mr-1" /> {data.location}
          </h4>
          <ul className="flex justify-center mt-3">
            <li>
              <a
                href="/CV/CV Martín Díaz Preiero SPANISH.pdf"
                download="CV Martín Díaz Preiero SPANISH.pdf"
                className="text-white text-center mt-2 flex items-center"
              >
                <FaRegFilePdf /> Descargar CV
              </a>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NavBar;
