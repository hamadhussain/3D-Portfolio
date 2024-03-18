"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { LiaAtomSolid } from "react-icons/lia";
import { Link } from "react-scroll";

const Page = () => {
  const navlist = [
    { name: "About", link: "test1" },
    { name: "Projects", link: "test2" },
    { name: "Contact", link: "test3" },
  ];
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }
  return (
    <>
      <div className=" flex justify-between items-center  px-20">
        <motion.div      initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}  className=" flex items-center gap-3">
          <LiaAtomSolid className=" text-xl" />
          <h1 className=" uppercase text-2xl">Mailware</h1>
        </motion.div>
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

export default Page;
