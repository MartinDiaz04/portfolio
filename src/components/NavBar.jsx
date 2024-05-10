import React from "react";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {data} from '../data/data'
const links = [
  {
    name: "PROYECTOS",
    href: "/projects",
  },
  {
    name: "EDUCACION",
    href: "/studies",
  },
  {
    name: "CONTACTO",
    href: "/contact",
  },
];

const NavBar = () => {
  return (
    <header className="grid grid-cols-1 items-center justify-center">
      <figure className="h-64 w-auto mx-5 my-5 flex justify-center items-center">
        <img src="/img/foto.png" className="rounded-full h-auto w-64"></img>
      </figure>
      <div className="w-auto mx-5 my-5 grid grid-cols-1 justify-center items-center">
        <h1 className="text-white m-auto font-bold text-5xl mb-2">
          {data.name}
        </h1>
        <h2 className="text-white m-auto text-3xl">
          {data.label}
        </h2>
        <h4 className="text-white m-auto flex items-center text-xl">
          <TbWorld className="mr-1" /> {data.location}
        </h4>
        <div className="flex items-center justify-center mt-2">
          <a href={data.urlLinkedIn} className="text-white text-2xl mx-1"><FaLinkedin/></a>
          <a href={data.urlGitHub} className="text-white text-2xl mx-1"><FaGithub/></a>
          <a href={`mailto:${data.email}`} className="text-white text-2xl mx-1"><CiMail/></a>
          <a href={`tel:${data.phone}`} className="text-white text-2xl mx-1"><CiPhone/></a>
        </div>
      </div>
      <nav className="w-auto mx-5 ">
        <ul className="list-none sm:flex sm:items-center sm:justify-center h-auto max-w-xl m-auto">
          {links.map((x, index) => (
            <li key={index} className="list-none text-center h-max p-3 mx-3">
              <a
                href={x.href}
                className="text-white bg-black p-3 hover:bg-gray-900 rounded-xl"
              >
                {x.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
