import Image from "next/image";
import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Page = () => {
  const img = [
    { img: "P1.png", dis: "Architect Analyst" },
    { img: "P4.jpg", dis: "Shape Chamber" },
    { img: "P2.jpeg", dis: "TechnoBum" },
    { img: "P6.jpeg", dis: "MotionFull Protabtic" },
    { img: "P5.jpeg", dis: "3D WebPage" },
    { img: "P3.jpeg", dis: "Rapid Protptyping" },
  ];
  return (
    <div className=" gap-10 p-10 my-10" name="test2">
      <h1 className=" text-center text-4xl font-extrabold text-slate-200 flex justify-center gap-4">
        My Projects <AiOutlineFundProjectionScreen />
      </h1>
      <div className=" flex justify-center">
        <div className=" grid grid-cols-3 gap-10  py-20 ">
          {img.map((i, k) => {
            return (
              <div
                key={k}
                className=" flex   p-3 flex-col items-center rounded-sm w-max relative hover:bottom-3 hover:animate-bounce cursor-pointer"
              >
                <h1 className=" capitalize text-white">{i.dis}</h1>
<br />
                <Image
                  src={`/Projects/${i.img}`}
                  alt="Image"
                  height={300}
                  width={300}
                  className=" rounded-lg imgp"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
