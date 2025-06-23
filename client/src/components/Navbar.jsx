"use client"

import { useState, useEffect } from "react"
import { Menu, X, FlaskRoundIcon as Flask, TestTube, Beaker, Atom, Droplets, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import pndLogo from "../assets/images/cheaorange.png"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: "Home", href: "/", icon: Flask },
    { name: "Events", href: "/events", icon: TestTube },
    { name: "Blogs", href: "#blogs", icon: Beaker },
    { name: "Publications", href: "/publications", icon: Atom },
    { name: "Links", href: "/links/25", icon: Droplets },
    { name: "Our Council", href: "/contact", icon: Zap },
    { name: "Facads", href: "/facad/24", icon: Flask },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Enhanced chemical particle animation
  const renderChemicalParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-20"
          style={{
            left: `${5 + i * 8}%`,
            top: "50%",
          }}
          animate={{
            y: [-8, 8, -8],
            opacity: [0.1, 0.4, 0.1],
            scale: [0.3, 1.2, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  )

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-slate-900/30 backdrop-blur-3xl border-b border-emerald-400/30 shadow-2xl shadow-emerald-400/20"
            : "bg-slate-900/20 backdrop-blur-2xl"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Enhanced Chemical Particles Background */}
        {renderChemicalParticles()}

        {/* Gradient Overlay for Extra Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/10 via-transparent to-cyan-950/10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo with Chemical Glow */}
            <motion.div
              className="flex-shrink-0 relative"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-emerald-400/30 rounded-full blur-xl opacity-0 hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg opacity-0 hover:opacity-80 transition-all duration-300 delay-100" />
              <img className="h-14 relative z-10 drop-shadow-lg" src={pndLogo || "/placeholder.svg"} alt="ChEA Logo" />

              {/* Enhanced Chemical Formula Decoration */}
              <motion.div
                className="absolute -top-3 -right-3 text-xs text-emerald-400/70 font-mono bg-slate-900/60 backdrop-blur-sm px-2 py-1 rounded-full border border-emerald-400/20"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
              >
                H₂O
              </motion.div>
            </motion.div>

            {/* Enhanced Desktop Menu */}
            <div className="hidden md:flex space-x-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                >
                  <Link
                    to={item.href}
                    className="group relative px-6 py-3 rounded-xl transition-all duration-400 hover:bg-emerald-400/15 backdrop-blur-sm"
                  >
                    {/* Enhanced Chemical Reaction Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-cyan-400/0 to-violet-400/0 group-hover:from-emerald-400/25 group-hover:via-cyan-400/20 group-hover:to-violet-400/25 rounded-xl transition-all duration-400" />

                    {/* Enhanced Glowing Border */}
                    <div className="absolute inset-0 border border-transparent group-hover:border-emerald-400/40 rounded-xl transition-all duration-400 group-hover:shadow-lg group-hover:shadow-emerald-400/20" />

                    {/* Subtle Inner Glow */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-xl transition-all duration-400" />

                    <div className="relative flex items-center gap-3 text-gray-300 group-hover:text-emerald-300 transition-all duration-400">
                      <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }}>
                        <item.icon
                          size={18}
                          className="opacity-70 group-hover:opacity-100 transition-all duration-400 drop-shadow-sm"
                        />
                      </motion.div>
                      <span className="font-semibold text-sm tracking-wide">{item.name}</span>
                    </div>

                    {/* Enhanced Chemical Droplet Effect */}
                    <motion.div
                      className="absolute -bottom-2 left-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 shadow-lg shadow-emerald-400/50"
                      style={{ x: "-50%" }}
                      animate={{
                        scale: [0, 1.2, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Floating Particles on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${30 + i * 20}%`,
                          }}
                          animate={{
                            y: [-5, -15, -5],
                            opacity: [0, 0.8, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.2,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Chemical Equipment Decoration */}
            <div className="hidden lg:flex items-center gap-4 opacity-40">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="p-2 rounded-full bg-emerald-400/10 backdrop-blur-sm"
              >
                <Atom size={22} className="text-emerald-400" />
              </motion.div>
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="p-2 rounded-full bg-cyan-400/10 backdrop-blur-sm"
              >
                <Flask size={20} className="text-cyan-400" />
              </motion.div>
              <motion.div
                animate={{ rotate: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="p-2 rounded-full bg-violet-400/10 backdrop-blur-sm"
              >
                <TestTube size={18} className="text-violet-400" />
              </motion.div>
            </div>

            {/* Enhanced Mobile menu toggle */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-3 text-gray-300 hover:text-emerald-400 focus:outline-none transition-all duration-400 rounded-xl"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-emerald-400/15 rounded-xl opacity-0 hover:opacity-100 transition-all duration-400 backdrop-blur-sm" />
                <div className="absolute inset-0 border border-emerald-400/0 hover:border-emerald-400/30 rounded-xl transition-all duration-400" />
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <X size={28} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <Menu size={28} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Enhanced Chemical Formula Strip */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-sm" />
      </motion.nav>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-20 left-0 w-full z-40 md:hidden bg-slate-900/25 backdrop-blur-3xl border-b border-emerald-400/30 shadow-2xl shadow-emerald-400/10"
          >
            {/* Enhanced Mobile Menu Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/15 via-slate-950/20 to-cyan-950/15" />

            {/* Enhanced Chemical Particles for Mobile */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-emerald-400/15 rounded-full backdrop-blur-sm"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${15 + i * 8}%`,
                  }}
                  animate={{
                    scale: [0.3, 1.2, 0.3],
                    opacity: [0.1, 0.5, 0.1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3 + i * 0.3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            <div className="relative px-8 py-8">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      to={item.href}
                      className="group flex items-center gap-4 px-6 py-4 rounded-xl bg-slate-800/30 hover:bg-emerald-400/15 border border-slate-700/30 hover:border-emerald-400/40 transition-all duration-400 backdrop-blur-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        className="p-3 rounded-xl bg-emerald-400/15 group-hover:bg-emerald-400/25 transition-all duration-400 backdrop-blur-sm"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon size={20} className="text-emerald-400" />
                      </motion.div>
                      <span className="text-gray-300 group-hover:text-emerald-300 font-semibold text-base transition-all duration-400">
                        {item.name}
                      </span>

                      {/* Enhanced Chemical Formula */}
                      <div className="ml-auto text-sm text-emerald-400/50 font-mono bg-emerald-400/10 px-3 py-1 rounded-full backdrop-blur-sm">
                        {["H₂O", "CO₂", "NaCl", "NH₃", "CH₄", "O₂", "N₂"][index]}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Mobile Chemical Equipment Footer */}
              <motion.div
                className="flex justify-center items-center gap-6 mt-8 pt-6 border-t border-emerald-400/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {[TestTube, Beaker, Flask, Atom].map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="p-2 rounded-full bg-slate-800/40 backdrop-blur-sm"
                    animate={{
                      rotate: i % 2 === 0 ? [0, 360] : [360, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon size={22} className={`text-${["cyan", "violet", "emerald", "teal"][i]}-400/70`} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
