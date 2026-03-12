"use client"

import { useState, useEffect } from "react"
import { Menu, X, FlaskRoundIcon as Flask, TestTube, Beaker, Atom, Zap } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion"
import pndLogo from "../assets/images/cheaorange.png"
import { Link, useLocation } from "react-router-dom"
import {
  Home, Calendar, FileText, BookOpen,
  Link as LinkIcon, Users, UserCheck,
} from "lucide-react"

const navItems = [
  { name: "Home",         href: "/",            icon: Home  },
  { name: "Events",       href: "/events",      icon: Calendar },
  { name: "Blogs",        href: "/blogs",       icon: FileText },
  { name: "Publications", href: "/publications",icon: BookOpen },
  { name: "Links",        href: "/links/25",    icon: LinkIcon },
  { name: "Our Council",  href: "/contact",     icon: Users },
  { name: "Facads",       href: "/facad/24",    icon: UserCheck },
]

const TICKER_FORMULAS = ["Valfi", "Convo", "F_Party", "Trip", "Trek", "MCL", "", "GCs", "many_m"]

function OrbitDot({ radius = 14, duration = 3, delay = 0, color = "bg-emerald-400" }) {
  return (
    <motion.div
      className={`absolute w-1 h-1 rounded-full ${color} opacity-60`}
      style={{ top: "50%", left: "50%", marginTop: -2, marginLeft: -2 }}
      animate={{
        x: [
          Math.cos(0) * radius, Math.cos(Math.PI * 0.5) * radius,
          Math.cos(Math.PI) * radius, Math.cos(Math.PI * 1.5) * radius,
          Math.cos(Math.PI * 2) * radius,
        ],
        y: [
          Math.sin(0) * radius * 0.35, Math.sin(Math.PI * 0.5) * radius * 0.35,
          Math.sin(Math.PI) * radius * 0.35, Math.sin(Math.PI * 1.5) * radius * 0.35,
          Math.sin(Math.PI * 2) * radius * 0.35,
        ],
      }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    />
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [tickerIdx, setTickerIdx] = useState(0)
  const [hoveredItem, setHoveredItem] = useState(null)
  const location = useLocation()
  const { scrollY } = useScroll()

  const navHeight = useTransform(scrollY, [0, 60], [76, 60])
  const springHeight = useSpring(navHeight, { stiffness: 200, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setTickerIdx(i => (i + 1) % TICKER_FORMULAS.length), 2200)
    return () => clearInterval(id)
  }, [])

  useEffect(() => setIsOpen(false), [location.pathname])

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/"
    return location.pathname.startsWith(`/${href.split("/")[1]}`)
  }

  return (
    <>
      {/* Top accent bar */}
      <div className="fixed top-0 left-0 w-full z-50 h-[3px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/0 via-emerald-400 to-cyan-400/60" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-1/3"
          animate={{ x: ["-100%", "400%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
        />
        <div className="absolute inset-0 blur-sm bg-gradient-to-r from-emerald-400/40 via-cyan-400/60 to-emerald-400/40" />
      </div>

      {/* Main Navbar */}
      <motion.nav
        style={{ height: springHeight }}
        className={`fixed top-[3px] left-0 w-full z-50 transition-shadow duration-500 ${
          scrolled ? "shadow-[0_8px_60px_rgba(16,185,129,0.15),0_2px_20px_rgba(0,0,0,0.4)]" : ""
        }`}
      >
        {/* Background layers */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 backdrop-blur-3xl"
            animate={{ backgroundColor: scrolled ? "rgba(2,6,23,0.88)" : "rgba(2,6,23,0.55)" }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute -left-20 top-0 bottom-0 w-64 bg-gradient-to-r from-emerald-500/8 to-transparent" />
          <div className="absolute -right-20 top-0 bottom-0 w-48 bg-gradient-to-l from-cyan-500/6 to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg,rgba(255,255,255,0.5) 0px,rgba(255,255,255,0.5) 1px,transparent 1px,transparent 8px)`,
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/[0.04] to-transparent"
            animate={{ x: ["-120%", "220%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 6 }}
          />
          <div className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent ${scrolled ? "opacity-100" : "opacity-40"}`} />
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent blur-md" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>

        {/* Nav content */}
        <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="relative group flex items-center gap-3 flex-shrink-0 py-2">
            <motion.div
              className="absolute -inset-3 rounded-2xl bg-emerald-400/0"
              whileHover={{ backgroundColor: "rgba(52,211,153,0.07)" }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="relative"
              whileHover={{ scale: 1.08, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 rounded-xl bg-emerald-400/0 group-hover:bg-emerald-400/20 blur-lg transition-all duration-500" />
              <img
                className="h-10 relative z-10 drop-shadow-[0_0_12px_rgba(16,185,129,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(16,185,129,0.7)] transition-all duration-300"
                src={pndLogo}
                alt="ChEA Logo"
              />
            </motion.div>
            <div className="hidden md:flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black tracking-[0.25em] text-emerald-400/80">ChEA</span>
                <div className="w-1 h-1 rounded-full bg-emerald-400/40" />
                <span className="text-[10px] font-medium tracking-widest text-slate-500 uppercase">IIT Bombay</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap size={9} className="text-cyan-400/50" />
                <div className="w-12 overflow-hidden h-3.5 relative">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={tickerIdx}
                      className="absolute text-[11px] font-mono text-cyan-400/60 whitespace-nowrap leading-none"
                      initial={{ y: -14, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 14, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {TICKER_FORMULAS[tickerIdx]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop nav items */}
          <nav className="hidden md:flex items-center">
            <div className="absolute left-1/2 -translate-x-1/2 h-px w-[480px] bg-gradient-to-r from-transparent via-slate-700/30 to-transparent pointer-events-none" />
            {navItems.map((item, index) => {
              const active = isActive(item.href)
              const hovered = hoveredItem === item.name
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={item.href}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative group block px-3.5 py-2 rounded-xl mx-0.5"
                  >
                    {(active || hovered) && (
                      <motion.div
                        layoutId="navHoverBg"
                        className={`absolute inset-0 rounded-xl ${
                          active
                            ? "bg-gradient-to-b from-emerald-400/15 to-emerald-400/5 border border-emerald-400/30"
                            : "bg-gradient-to-b from-slate-700/40 to-slate-800/20 border border-slate-600/30"
                        }`}
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                    {active && (
                      <div className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent rounded-full" />
                    )}
                    {active && (
                      <div className="absolute inset-0 pointer-events-none">
                        <OrbitDot radius={22} duration={4} delay={0} color="bg-emerald-400" />
                        <OrbitDot radius={18} duration={3} delay={1.5} color="bg-cyan-400" />
                      </div>
                    )}
                    <div className="relative flex flex-col items-center gap-1">
                      <motion.div
                        className={`transition-all duration-300 ${active ? "text-emerald-400" : "text-slate-500 group-hover:text-emerald-300"}`}
                        animate={active ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <item.icon size={13} strokeWidth={active ? 2.5 : 1.8} />
                      </motion.div>
                      <span className={`text-[12px] font-semibold tracking-wide leading-none transition-all duration-300 ${active ? "text-emerald-400" : "text-slate-400 group-hover:text-white"}`}>
                        {item.name}
                      </span>
                      <AnimatePresence>
                        {(hovered || active) && (
                          <motion.span
                            className="text-[9px] font-mono text-emerald-400/50 leading-none"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.formula}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                    {active && (
                      <motion.div
                        layoutId="activeNavPip"
                        className="absolute -bottom-px left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-1 mr-1">
              <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-800/50 border border-slate-700/40">
                {[
                  { Icon: Atom,     anim: { rotate: [0, 360] },    dur: 12, color: "text-emerald-400/60" },
                  { Icon: Flask,    anim: { y: [-2, 2, -2] },      dur: 2.5,color: "text-cyan-400/50"   },
                  { Icon: TestTube, anim: { rotate: [-6, 6, -6] }, dur: 3,  color: "text-violet-400/50" },
                  { Icon: Beaker,   anim: { scale: [1, 1.15, 1] }, dur: 4,  color: "text-emerald-400/40" },
                ].map(({ Icon, anim, dur, color }, i) => (
                  <motion.div
                    key={i}
                    className={`${color} p-1 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 cursor-default`}
                    animate={anim}
                    transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  >
                    <Icon size={13} />
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              onClick={() => setIsOpen(v => !v)}
              className="md:hidden relative p-2.5 rounded-xl overflow-hidden border border-slate-700/40 bg-slate-800/50 text-slate-300 hover:text-emerald-400 transition-colors duration-300"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen && <div className="absolute inset-0 bg-emerald-400/10 border border-emerald-400/30 rounded-xl" />}
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0, scale: 0.5 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: 90, opacity: 0, scale: 0.5 }} transition={{ duration: 0.2 }}>
                    <X size={18} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0, scale: 0.5 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: -90, opacity: 0, scale: 0.5 }} transition={{ duration: 0.2 }}>
                    <Menu size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{ background: "radial-gradient(ellipse at top, rgba(16,185,129,0.04), rgba(2,6,23,0.7))" }}
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[66px] left-3 right-3 z-50 md:hidden rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-slate-950/96 backdrop-blur-3xl rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/25 via-transparent to-cyan-950/15 rounded-2xl" />
              <div className="absolute inset-0 rounded-2xl border border-slate-700/50" />
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
              <div className="absolute top-0 left-6 right-6 h-3 bg-gradient-to-r from-transparent via-emerald-400/15 to-transparent blur-md" />
              <div className="absolute inset-[1px] rounded-2xl border border-white/[0.03]" />

              <div className="relative p-3 space-y-0.5">
                {navItems.map((item, index) => {
                  const active = isActive(item.href)
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 + index * 0.05, duration: 0.35, ease: "easeOut" }}
                    >
                      <Link
                        to={item.href}
                        className={`group relative flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 ${
                          active
                            ? "bg-gradient-to-r from-emerald-400/12 to-emerald-400/5 border border-emerald-400/25"
                            : "hover:bg-slate-800/50 border border-transparent hover:border-slate-700/30"
                        }`}
                      >
                        {active && (
                          <div className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-gradient-to-b from-emerald-400 to-cyan-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                        )}
                        <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center border transition-all duration-200 ${
                          active
                            ? "bg-emerald-400/20 border-emerald-400/30 text-emerald-400 shadow-[inset_0_1px_0_rgba(52,211,153,0.2)]"
                            : "bg-slate-800/70 border-slate-700/40 text-slate-500 group-hover:bg-emerald-400/10 group-hover:border-emerald-400/20 group-hover:text-emerald-300"
                        }`}>
                          <item.icon size={15} strokeWidth={active ? 2.5 : 1.8} />
                        </div>
                        <span className={`flex-1 text-sm font-semibold transition-colors duration-200 ${active ? "text-emerald-300" : "text-slate-300 group-hover:text-white"}`}>
                          {item.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-mono transition-colors duration-200 ${active ? "text-emerald-400/60" : "text-slate-600 group-hover:text-emerald-400/40"}`}>
                            {item.formula}
                          </span>
                          {active && (
                            <motion.div
                              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              style={{ boxShadow: "0 0 6px 2px rgba(16,185,129,0.5)" }}
                            />
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}

                <motion.div
                  className="flex items-center justify-between pt-3 mt-2 px-2 border-t border-slate-800/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-[10px] font-mono text-slate-600 tracking-widest">IITB · CHEA</span>
                  <div className="flex items-center gap-2">
                    {[Atom, Flask, TestTube, Beaker].map((Icon, i) => (
                      <motion.div
                        key={i}
                        className="text-slate-700 hover:text-emerald-400/60 transition-colors duration-300"
                        animate={{ rotate: i % 2 === 0 ? [0, 360] : [360, 0] }}
                        transition={{ duration: 6 + i, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon size={12} />
                      </motion.div>
                    ))}
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={tickerIdx}
                      className="text-[10px] font-mono text-slate-600 tracking-widest"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {TICKER_FORMULAS[tickerIdx]}
                    </motion.span>
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}