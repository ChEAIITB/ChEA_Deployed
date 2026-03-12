"use client"
import { useEffect } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { FlaskRoundIcon as Flask, TestTube, Beaker, Atom, Zap, Droplets, Factory, Flame, Wind, Gauge, Settings, AlertTriangle } from 'lucide-react'
import loading from "../assets/images/loading.png"
import "aos/dist/aos.css"
import AOS from "aos"

// Industrial equipment sizes for floating elements
const industrialEquipment = [
  { size: 150, opacity: 0.08, rotation: 0, type: 'cooling-tower' },
  { size: 120, opacity: 0.12, rotation: 45, type: 'reactor' },
  { size: 100, opacity: 0.10, rotation: -30, type: 'distillation' },
]

// Industrial smoke/fog particles
const smokeParticles = [
  { top: "5%", left: "15%", size: "w-8 h-8", delay: 0 },
  { top: "10%", left: "25%", size: "w-12 h-12", delay: 0.5 },
  { top: "8%", left: "35%", size: "w-6 h-6", delay: 1 },
  { top: "12%", left: "45%", size: "w-10 h-10", delay: 1.5 },
  { top: "6%", left: "55%", size: "w-8 h-8", delay: 2 },
  { top: "15%", left: "65%", size: "w-14 h-14", delay: 2.5 },
  { top: "9%", left: "75%", size: "w-7 h-7", delay: 3 },
  { top: "11%", left: "85%", size: "w-9 h-9", delay: 3.5 },
]

// Chemical plant structures
const chemicalPlants = [
  { top: "70%", left: "5%", width: "w-16", height: "h-32", type: "smokestack" },
  { top: "65%", left: "15%", width: "w-20", height: "h-28", type: "reactor" },
  { top: "68%", left: "30%", width: "w-12", height: "h-24", type: "tower" },
  { top: "72%", left: "80%", width: "w-18", height: "h-36", type: "cooling" },
  { top: "69%", left: "90%", width: "w-14", height: "h-30", type: "distillation" },
]

// Industrial warning lights
const warningLights = [
  { top: "15%", left: "5%", color: "bg-emerald-500" },
  { top: "25%", left: "90%", color: "bg-cyan-500" },
  { top: "45%", left: "3%", color: "bg-teal-500" },
  { top: "55%", left: "95%", color: "bg-emerald-400" },
]

// Floating industrial equipment - positioned to avoid text areas
const floatingIndustrial = [
  // { top: "15%", left: "2%", icon: Factory, color: "text-emerald-300", size: 36 },
  // { top: "45%", left: "95%", icon: Gauge, color: "text-cyan-300", size: 32 },
  // { top: "25%", left: "97%", icon: Settings, color: "text-teal-300", size: 30 },
  // { top: "65%", left: "2%", icon: AlertTriangle, color: "text-emerald-400", size: 28 },
  // { top: "35%", left: "1%", icon: Flame, color: "text-cyan-400", size: 26 },
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

  const renderIndustrialStructures = () =>
    industrialEquipment.map((equipment, i) => (
      <motion.div
        key={i}
        className="absolute pointer-events-none"
        style={{
          width: equipment.size * 3,
          height: equipment.size * 3,
          opacity: equipment.opacity,
          left: `${10 + i * 25}%`,
          top: `${60 + i * 5}%`,
          zIndex: 1,
        }}
        animate={{
          rotate: equipment.type === 'reactor' ? 360 : 0,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: { duration: 30 + i * 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      >
        {equipment.type === 'cooling-tower' && (
          <div className="w-full h-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-full opacity-30" />
        )}
        {equipment.type === 'reactor' && (
          <div className="w-full h-full bg-gradient-to-br from-cyan-600 to-teal-600 rounded-full opacity-25" />
        )}
        {equipment.type === 'distillation' && (
          <div className="w-full h-full bg-gradient-to-t from-teal-600 to-cyan-600 rounded-lg opacity-20" />
        )}
      </motion.div>
    ))

  const renderChemicalPlants = () =>
    chemicalPlants.map((plant, i) => (
      <motion.div
        key={i}
        className={`absolute ${plant.width} ${plant.height} pointer-events-none`}
        style={{
          top: plant.top,
          left: plant.left,
          zIndex: 1,
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: i * 0.2, duration: 1 }}
      >
        {plant.type === 'smokestack' && (
          <div className="w-full h-full bg-gradient-to-t from-emerald-700 to-emerald-500 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          </div>
        )}
        {plant.type === 'reactor' && (
          <div className="w-full h-full bg-gradient-to-br from-cyan-600 to-teal-700 rounded-t-full relative">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full animate-ping" />
          </div>
        )}
        {plant.type === 'tower' && (
          <div className="w-full h-full bg-gradient-to-t from-teal-700 to-cyan-600 relative">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-300 rounded-full animate-pulse" />
          </div>
        )}
        {plant.type === 'cooling' && (
          <div className="w-full h-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-full relative">
            <motion.div
              className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full opacity-60"
              animate={{ scale: [0, 1, 0], y: [0, -20, -40] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
            />
          </div>
        )}
        {plant.type === 'distillation' && (
          <div className="w-full h-full bg-gradient-to-t from-teal-700 to-emerald-600 relative">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-300 rounded-full animate-pulse" />
          </div>
        )}
      </motion.div>
    ))

  const renderIndustrialSmoke = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {/* Heavy industrial fog */}
      <motion.div
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-400/10 to-transparent"
        animate={{
          opacity: [0.05, 0.15, 0.05],
          x: [-50, 50, -50],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      
      {/* Smoke particles */}
      {smokeParticles.map((particle, i) => (
        <motion.div
          key={i}
          className={`absolute ${particle.size} bg-gradient-to-br from-emerald-300/20 to-cyan-500/10 rounded-full blur-sm`}
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -100, -200],
            x: [0, Math.random() * 40 - 20, Math.random() * 80 - 40],
            opacity: [0, 0.3, 0],
            scale: [0.5, 1, 1.5],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Steam effects */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-300/20 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${60 + Math.random() * 30}%`,
          }}
          animate={{
            y: [0, -50, -100],
            opacity: [0, 0.4, 0],
            scale: [0, 1, 2],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )

  const renderWarningLights = () =>
    warningLights.map((light, i) => (
      <motion.div
        key={i}
        className={`absolute w-3 h-3 ${light.color} rounded-full shadow-lg pointer-events-none`}
        style={{
          top: light.top,
          left: light.left,
          zIndex: 5,
          boxShadow: `0 0 20px ${light.color.includes('emerald') ? '#10b981' : light.color.includes('cyan') ? '#06b6d4' : '#14b8a6'}`,
        }}
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 1.5 + i * 0.3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    ))

  return (
    <div onMouseMove={handleMouseMove} className="overflow-hidden">
      <div className="relative bg-gradient-to-b from-slate-900 via-emerald-950 to-cyan-950 text-white">
        {/* Industrial Smoke Background */}
        {renderIndustrialSmoke()}
        
        {/* Industrial Structures */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          {renderIndustrialStructures()}
          {renderChemicalPlants()}
        </div>

        {/* Warning Lights */}
        {renderWarningLights()}

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-20 relative" style={{ zIndex: 20 }}>
          {/* Floating Industrial Equipment - positioned at edges only */}
          {floatingIndustrial.map((equipment, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{
                top: equipment.top,
                left: equipment.left,
                zIndex: 5,
                ...getTransform(0.02),
              }}
              animate={{
                rotate: [0, 10, -10, 0],
                y: [0, -15, 0],
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

          {/* Hero Content */}
          <div className="w-full lg:w-1/2 space-y-6 ml-7 relative" style={{ zIndex: 30 }}>
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
              style={{ zIndex: 30 }}
            >
              <Flask className="text-emerald-400" size={32} />
              <TestTube className="text-cyan-400" size={28} />
              <Beaker className="text-violet-400" size={30} />
              <Droplets className="text-teal-400" size={26} />
            </motion.div>
            
            <p className="text-lg text-gray-300 relative" data-aos="fade-left" style={{ zIndex: 30 }}>
              <span className="text-emerald-400 font-bold flex items-center gap-2">
                <Zap size={20} />
                Transforming atoms into innovations:
              </span>
              where science converges with ingenuity! From massive chemical plants to cutting-edge research facilities, 
              we engineer the industrial backbone that transforms raw materials into the products that power our world. 
              The <span className="text-cyan-400 font-bold">Chemical</span> Engineering Association (ChEA), 
              established in <span className="text-emerald-400 font-bold">1965</span>, looks back with pride with an 
              enviable record of a number of educational, informative, and informal events.
            </p>
          </div>

          {/* Image with Industrial Effects */}
          <div className="lg:flex w-1/2 justify-center relative" data-aos="fade-up" style={{ zIndex: 25 }}>
            <div className="relative">
              <img
                src={loading || "/placeholder.svg?height=500&width=500&query=massive chemical industrial plant with smokestacks and cooling towers"}
                alt="Chemical Industrial Plant"
                className="max-h-[500px] object-contain relative z-10"
              />
              
              {/* Industrial Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-emerald-400/40"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(16, 185, 129, 0.3)",
                    "0 0 40px rgba(6, 182, 212, 0.5)",
                    "0 0 20px rgba(16, 185, 129, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            </div>
          </div>
        </section>

        {/* Industrial Divider */}
        <div className="relative text-white" style={{ zIndex: 20 }}>
          <div className="flex justify-center my-8">
            <motion.div
              className="w-4/5 h-[4px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 relative"
              data-aos="fade-right"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(16, 185, 129, 0.5)",
                  "0 0 30px rgba(6, 182, 212, 0.8)",
                  "0 0 10px rgba(16, 185, 129, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl text-emerald-400 font-bold"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Atom size={36} />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Video & Description Section */}
        <section className="relative py-20 px-6 lg:px-20" style={{ zIndex: 20 }}>
          {/* Industrial Background Elements - very subtle */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ zIndex: 1 }}>
            <div className="absolute top-10 left-10 w-32 h-48 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-lg" />
            <div className="absolute top-20 right-20 w-24 h-40 bg-gradient-to-t from-cyan-600 to-teal-600 rounded-full" />
            <div className="absolute bottom-20 left-1/4 w-28 h-36 bg-gradient-to-t from-teal-600 to-cyan-600" />
          </div>

          <div className="relative flex flex-col lg:flex-row gap-10 items-center" style={{ zIndex: 25 }}>
            {/* YouTube Embed with Industrial Frame */}
            <motion.div
              className="w-full lg:w-1/2 aspect-video relative"
              data-aos="fade-up-right"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              style={{ zIndex: 30 }}
            >
              <iframe
                className="w-full h-full rounded-lg border-4 border-emerald-400 shadow-2xl shadow-emerald-400/20"
                src="https://www.youtube.com/embed/JOLQSrkcSAo?si=tbyiqzyl2Tz-k6M8"
                title="ChEA Industrial video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              
              {/* Industrial Equipment Icons around video */}
              <Flask className="absolute -top-4 -left-4 text-emerald-400 opacity-70" size={28} />
              <TestTube className="absolute -top-4 -right-4 text-cyan-400 opacity-70" size={28} />
              <Beaker className="absolute -bottom-4 -left-4 text-violet-400 opacity-70" size={28} />
              <Atom className="absolute -bottom-4 -right-4 text-teal-400 opacity-70" size={28} />
            </motion.div>

            {/* Description with Industrial Theme */}
            <motion.div
              className="w-full lg:w-1/2 text-lg leading-relaxed bg-gradient-to-br from-slate-900/90 to-emerald-950/80 p-8 rounded-xl shadow-2xl backdrop-blur-md text-gray-300 border border-emerald-400/30 relative"
              data-aos="fade-up-left"
              whileHover={{
                boxShadow: "0 0 40px rgba(16, 185, 129, 0.4)",
                borderColor: "rgba(16, 185, 129, 0.6)",
              }}
              transition={{ duration: 0.3 }}
              style={{ zIndex: 30 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Droplets className="text-emerald-400" size={28} />
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
                {/* <span>C₆H₁₂O₆</span>
                <span>H₂SO₄</span>
                <span>NaOH</span> */}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
