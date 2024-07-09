"use client";

import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const navLinks = [
    {
      label: "Home",
      link: "#",
    },
    {
      label: "Contact",
      link: "#",
    },
    {
      label: "About",
      link: "#",
    },
  ];

  return (
    <main>
      <nav className="flex justify-between px-8 items-center py-6 bg-slate-950 bg-opacity-50 backdrop-blur">
        {/* name */}
        <section className="flex items-center gap-4">
          <Link href="/" className="text-4xl font-mono text-white">
            Edanz
          </Link>
        </section>
        {/* nav bar navlinks  */}
        <section className="hidden lg:flex flex-1 justify-center space-x-20 text-white">
          {navLinks.map((data, index) => (
            <Link key={index} className="font-bold" href={data.link}>
              {data.label}
            </Link>
          ))}
        </section>
        {/* nav bar manu icon in mobile view  */}
        <section className="flex items-center gap-4 lg:hidden ml-auto">
          <IoMenu
            className="text-3xl cursor-pointer text-white"
            onClick={() => setMenu(true)}
          />
        </section>

        {/* side bar menu items in mobile view */}
        {isSideMenuOpen && (
          <div className="fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 ">
            <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex bg-slate-950 bg-opacity-50 backdrop-blur-">
              <IoClose
                onClick={() => setMenu(false)}
                className="mt-0 mb-8 text-3xl cursor-pointer text-white"
              />
              {navLinks.map((data, index) => (
                <Link key={index} className="font-bold text-white" href={data.link}>
                  {data.label}
                </Link>
              ))}
            </section>
          </div>
        )}

        <section className="flex items-center gap-4"></section>
      </nav>
      <hr />
    </main>
  );
};

export default Header;
