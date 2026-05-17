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


  return (
    <footer
    ref={ref}
    style={{height:'400px', background:'#0b1e38', borderTop:'1px solid #122b51'}}
    className="relative text-white py-16 px-4 overflow-hidden"
    >
    {/* <div style={{color:'#adcbff}}' /> */}
      <div className="absolute top-0 left-0 right-0 h-px" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mb-16"
        >
        </motion.div>
        <motion.div
          className="text-center flex flex-col items-center"
          style={{marginTop:'-80px'}}
        >
          <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
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
                />
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex justify-center items-center gap-4 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <TestTube size={16} className="text-cyan-400" />
                <Beaker size={16} className="text-violet-400" />
                <Atom size={16} className="text-teal-400" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
<div className="flex justify-center mb-8" style={{paddingTop:'30px'}}>
          <motion.div
            className="w-32 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent relative"
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
      <motion.div
          className="flex justify-center space-x-4 mb-12"
        >
          {socialIcons.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 ${item.color} ${item.bgColor} transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 to-cyan-400/0 group-hover:from-emerald-400/10 group-hover:to-cyan-400/10 rounded-xl transition-all duration-300" />

              <item.icon size={24} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute -top-2 -right-2 text-xs font-mono text-emerald-400/60 bg-slate-900/80 px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.formula}
              </div>
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                animate={{
                  boxShadow: [
                    // "0 0 0 0 rgba(74,141,255,0)",
                    // "0 0 0 10px rgba(74,141,255,0.22)",
                    // "0 0 0 0 rgba(74,141,255,0)",
                  ],
                }}
                // transition={{
                //   duration: 1,
                //   repeat: Number.POSITIVE_INFINITY,
                //   // ease: "easeInOut",
                // }}
              />
            </motion.a>
          ))}
        </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
    </footer>
  )
}
