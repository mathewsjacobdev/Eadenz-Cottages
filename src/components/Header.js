"use client";

import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link as ScrollLink } from 'react-scroll';
import Image from "next/image";
import logo from '../../public/images/logo.webp';

const Header = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const navLinks = [
    {
      label: "Home",
      link: "home",
    },
    {
      label: "Gallery",
      link: "gallery",
    },
    {
      label: "Near Me",
      link: "nearMe",
    },
    {
      label: "Contact",
      link: "Contact",
    },
    {
      label: "About",
      link: "about",
    },
  ];
 
  return (
    <main>
<nav className="fixed top-0 left-0 w-full bg-black bg-opacity-75 backdrop-blur-md z-50 flex justify-between px-8 items-center py-6">
{/* name */}
        <section className="flex items-center gap-4">
        <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">
            <Image src={logo} alt="Eadanz Cottage logo" width={50} height={50}/>
          </ScrollLink>
          <ScrollLink to="home" smooth={true} duration={500} className="text-4xl font-mono text-white cursor-pointer">
            Eadanz
          </ScrollLink>
        </section>
        {/* nav bar navlinks  */}
        <section className="hidden lg:flex flex-1 justify-center space-x-20 text-white">
          {navLinks.map((data, index) => (
            <ScrollLink key={index} to={data.link} smooth={true} duration={500} className="font-bold cursor-pointer">
              {data.label}
            </ScrollLink>
          ))}
        </section>
        {/* nav bar menu icon in mobile view  */}
        <section className="flex items-center gap-4 lg:hidden ml-auto">
          <IoMenu className="text-3xl cursor-pointer text-white" onClick={() => setMenu(true)} />
        </section>

        {/* side bar menu items in mobile view */}
        {isSideMenuOpen && (
          <div className="fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0">
            <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex bg-slate-950 bg-gray-900 backdrop-sm ">
              <IoClose onClick={() => setMenu(false)} className="mt-0 mb-8 text-3xl cursor-pointer text-white bg-black" />
              {navLinks.map((data, index) => (
                <ScrollLink key={index} to={data.link} smooth={true} duration={500} className="font-bold cursor-pointer text-black" onClick={() => setMenu(false)}>
                  {data.label}
                </ScrollLink>
              ))}
            </section>
          </div>
        )}
      </nav>
      <hr />
    </main>
  );
};

export default Header;
