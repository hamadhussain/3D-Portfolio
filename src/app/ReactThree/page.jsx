"use client";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import Image from "next/image";
import { useRef } from "react";
// import { TextureLoader } from "three";
// import { MeshStandardMaterial } from "three";
// import { BoxGeometry } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import About from '../Components/About/Page'
import Nav from "../Components/Start/Page";
import Contact from '../Components/Contact/Page'
import Projects from '../Components/Projects/Page'
import Footer from '../Components/Footer/Page'


export default function Home() {
  return (
    <>
      <div className="heightadjust relative flex flex-col justify-between">
        <Canvas>
          <ambientLight intensity={2.2} />
          <directionalLight position={[11.2, 11.3, 12.4]} />
          <OrbitControls />
          <Cube />
          {/* Insert paragraph outside the canvas */}
        </Canvas>
        {/* Insert paragraph outside the canvas */}
        <Paragraph />
      </div>
    </>
  );
}

function Paragraph() {
  return (
    <div className=" flex flex-col justify-between"
      style={{
        position: "absolute",
        top: "20px",
          left: "-10px",
        //   color: "white",
        //   fontSize: "18px",
        //   zIndex: 10, // Ensure the paragraph is positioned on top of the canvas
      }}
    >
      <div className=" ">
        <Nav />
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export function Cube() {
  const mesh = useRef(null);
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.01;
    mesh.current.rotation.y += delta * 0.07;
    mesh.current.rotation.z += delta * 0.03;
  });

  return (
    <>
      <Stars
        radius={300}
        depth={60}
        count={200000}
        factor={7}
        saturation={0}
        fade={true}
        ref={mesh}
      />

      {/* <mesh ref={mesh}>
        <sphereGeometry args={[2, 100, 100]} />

        <meshStandardMaterial color={'red'} />
      </mesh> */}
    </>
  );
}
