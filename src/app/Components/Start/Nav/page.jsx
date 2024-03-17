"use client";
import Image from "next/image";
import React from "react";
import { LiaAtomSolid } from "react-icons/lia";
import { Link } from "react-scroll";

const page = () => {
  const navlist = [
    { name: "About", link: "test1" },
    { name: "Projects", link: "test2" },
    { name: "Contact", link: "test3" },
  ];
  return (
    <>
      <div className=" flex justify-between items-center  px-20">
        <div className=" flex items-center gap-3">
          <LiaAtomSolid className=" text-xl" />
          <h1 className=" uppercase text-2xl">Mailware</h1>
        </div>
        <nav className=" flex gap-14 ">
          {navlist.map((i, k) => {
            return (
              <div key={k} className=" flex items-center">
                <ul>
                  <Link
                    activeClass="active"
                    to={i.link}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={800}
                  >
                    <li className="hover:text-purple-500 cursor-pointer">
                      {i.name}
                    </li>
                  </Link>
                </ul>
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default page;
