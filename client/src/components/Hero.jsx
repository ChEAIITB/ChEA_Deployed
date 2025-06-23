"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { FlaskRoundIcon as Flask, TestTube, Beaker, Atom, Zap, Droplets } from "lucide-react"
import loading from "../assets/images/loading.png"
import "aos/dist/aos.css"
import AOS from "aos"

// Chemical equipment sizes for floating elements
const chemicalEquipment = [
  { size: 120, opacity: 0.1, rotation: 45 },
  { size: 80, opacity: 0.15, rotation: -30 },
  { size: 100, opacity: 0.12, rotation: 60 },
]

// Chemical formulas to replace plus signs
const chemicalFormulas = ["H₂O", "CO₂", "NaCl", "C₆H₁₂O₆", "NH₃"]

// Floating chemical droplets with different colors
const chemicalDroplets = [
  { top: "15%", left: "10%", size: "w-6 h-6", color: "bg-emerald-400", glow: "shadow-emerald-400/50" },
  { top: "35%", left: "80%", size: "w-4 h-4", color: "bg-cyan-400", glow: "shadow-cyan-400/50" },
  { top: "65%", left: "15%", size: "w-5 h-5", color: "bg-violet-400", glow: "shadow-violet-400/50" },
  { top: "75%", left: "90%", size: "w-4 h-4", color: "bg-teal-400", glow: "shadow-teal-400/50" },
  { top: "25%", left: "60%", size: "w-3 h-3", color: "bg-lime-400", glow: "shadow-lime-400/50" },
]

// Larger chemical bubbles
const chemicalBubbles = [
  { top: "10%", left: "30%", size: "w-8 h-8", color: "bg-gradient-to-br from-blue-400 to-cyan-500" },
  { top: "50%", left: "75%", size: "w-10 h-10", color: "bg-gradient-to-br from-green-400 to-emerald-500" },
  { top: "85%", left: "20%", size: "w-6 h-6", color: "bg-gradient-to-br from-purple-400 to-violet-500" },
]

// Chemical equipment floating elements
const floatingEquipment = [
  { top: "20%", left: "5%", icon: Flask, color: "text-emerald-300", size: 32 },
  { top: "60%", left: "85%", icon: TestTube, color: "text-cyan-300", size: 28 },
  { top: "40%", left: "90%", icon: Beaker, color: "text-violet-300", size: 30 },
  { top: "80%", left: "10%", icon: Atom, color: "text-teal-300", size: 26 },
]

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  const getTransform = (mult = 0.01) => {
    const x = useTransform(mouseX, (x) => (x - window.innerWidth / 2) * mult)
    const y = useTransform(mouseY, (y) => (y - window.innerHeight / 2) * mult)
    return { x, y }
  }

  const renderChemicalRings = () =>
    chemicalEquipment.map((equipment, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border-2 border-dashed border-emerald-400/30"
        style={{
          width: equipment.size * 4,
          height: equipment.size * 4,
          opacity: equipment.opacity,
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20 + i * 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      />
    ))

  const renderChemicalFormulas = (side) => (
    <div className={`absolute ${side}-6 top-0 bottom-0 flex flex-col justify-around z-0`}>
      {chemicalFormulas.map((formula, i) => (
        <motion.div
          key={i}
          className="text-emerald-300/60 text-lg font-mono font-bold"
          style={{ marginTop: `${i * 15}vh` }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {formula}
        </motion.div>
      ))}
    </div>
  )

  const renderLiquidAnimation = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )

  return (
    <div onMouseMove={handleMouseMove} className="overflow-hidden">
      <div className="relative bg-gradient-to-b from-slate-900 via-emerald-950 to-cyan-950 text-white">
        {/* Liquid Animation Background */}
        {renderLiquidAnimation()}

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-20 relative z-10">
          {/* Chemical Reaction Rings */}
          <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
            {renderChemicalRings()}
          </div>

          {/* Chemical Formulas */}
          {renderChemicalFormulas("left")}
          {renderChemicalFormulas("right")}

          {/* Floating Chemical Equipment */}
          {floatingEquipment.map((equipment, i) => (
            <motion.div
              key={i}
              className="absolute z-0"
              style={{
                top: equipment.top,
                left: equipment.left,
                ...getTransform(0.03),
              }}
              animate={{
                rotate: [0, 10, -10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <equipment.icon size={equipment.size} className={`${equipment.color} opacity-40`} />
            </motion.div>
          ))}

          {/* Chemical Droplets */}
          {chemicalDroplets.map((droplet, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${droplet.size} ${droplet.color} ${droplet.glow} shadow-lg`}
              style={{
                top: droplet.top,
                left: droplet.left,
                ...getTransform(0.02),
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Hero Content */}
          <div className="z-10 w-full lg:w-1/2 space-y-6 ml-7">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight" data-aos="fade-right">
                CHEMICAL Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Association, IIT Bombay
                </span>
              </h1>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 my-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <Flask className="text-emerald-400" size={32} />
              <TestTube className="text-cyan-400" size={28} />
              <Beaker className="text-violet-400" size={30} />
              <Droplets className="text-teal-400" size={26} />
            </motion.div>

            <p className="text-lg text-gray-300" data-aos="fade-left">
              <span className="text-emerald-400 font-bold flex items-center gap-2">
                <Zap size={20} />
                Transforming atoms into innovations:
              </span>
              where science converges with ingenuity! Chemical Engineering: a pivotal Catalyst of Innovation, unleashes
              the profound power of scientific knowledge, forging unique path that Shapes a Sustainable and Prosperous
              World. The <span className="text-cyan-400 font-bold">Chemical</span> Engineering Association (ChEA),
              established in <span className="text-emerald-400 font-bold">1965</span>, looks back with pride with an
              enviable record of a number of educational, informative, and informal events.
            </p>
          </div>

          {/* Image with Chemical Effects */}
          <div className="lg:flex w-1/2 justify-center z-10 relative" data-aos="fade-up">
            <div className="relative">
              <img
                src={loading || "/placeholder.svg"}
                alt="Chemical Engineering Illustration"
                className="max-h-[500px] object-contain relative z-10"
              />
              {/* Chemical Reaction Effect around image */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-emerald-400/30"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: 360,
                }}
                transition={{
                  scale: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                  rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
              />
            </div>
          </div>
        </section>

        {/* Chemical Reaction Divider */}
        <div className="relative z-10 text-white">
          <div className="flex justify-center my-8">
            <motion.div
              className="w-4/5 h-[3px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 relative"
              data-aos="fade-right"
              animate={{
                boxShadow: [
                  "0 0 5px rgba(16, 185, 129, 0.5)",
                  "0 0 20px rgba(34, 211, 238, 0.8)",
                  "0 0 5px rgba(16, 185, 129, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <motion.div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-4xl text-emerald-400 font-bold"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Atom size={32} />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Video & Description Section */}
        <section className="relative py-20 px-6 lg:px-20">
          {/* Chemical Bubbles */}
          {chemicalBubbles.map((bubble, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${bubble.size} ${bubble.color} opacity-60 shadow-lg`}
              style={{
                top: bubble.top,
                left: bubble.left,
                ...getTransform(0.04),
              }}
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}

          <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
            {/* YouTube Embed with Chemical Frame */}
            <motion.div
              className="w-full lg:w-1/2 aspect-video relative"
              data-aos="fade-up-right"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                className="w-full h-full rounded-lg border-4 border-emerald-400 shadow-2xl shadow-emerald-400/20"
                src="https://www.youtube.com/embed/JOLQSrkcSAo?si=tbyiqzyl2Tz-k6M8"
                title="ChEA video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              {/* Chemical Equipment Icons around video */}
              <Flask className="absolute -top-4 -left-4 text-emerald-400 opacity-60" size={24} />
              <TestTube className="absolute -top-4 -right-4 text-cyan-400 opacity-60" size={24} />
              <Beaker className="absolute -bottom-4 -left-4 text-violet-400 opacity-60" size={24} />
              <Atom className="absolute -bottom-4 -right-4 text-teal-400 opacity-60" size={24} />
            </motion.div>

            {/* Description with Chemical Theme */}
            <motion.div
              className="w-full lg:w-1/2 text-lg leading-relaxed bg-gradient-to-br from-slate-900/80 to-emerald-950/80 p-8 rounded-xl shadow-2xl backdrop-blur-md text-gray-300 border border-emerald-400/20"
              data-aos="fade-up-left"
              whileHover={{
                boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
                borderColor: "rgba(16, 185, 129, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="text-emerald-400" size={24} />
                <h3 className="text-xl font-bold text-emerald-400">About ChEA</h3>
              </div>

              <p className="mb-4">
                ChEA is an association of the Alumni, Faculty, Students, and Staff of the Chemical Engineering
                Department, dedicated to the noble cause of disseminating knowledge and fostering awareness in the field
                of chemical engineering.
              </p>

              <p className="mb-4">
                One of its paramount objectives is to foster and fortify the spirit of brotherhood and cooperation among
                the esteemed members of the association, weaving a tapestry of unity that strengthens the bonds within
                this academic community.
              </p>

              <p>
                Association aims to nurture and cultivate leadership qualities, ignite the spark of initiative, and
                inculcate a profound sense of responsibility among its members.
              </p>

              {/* Chemical Formula Decoration */}
              <div className="flex justify-end mt-6 gap-4 text-sm text-emerald-400/60 font-mono">
                <span>C₆H₁₂O₆</span>
                <span>H₂SO₄</span>
                <span>NaOH</span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
