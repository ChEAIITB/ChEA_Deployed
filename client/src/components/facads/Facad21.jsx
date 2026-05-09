// import React from "react";
// import Card from "../Card";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import NavButton from "../NavButton";
import "aos/dist/aos.css";
import AOS from "aos";
import Arindham from '../../assets/images/facad21/Arindham.jpg';
import Mukta from '../../assets/images/facad21/Mukta.jpg';
import rochish from '../../assets/images/facad21/rochish.jpg';
import Sameer from '../../assets/images/facad21/Sameer.jpg';
import FacdCord from "../FacdCord";

const orbitCircles = [1000, 800, 600];
const plusSigns = [8, 70, 85, 100, 150];

const orbitBalls = [
  { top: "15%", left: "10%", size: "w-5 h-5", color: "bg-orange-400" },
  { top: "35%", left: "80%", size: "w-3 h-3", color: "bg-green-400" },
  { top: "65%", left: "15%", size: "w-2.5 h-2.5", color: "bg-purple-400" },
  { top: "75%", left: "90%", size: "w-3 h-3", color: "bg-teal-400" },
];

const bigBalls = [
  { top: "10%", left: "30%", size: "w-5 h-5", color: "bg-yellow-400" },
  { top: "50%", left: "75%", size: "w-6 h-6", color: "bg-pink-500" },
  { top: "85%", left: "20%", size: "w-4 h-4", color: "bg-blue-400" },
];

const data = [
  {
    "name": "Prof. Sameer Jadhav",
    "image": Sameer,
    "email": "srjadhav@che.iitb.ac.in",
    "phone": "91 (22) 2576 7219",
    "url": "https://www.che.iitb.ac.in/index.php/faculty/sameer-jadhav",
    "roll": "210020001-40"
  },
  {
    "name": "Prof. Rochish Thaokar",
    "image": rochish,
    "email": "rochish@che.iitb.ac.in",
    "phone": "91 (22) 2576 7241",
    "url": "https://www.che.iitb.ac.in/index.php/faculty/rochish-madhukar-thaokar",
    "roll": "210020041-80"
  },
  {
    "name": "Prof. Arindam Sarkar",
    "image": Arindham,
    "email": "asarkar@che.iitb.ac.in",
    "phone": "91 (22) 2576 7233",
    "url": "https://www.che.iitb.ac.in/index.php/faculty/arindam-sarkar",
    "roll": "210020081-120"
  },
  {
    "name": "Prof. Mukta Tripathy",
    "image": Mukta,
    "email": "tripathy@che.iitb.ac.in",
    "phone": "91 (22) 2576 7204",
    "url": "https://www.che.iitb.ac.in/index.php/faculty/mukta-tripathy",
    "roll": "210020120-last"
  }
]






export default function Facad21() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh()
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const getTransform = (mult = 0.01) => ({
    x: useTransform(mouseX, (x) => (x - window.innerWidth * 2) * mult),
    y: useTransform(mouseY, (y) => (y - window.innerHeight * 2) * mult),
  });

  const renderOrbitCircles = () =>
    orbitCircles.map((size, i) => (
      <div
        key={i}
        className="absolute rounded-full border-4 border-purple-500/40 opacity-20"
        style={{ width: size, height: size }}
      />
    ));

  const renderPlusLines = (side) => (
    <div
      className={`absolute ${side}-6 top-0 bottom-0 flex flex-col justify-around z-0`}
    >
      {plusSigns.map((top, i) => (
        <div
          key={i}
          className="text-purple-300 opacity-50 text-3xl font-bold"
          style={{ marginTop: `${i === 0 ? top : top - plusSigns[i - 1]}vh` }}
        >
          +
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div onMouseMove={handleMouseMove} className="overflow-hidden">
        <div className="relative bg-gradient-to-b from-black to-purple-950 text-white">
          {/* Hero Section */}
          <section className="min-h-screen lg:flex-row items-center justify-between px-6 lg:px-16 py-20 relative z-10">
            {/* Orbit Circles */}
            <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
              {/* {renderOrbitCircles()} */}
            </div>

            {/* Vertical Lines with Plus */}
            {/* {renderPlusLines("left")}
            {renderPlusLines("right")} */}

            {/* Orbit Balls */}
            {/* {orbitBalls.map((ball, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full ${ball.size} ${ball.color}`}
                style={{
                  top: ball.top,
                  left: ball.left,
                  ...getTransform(0.02),
                }}
              />
            ))} */}
            <h1 className="text-center font-black text-4xl mt-4 mb-4">KNOW YOUR <span className="text-purple-600">FACAD</span></h1>
            {/* NavButton content */}

            <div className="w-full px-[10%] py-4">
              <div className="flex flex-wrap justify-center gap-4">
                <NavButton to="/facad/24">2024 B.Tech</NavButton>
                <NavButton to="/facad/23">2023 B.Tech</NavButton>
                <NavButton to="/facad/22">2022 B.Tech</NavButton>
                <NavButton to="/facad/21">2021 B.Tech</NavButton>
                <NavButton to="/facad/mtech">M.Tech</NavButton>
                <NavButton to="/facad/phd">PHD</NavButton>
                
              </div>
            </div>

            {/* Hero Content */}

            <div className="flex flex-wrap gap-6 justify-center p-6" data-aos='fade-in'>
              {data.map((item, index) => (
                <FacdCord key={index} {...item} />
              ))}
            </div>
            {/* Image */}
          </section>

          {/* Horizontal Divider */}

          {/* Video & Description Section */}
          <section className="relative py-20 px-6 lg:px-20">
            {/* Orbit Circles */}
            <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
              {renderOrbitCircles()}
            </div>

            {/* Orbit Balls */}
            {bigBalls.map((ball, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full ${ball.size} ${ball.color} opacity-70`}
                style={{
                  top: ball.top,
                  left: ball.left,
                  ...getTransform(0.04),
                }}
              />
            )
            
          )}
          
          </section>
        </div>
      </div>
    </>
  );
}
