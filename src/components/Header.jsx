import React from "react";

const links = [
  {
    name: "INICIO",
    href: "/",
  },
  {
    name: "SOBRE MI",
    href: "/aboutme",
  },
  {
    name: "PROYECTOS",
    href: "/projects",
  },
];

function Header() {
  return (
    <header className="flex bg-black items-center justify-center">
      <div className="items-center justify-center h-auto">
        <nav className="w-auto p-7">
          <ul className="list-none sm:flex sm:items-center sm:justify-center h-auto m-auto">
            {links.map((x, index) => (
              <li key={index} className="list-none text-center h-max p-3 mx-3">
                <a
                  href={x.href}
                  className="text-white p-3 rounded-xl sm:text-3xl text-2xl"
                >
                  {x.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <button className="h-8 w-8 mx-2"> 
            <img src="../../public/Flag_of_Spain.svg"></img>
        </button>
        <button className="h-8 w-8 mx-2"> 
            <img src="../../public/Flag_of_the_United_Kingdom_(3-5).svg"></img>
        </button>
      </div>
    </header>
  );
}

export default Header;
