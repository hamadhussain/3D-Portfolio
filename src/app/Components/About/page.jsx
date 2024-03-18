import React from "react";
import Button from "./Button/Page";
import Image from "next/image";
const Page = () => {
  return (
    <div name="test1" className="  mx-auto flex p-24 gap-10 bg-gradient-to-r from-indigo-800 via-purple-500 to-pink-500 about h-screen">
      <div className="opacdiv p-2 px-4 gap-3 flex flex-col justify-evenly">
        {" "}
        <h1 className=" text-4xl text-white">About My Web</h1>
        <p className=" text-sm text-slate-400">
          Unlock the best in web services with us! as market leaders, our agency
          excels in delivering tailored solutions that boost your online
          presence. With a proven track record. we're your go to choice for
          quality and expertise. elevate your digital jurney with us - your
          trusted partner for top-tier web solutions
        </p>
        <Button />
      </div>
      <Image src="/About/ab2.png" className="opacdiv" height={1600} width={600} alt="image" />
    </div>
  );
};

export default Page;
