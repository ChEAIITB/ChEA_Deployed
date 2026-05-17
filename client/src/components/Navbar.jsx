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
  { name: "Links",        href: "/links",    icon: LinkIcon },
  { name: "Contacts",  href: "/contact",     icon: Users },
  { name: "Facads",       href: "/facad/24",    icon: UserCheck },
]

const TICKER_FORMULAS = ["Valfi", "Convo", "F_Party", "Trip", "Trek", "MCL", "", "GCs", "many_m"]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [tickerIdx, setTickerIdx] = useState(0)
  const [hoveredItem, setHoveredItem] = useState(null)
  const location = useLocation()
  const { scrollY } = useScroll()


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
      <div className="fixed top-0 left-0 w-full z-50 h-[3px] overflow-hidden">
      </div>

      <motion.nav
        className={`fixed top-[0px] left-0 w-full z-50 transition-shadow duration-500 ${
          scrolled ? "shadow-[0_2px_20px_rgba(74,141,255,0.22),0_2px_20px_rgba(0,0,0,0.4)]" : ""
        }`}
        style={{borderBottom:`1px solid ${scrolled?"#16396d":"transparent"}`}}

      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 backdrop-blur-3xl"
            animate={{ backgroundColor: scrolled ? "rgba(9, 27, 52, 0.55)" : "#0a1a34" }}
            transition={{ duration: 0.5 }}
          />
          {/* <div className="absolute -left-20 top-0 bottom-0 w-64 bg-gradient-to-r from-emerald-500/8 to-transparent" />
          <div className="absolute -right-20 top-0 bottom-0 w-48 bg-gradient-to-l from-cyan-500/6 to-transparent" /> */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg,rgba(255,255,255,0.5) 0px,rgba(255,255,255,0.5) 1px,transparent 1px,transparent 8px)`,
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4A8DFF]/[0.05] to-transparent"
            animate={{ x: ["-120%", "220%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 6 }}
          />
          {/* <div className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent ${scrolled ? "opacity-100" : "opacity-40"}`} />
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent blur-md" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" /> */}
        </div>

        {/* Nav content */}
        <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between pt-2 pb-3 md:pt-0 md:pb-0" >

          {/* Logo */}
          <Link to="/" className="relative group flex items-center gap-3 flex-shrink-0 py-2">
            <motion.div
              className="absolute -inset-3 rounded-2xl bg-emerald-400/0"
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="relative"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 rounded-xl bg-emerald-400/0"/>
              <img
                className="h-10 relative z-10 drop-shadow-[0_0_12px_rgba(74, 141, 255, 0.5)] transition-all duration-300 px-2"
                src={pndLogo}
                alt="ChEA Logo"
              />
            </motion.div>
            <div className="hidden md:flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-black tracking-[0.25em] " style={{color:'#4A8DFF'}}>ChEA</span>
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
      style={{ marginTop: "12.5px", marginBottom: "12.5px" }}
      transition={{
        delay: 0.05 + index * 0.06,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
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
                ? "bg-gradient-to-b from-[#FF7A00]/12 to-[#FF7A00]/4 border border-[#FF7A00]/20 shadow-[0_0_18px_rgba(255,122,0,0.06)]"
                : "bg-gradient-to-b from-slate-700/40 to-slate-800/20 border border-[#FF7A00]/10"
            }`}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 35,
            }}
          />
        )}

        {active && (
          <div className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-[#FFB067]/40 to-transparent rounded-full" />
        )}

        <div className="relative flex flex-col items-center gap-1">
          <motion.div
            className={`transition-all duration-300 ${
              active
                ? "text-[#FFD6AD]"
                : "text-slate-500 group-hover:text-[#FFB067]"
            }`}
            animate={active ? { scale: [1, 1.08, 1] } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.icon size={13} strokeWidth={active ? 2.5 : 1.8} />
          </motion.div>

          <span
            className={`text-[12px] font-semibold tracking-wide leading-none transition-all duration-300 ${
              active
                ? "text-[#FFE7CC]"
                : "text-slate-500 group-hover:text-[#FFB067]"
            }`}
          >
            {item.name}
          </span>

          <AnimatePresence>
            {(hovered || active) && (
              <motion.span
                className="text-[9px] font-mono text-[#FFB067]/50 leading-none"
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
            className="absolute -bottom-px left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#FFB067] shadow-[0_0_10px_rgba(255,122,0,0.45)]"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 35,
            }}
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
              <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-800/50 border border-slate-700/40"  style={{opacity:0}}>
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
className="md:hidden relative p-2.5 rounded-xl overflow-hidden border border-slate-700/40 bg-slate-800/50 text-slate-300 hover:text-[#4A8DFF] transition-colors duration-300"              whileTap={{ scale: 0.9 }}
            >
{isOpen && (
  <div className="absolute inset-0 bg-[#315D9C]/10 border border-[#315D9C]/30 rounded-xl" />
)}

<AnimatePresence mode="wait">
  {isOpen ? (
    <motion.div
      key="x"
      initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
      animate={{ rotate: 0, opacity: 1, scale: 1 }}
      exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.2 }}
    >
      <X size={18} />
    </motion.div>
  ) : (
    <motion.div
      key="menu"
      initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
      animate={{ rotate: 0, opacity: 1, scale: 1 }}
      exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.2 }}
    >
      <Menu size={18} />
    </motion.div>
  )}
</AnimatePresence>            </motion.button>
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
      style={{
        background:
          "radial-gradient(ellipse at top, rgba(49,93,156,0.05), rgba(2,6,23,0.75))",
      }}
    />

    <motion.div
      initial={{ opacity: 0, y: -16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-[66px] left-3 right-3 z-50 md:hidden rounded-2xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-slate-950/96 backdrop-blur-3xl rounded-2xl" />

      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E38]/25 via-transparent to-[#315D9C]/10 rounded-2xl" />

      <div className="absolute inset-0 rounded-2xl border border-slate-700/50" />

      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#4A8DFF]/35 to-transparent" />

      <div className="absolute top-0 left-6 right-6 h-3 bg-gradient-to-r from-transparent via-[#4A8DFF]/10 to-transparent blur-md" />

      <div className="absolute inset-[1px] rounded-2xl border border-white/[0.03]" />

      <div className="relative p-3 space-y-0.5">
        {navItems.map((item, index) => {
  const active = isActive(item.href)

  return (
    <motion.div
      key={item.name}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.04 + index * 0.05,
        duration: 0.35,
        ease: "easeOut",
      }}
    >
      <Link
        to={item.href}
        className={`group relative flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 ${
          active
            ? "bg-gradient-to-r from-[#FF7A00]/12 to-[#FF7A00]/4 border border-[#FF7A00]/20 shadow-[0_0_18px_rgba(255,122,0,0.06)]"
            : "hover:bg-slate-800/50 border border-transparent hover:border-[#FF7A00]/10"
        }`}
      >
        {active && (
          <div className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-gradient-to-b from-[#FF7A00] to-[#FFB067] shadow-[0_0_8px_rgba(255,122,0,0.45)]" />
        )}

        <div
          className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center border transition-all duration-200 ${
            active
              ? "bg-[#FF7A00]/12 border-[#FF7A00]/25 text-[#FFD6AD] shadow-[inset_0_1px_0_rgba(255,122,0,0.12)]"
              : "bg-slate-800/70 border-slate-700/40 text-slate-500 group-hover:bg-[#FF7A00]/8 group-hover:border-[#FF7A00]/15 group-hover:text-[#FFB067]"
          }`}
        >
          <item.icon size={15} strokeWidth={active ? 2.5 : 1.8} />
        </div>

        <span
          className={`flex-1 text-sm font-semibold transition-colors duration-200 ${
            active
              ? "text-[#FFE7CC]"
              : "text-slate-300 group-hover:text-[#FFD6AD]"
          }`}
        >
          {item.name}
        </span>

        <div className="flex items-center gap-2">
          <span
            className={`text-[10px] font-mono transition-colors duration-200 ${
              active
                ? "text-[#FFB067]/55"
                : "text-slate-600 group-hover:text-[#FFB067]/35"
            }`}
          >
            {item.formula}
          </span>

          {active && (
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[#FFB067]"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                boxShadow:
                  "0 0 6px 2px rgba(255,122,0,0.4)",
              }}
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
                  <span className="text-[10px] font-mono text-slate-600 tracking-widest">IITB · ChEA</span>
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