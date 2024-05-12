import React from 'react'
import { Link } from "react-router-dom";
const links = [
    {
      name: "INICIO",
      href: "/",
    },
    {
      name: "PROYECTOS",
      href: "/projects",
    },
    {
      name: "EDUCACION",
      href: "/studies",
    },
  ];


function Header() {
  return (
    <header className="flex items-start justify-center h-auto bg-black ">
        <nav className="w-auto p-7">
        <ul className="list-none sm:flex sm:items-center sm:justify-center h-auto m-auto">
          {links.map((x, index) => (
            <li key={index} className="list-none text-center h-max p-3 mx-3">
              <a
                href={x.href}
                className="text-white bg-black p-3 rounded-xl sm:text-3xl text-2xl"
              >
                {x.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    
  )
}

export default Header
