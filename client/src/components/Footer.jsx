"use client"
import CountUp from "react-countup"
import { motion, useInView } from "framer-motion"
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  FlaskRoundIcon as Flask,
  TestTube,
  Beaker,
  Atom,
  Droplets,
  Zap,
  Users,
  Calendar,
  Award,
  GraduationCap,
} from "lucide-react"
import { useRef } from "react"
import cheaLogo from "../assets/images/cheaorange.png"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const stats = [
    // {
    //   label: "National Rank",
    //   value: 1,
    //   icon: Award,
    //   color: "text-emerald-400",
    //   // formula: "Au",
    //   description: "Gold Standard",
    // },
    // {
    //   label: "Faculties",
    //   value: 45,
    //   icon: GraduationCap,
    //   color: "text-cyan-400",
    //   // formula: "H₂SO₄",
    //   description: "Expert Catalysts",
    // },
    // {
    //   label: "Students",
    //   value: 750,
    //   icon: Users,
    //   color: "text-violet-400",
    //   // formula: "C₆H₁₂O₆",
    //   description: "Future Innovators",
    // },
    // {
    //   label: "Events",
    //   value: 20,
    //   icon: Calendar,
    //   color: "text-teal-400",
    //   // formula: "NaCl",
    //   description: "Annual Reactions",
    // },
  ]

  const socialIcons = [
    {
      icon: Facebook,
      link: "https://www.facebook.com/cheaiitb",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-400/10",
      formula: "FB",
    },
    {
      icon: Instagram,
      link: "https://www.instagram.com/chea_iitb",
      color: "hover:text-pink-400",
      bgColor: "hover:bg-pink-400/10",
      formula: "IG",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/company/chea-iit-bombay/",
      color: "hover:text-blue-500",
      bgColor: "hover:bg-blue-500/10",
      formula: "Li",
    },
    {
      icon: Youtube,
      link: "https://www.youtube.com/@ChEAIITB/featured",
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-400/10",
      formula: "YT",
    },
    {
      icon: Twitter,
      link: "https://x.com/CheEnggIITB",
      color: "hover:text-sky-400",
      bgColor: "hover:bg-sky-400/10",
      formula: "X",
    },
  ]

  // Chemical particle animation
  const renderChemicalParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )

  // Floating chemical equipment
  const renderFloatingEquipment = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <motion.div
        className="absolute top-10 left-10"
        animate={{
          rotate: 360,
          y: [0, -10, 0],
        }}
        transition={{
          rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      >
        <Flask size={40} className="text-emerald-400" />
      </motion.div>

      <motion.div
        className="absolute top-20 right-20"
        animate={{
          rotate: -360,
          x: [0, 10, 0],
        }}
        transition={{
          rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          x: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      >
        <TestTube size={35} className="text-cyan-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/4"
        animate={{
          rotate: [0, 15, -15, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Beaker size={38} className="text-violet-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-1/3"
        animate={{
          scale: [1, 1.2, 1],
          rotate: 360,
        }}
        transition={{
          scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
      >
        <Atom size={32} className="text-teal-400" />
      </motion.div>
    </div>
  )

  return (
    <footer
      ref={ref}
      style={{height:'400px'}}
      className="relative bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950 text-white py-16 px-4 overflow-hidden"
    >
      {/* Chemical Particles Background */}
      {/* {renderChemicalParticles()} */}

      {/* Floating Chemical Equipment */}
      {/* {renderFloatingEquipment()} */}

      {/* Chemical Reaction Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Stats Section with Chemical Theme */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mb-16"
          // initial={{ opacity: 0, y: 50 }}
          // animate={isInView ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative"
              // initial={{ opacity: 0, y: 30 }}
              // animate={isInView ? { opacity: 1, y: 0 } : {}}
              // transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Chemical Container Effect */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 group-hover:border-emerald-400/30 transition-all duration-300">
                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-cyan-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Chemical Equipment Icon */}
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-slate-700/50 group-hover:bg-emerald-400/10 transition-colors duration-300">
                    <stat.icon
                      size={24}
                      className={`${stat.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                </div>

                {/* Count with Chemical Glow */}
                <div className="relative">
                  <h2
                    className={`text-4xl font-extrabold ${stat.color} group-hover:drop-shadow-lg transition-all duration-300`}
                  >
                    {isInView && <CountUp end={stat.value} duration={2.5} delay={index * 0.2} />}
                    {stat.value > 1 ? "+" : ""}
                  </h2>

                  {/* Chemical Formula */}
                  {/* <motion.div
                    className="absolute -top-2 -right-2 text-xs font-mono text-emerald-400/60"
                    // animate={{ rotate: [0, 5, -5, 0] }}
                    // transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {stat.formula}
                  </motion.div> */}
                </div>

                <p className="mt-2 font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>

                <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {stat.description}
                </p>

                {/* Chemical Reaction Indicator */}
                <motion.div
                  className="absolute bottom-2 left-1/2 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100"
                  style={{ x: "-50%" }}
                  animate={{
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Icons with Chemical Theme */}
        
        {/* Chemical Divider */}
        
        {/* Maintainer Section with Chemical Lab Theme */}
        <motion.div
          className="text-center flex flex-col items-center"
          style={{marginTop:'-80px'}}
          // initial={{ opacity: 0, y: 30 }}
          // animate={isInView ? { opacity: 1, y: 0 } : {}}
          // transition={{ delay: 1.4, duration: 0.6 }}
        >
          <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            {/* Chemical Lab Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-cyan-400/5 rounded-2xl opacity-0 " />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Zap size={20} className="text-emerald-400" />
                <p className="text-lg font-semibold text-gray-300">
                  Website created by & Maintained by
                </p>
                <Flask size={20} className="text-cyan-400" />
              </div>

              <div className="relative">
                <motion.img
                  src={cheaLogo || "/placeholder.svg"}
                  alt="ChEA Logo"
                  className="h-12 mx-auto "
                  // whileHover={{ rotate: [0, -5, 5, 0] }}
                  // transition={{ duration: 0.5 }}
                />

                {/* Chemical Glow Effect */}
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Chemical Equipment Footer */}
              <div className="flex justify-center items-center gap-4 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <TestTube size={16} className="text-cyan-400" />
                {/* <span className="text-xs font-mono text-emerald-400">C₆H₁₂O₆</span> */}
                <Beaker size={16} className="text-violet-400" />
                {/* <span className="text-xs font-mono text-cyan-400">H₂O</span> */}
                <Atom size={16} className="text-teal-400" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
<div className="flex justify-center mb-8" style={{paddingTop:'30px'}}>
          <motion.div
            className="w-32 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent relative"
            // initial={{ width: 0 }}
            // animate={isInView ? { width: 128 } : {}}
            // transition={{ delay: 1.2, duration: 1 }}
          >
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Droplets size={16} className="text-emerald-400" />
            </motion.div>
          </motion.div>
        </div>

      {/* Bottom Chemical Border */}
      <motion.div
          className="flex justify-center space-x-4 mb-12"
          // initial={{ opacity: 0, scale: 0.8 }}
          // animate={isInView ? { opacity: 1, scale: 1 } : {}}
          // transition={{ delay: 0.8, duration: 0.6 }}
        >
          {socialIcons.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 ${item.color} ${item.bgColor} transition-all duration-300 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-400/10`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              // initial={{ opacity: 0, y: 20 }}
              // animate={isInView ? { opacity: 1, y: 0 } : {}}
              // transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
            >
              {/* Chemical Reaction Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-cyan-400/0 group-hover:from-emerald-400/10 group-hover:to-cyan-400/10 rounded-xl transition-all duration-300" />

              <item.icon size={24} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />

              {/* Chemical Formula Label */}
              <div className="absolute -top-2 -right-2 text-xs font-mono text-emerald-400/60 bg-slate-900/80 px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.formula}
              </div>

              {/* Chemical Bubble Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(16, 185, 129, 0)",
                    "0 0 0 10px rgba(16, 185, 129, 0.1)",
                    "0 0 0 0 rgba(16, 185, 129, 0)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.a>
          ))}
        </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
    </footer>
  )
}
