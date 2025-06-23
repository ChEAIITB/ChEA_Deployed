"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion, useMotionValue, useTransform, useInView, AnimatePresence } from "framer-motion"
import {
  FlaskRoundIcon as Flask,
  TestTube,
  Beaker,
  Atom,
  Users,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
  User,
  Crown,
  Briefcase,
  GraduationCap,
  Zap,
  Eye,
  MessageCircle,
  X,
} from "lucide-react"
import "aos/dist/aos.css"
import AOS from "aos"
import { Link } from "react-router-dom";

// Define a mapping of display label and route path
const years = [
  { label: "2025-26", path: "/contact" },
  { label: "2024-25", path: "/contact/24" },
  { label: "2023-24", path: "/contact/23" },
  { label: "2022-23", path: "/contact/22" },
  { label: "2021-22", path: "/contact/21" },
  { label: "2020-21", path: "/contact/20" },
];
// Import profile images
import AryanD from '../../assets/images/contact24/AryanD.webp'
import AryanR from '../../assets/images/contact24/AryanR.webp'
import Druv from '../../assets/images/contact24/Druv.webp'
import Khyati from '../../assets/images/contact24/Khyati.webp'
import Laksham from '../../assets/images/contact24/Laksham.webp'
import Mitanshi from '../../assets/images/contact24/Mitanshi.webp'
import Pragathi from '../../assets/images/contact24/Pragathi.webp'
import Rishav from '../../assets/images/contact24/Rishav.webp'
import Ritesh from '../../assets/images/contact24/Ritesh.webp'
import Sarthak from '../../assets/images/contact24/Sarthak.webp'
import Sinha from '../../assets/images/contact24/Sinha.webp'

// Chemical equipment for floating animations
const chemicalEquipment = [
  { size: 100, opacity: 0.08, rotation: 45, icon: Flask },
  { size: 80, opacity: 0.12, rotation: -30, icon: TestTube },
  { size: 120, opacity: 0.06, rotation: 60, icon: Beaker },
  { size: 90, opacity: 0.15, rotation: -45, icon: Atom },
]

// Chemical formulas for decorative elements
const chemicalFormulas = ["Team", "Lead", "Org", "Comm", "Mgmt", "Coord", "Admin"]

// Chemical droplets with enhanced properties
const chemicalDroplets = [
  { top: "15%", left: "10%", size: "w-6 h-6", color: "bg-emerald-400", glow: "shadow-emerald-400/50", formula: "UG" },
  { top: "35%", left: "80%", size: "w-4 h-4", color: "bg-cyan-400", glow: "shadow-cyan-400/50", formula: "PG" },
  { top: "65%", left: "15%", size: "w-5 h-5", color: "bg-violet-400", glow: "shadow-violet-400/50", formula: "PhD" },
  { top: "75%", left: "90%", size: "w-4 h-4", color: "bg-teal-400", glow: "shadow-teal-400/50", formula: "MTech" },
  { top: "25%", left: "60%", size: "w-3 h-3", color: "bg-lime-400", glow: "shadow-lime-400/50", formula: "Team" },
]

// Enhanced chemical bubbles
const chemicalBubbles = [
  {
    top: "10%",
    left: "30%",
    size: "w-8 h-8",
    color: "bg-gradient-to-br from-emerald-400 to-cyan-500",
    formula: "Council",
  },
  {
    top: "50%",
    left: "75%",
    size: "w-10 h-10",
    color: "bg-gradient-to-br from-cyan-400 to-violet-500",
    formula: "Leaders",
  },
  {
    top: "85%",
    left: "20%",
    size: "w-6 h-6",
    color: "bg-gradient-to-br from-violet-400 to-teal-500",
    formula: "ChEA",
  },
]

// Position hierarchy with chemical theming
const positionHierarchy = {
  "Department General Secretary": { level: 1, icon: Crown, color: "text-emerald-400", formula: "DGS" },
  "Joint Secretary, Industrial Outreach": { level: 2, icon: Briefcase, color: "text-cyan-400", formula: "JS-IO" },
  "Joint Secretary, Academic Affairs": { level: 2, icon: GraduationCap, color: "text-cyan-400", formula: "JS-AA" },
  "Joint Secretary, Events": { level: 2, icon: Zap, color: "text-cyan-400", formula: "JS-E" },
  "Technical Secretary": { level: 3, icon: Flask, color: "text-violet-400", formula: "TS" },
  "Social Secretary": { level: 3, icon: Users, color: "text-violet-400", formula: "SS" },
  "Associate Secretary": { level: 3, icon: TestTube, color: "text-teal-400", formula: "AS" },
  Editor: { level: 3, icon: Beaker, color: "text-teal-400", formula: "ED" },
  "Design Secretary": { level: 3, icon: Atom, color: "text-teal-400", formula: "DS" },
  "Sports Secretary": { level: 3, icon: Zap, color: "text-teal-400", formula: "SpS" },
  "M. Tech Representative": { level: 4, icon: GraduationCap, color: "text-orange-400", formula: "MTR" },
  "PhD Representative": { level: 4, icon: Crown, color: "text-orange-400", formula: "PhDR" },
}

// UG Council Data
const ugData = [
  {
    "name": "Rishabh Agrawal",
    "image": Rishav,
    "position": "Department General Secretary",
    "phone": "9983295518",
    "email": "dgsec@che.iitb.ac.in",
    "facebook": "https://www.facebook.com/rishabh.agrawal.3194524/",
    "instagram": "https://www.instagram.com/rsbh2199/",
    "linkedin": "https://www.linkedin.com/in/rishabh-agrawal-0a98a3157/"
  },
  {
    "name": "Aryan Dangayach",
    "image": AryanD,
    "position": "Joint Secretary Academic Affairs",
    "phone": "9694126924,6377104366",
    "email": "aryankhandelwal418@gmail.com",
    "facebook": "https://m.facebook.com/aryan.dangayach.3",
    "instagram": "https://www.instagram.com/_the_celestial/",
    "linkedin": "https://www.linkedin.com/in/aryan-dangayach-99aa47187/"
  },
  {
    "name": "Sarthak Tripathi",
    "image": Sarthak,
    "position": "Joint Secretary Events",
    "phone": "8824799892",
    "email": "sarthaktripathi5june@gmail.com",
    "facebook": "https://www.facebook.com/sarthak.tripathi.16144",
    "instagram": "https://www.instagram.com/__sarthaktripathi__/",
    "linkedin": "https://www.linkedin.com/in/sarthak-tripathi-0400aa187/"
  },
  {
    "name": "Mitanshi Mehra",
    "image": Mitanshi,
    "position": "Social Secretary",
    "phone": "8824799892",
    "email": "mehramitanshi26@gmail.com",
    "facebook": "https://www.facebook.com/mitanshi.mehra.9",
    "instagram": "https://www.instagram.com/mehra_mitanshi26/",
    "linkedin": "https://www.linkedin.com/in/mitanshi-mehra-20010626/"
  },
  {
    "name": "Ritesh Meena",
    "image": Rishav,
    "position": "Sports Secretary",
    "phone": "8692023459",
    "email": "riteshmeena2211@gmail.com",
    "facebook": "https://m.facebook.com/ritesh.meena.7121",
    "instagram": "https://www.instagram.com/ritzmeena/"
  },
  {
    "name": "Khyati Jain",
    "image": Khyati,
    "position": "Alumni Secretary",
    "phone": "9465500286",
    "email": "khyati.jain1105@gmail.com",
    "facebook": "https://www.facebook.com/khyati.jain.71653/",
    "instagram": "https://www.instagram.com/khyati.1105/",
    "linkedin": "https://www.linkedin.com/in/khyati-jain-9438241a0/"
  },
  {
    "name": "Dhruv Patwa",
    "image": Druv,
    "position": "Editor",
    "phone": "8890789269",
    "email": "patwadhruv@gmail.com",
    "facebook": "https://www.facebook.com/dhruv.patwa.5",
    "instagram": "https://www.instagram.com/patwa.dhruv/",
    "linkedin": "https://www.linkedin.com/in/dhruv-patwa-69b5b5149/"
  },
  {
    "name": "Laxman Desai",
    "image": Laksham,
    "position": "Design Secretary",
    "phone": "8208078914",
    "email": "desai.laxman2001@gmail.com"
  },
  {
    "name": "Shambhavi Sinha",
    "image": Sinha,
    "position": "Web Secretary",
    "phone": "7043754962",
    "email": "190020103@iitb.ac.in"
  },
  {
    "name": "Aryan Raj Himanshu",
    "image": AryanR,
    "position": "S1 Class Representative",
    "phone": "7777023377",
    "facebook": "https://m.facebook.com/people/Aryan-Raj-Himanshu/100039404290875",
    "linkedin": "https://www.linkedin.com/in/aryan-raj-himanshu-5a6a4918b/"
  },
  {
    "name": "Pragathi Anand",
    "image": Pragathi,
    "position": "S2 Class Representative",
    "phone": "6204544899",
    "email": "190020084@iitb.ac.in",
    "facebook": "https://www.facebook.com/pragati.anand.942"
  }
]

export default function Contact() {
  const [selectedMember, setSelectedMember] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const x = useTransform(mouseX, (x) => (x - window.innerWidth / 2) * 0.01)
  const y = useTransform(mouseY, (y) => (y - window.innerHeight / 2) * 0.01)

  useEffect(() => {
    AOS.init({ duration: 1000 })
    AOS.refresh()
  }, [])

  const handleMouseMove = useCallback(
    (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    },
    [mouseX, mouseY],
  )

  const getTransform = useCallback(
    (mult = 0.01) => {
      return { x, y }
    },
    [x, y],
  )

  const openMemberModal = useCallback((member) => {
    setSelectedMember(member)
    setModalOpen(true)
  }, [])

  const closeMemberModal = useCallback(() => {
    setModalOpen(false)
    setSelectedMember(null)
  }, [])

  // Chemical particle animation
  const renderChemicalParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.1, 0.6, 0.1],
            scale: [0.5, 1.2, 0.5],
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
  const renderFloatingEquipment = () =>
    chemicalEquipment.map((equipment, i) => (
      <motion.div
        key={i}
        className="absolute pointer-events-none"
        style={{
          width: equipment.size,
          height: equipment.size,
          opacity: equipment.opacity,
          left: `${15 + i * 20}%`,
          top: `${10 + i * 15}%`,
          ...getTransform(0.02 + i * 0.01),
        }}
        animate={{
          rotate: [0, equipment.rotation, -equipment.rotation, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8 + i * 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <equipment.icon size={equipment.size / 3} className="text-emerald-400/30" />
      </motion.div>
    ))

  // Chemical formulas decoration
  const renderChemicalFormulas = (side) => (
    <div className={`absolute ${side}-6 top-0 bottom-0 flex flex-col justify-around z-0 pointer-events-none`}>
      {chemicalFormulas.map((formula, i) => (
        <motion.div
          key={i}
          className="text-emerald-300/40 text-lg font-mono font-bold"
          style={{ marginTop: `${i * 12}vh` }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {formula}
        </motion.div>
      ))}
    </div>
  )

  // Enhanced member card with chemical theme and optimized hover
  const ChemicalMemberCard = ({ member, index, isUG = true }) => {
    const [isHovered, setIsHovered] = useState(false)

    const positionData = positionHierarchy[member.position] || {
      level: 4,
      icon: User,
      color: "text-gray-400",
      formula: "MEM",
    }

    return (
      <motion.div
        className="group relative"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 transition-all duration-300 overflow-hidden min-h-[400px]"
          animate={{
            scale: isHovered ? 1.02 : 1,
            borderColor: isHovered ? "rgba(16, 185, 129, 0.3)" : "rgba(71, 85, 105, 0.5)",
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Chemical Reaction Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-cyan-400/5"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Position Icon */}
          <motion.div
            className="absolute top-4 right-4"
            animate={{ opacity: isHovered ? 0.6 : 0.2 }}
            transition={{ duration: 0.3 }}
          >
            <positionData.icon size={24} className={positionData.color} />
          </motion.div>

          {/* Chemical Formula */}
          <motion.div
            className="absolute top-2 left-2 text-xs font-mono text-emerald-400/40"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            {positionData.formula}
          </motion.div>

          {/* Member Photo */}
          <div className="relative mb-4 overflow-hidden rounded-lg">
            <div className="aspect-square w-full bg-slate-700/30 rounded-lg overflow-hidden">
              <motion.img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-full object-cover cursor-pointer"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => openMemberModal(member)}
              />
            </div>

            {/* Photo Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end justify-center pb-4"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                onClick={() => openMemberModal(member)}
                className="bg-emerald-400/20 backdrop-blur-sm px-3 py-1 rounded-full text-emerald-400 border border-emerald-400/30 flex items-center gap-2 text-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={14} />
                View Profile
              </motion.button>
            </motion.div>

            {/* Level Badge */}
            <div className="absolute top-2 left-2 bg-emerald-400/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-emerald-400 border border-emerald-400/30">
              Level {positionData.level}
            </div>
          </div>

          {/* Member Info */}
          <div className="relative z-10 space-y-3">
            <motion.h3
              className="text-lg font-bold transition-colors duration-300"
              animate={{ color: isHovered ? "#10b981" : "#ffffff" }}
            >
              {member.name}
            </motion.h3>

            <motion.p
              className="text-sm font-semibold transition-colors duration-300"
              animate={{ color: isHovered ? "#22d3ee" : "#06b6d4" }}
            >
              {member.position}
            </motion.p>

            {member.specialty && (
              <motion.p
                className="text-xs transition-colors duration-300"
                animate={{ color: isHovered ? "#9ca3af" : "#6b7280" }}
              >
                {member.specialty}
              </motion.p>
            )}

            {/* Contact Info */}
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-emerald-400" />
                <span>{member.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={12} className="text-cyan-400" />
                <span className="truncate">{member.email}</span>
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              className="flex gap-2 pt-2"
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              {member.instagram && (
                <motion.a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-pink-400/20 hover:bg-pink-400/30 rounded-lg text-pink-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram size={14} />
                </motion.a>
              )}
              {member.linkedin && (
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-400/20 hover:bg-blue-400/30 rounded-lg text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={14} />
                </motion.a>
              )}
              {member.facebook && (
                <motion.a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg text-blue-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook size={14} />
                </motion.a>
              )}
            </motion.div>
          </div>

          {/* Chemical Reaction Indicator */}
          <motion.div
            className="absolute bottom-2 left-1/2 w-2 h-2 bg-emerald-400 rounded-full"
            style={{ x: "-50%" }}
            animate={{
              scale: isHovered ? [0, 1, 0] : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
              opacity: { duration: 0.3 },
            }}
          />
        </motion.div>
      </motion.div>
    )
  }

  // Member Modal Component
  const MemberModal = () => (
    <AnimatePresence>
      {modalOpen && selectedMember && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeMemberModal}
        >
          <motion.div
            className="relative max-w-2xl w-full bg-slate-900/90 backdrop-blur-sm rounded-2xl border border-emerald-400/30 overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedMember.image || "/placeholder.svg"}
                    alt={selectedMember.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-emerald-400/30"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-emerald-400">{selectedMember.name}</h3>
                    <p className="text-cyan-400 font-semibold">{selectedMember.position}</p>
                    {selectedMember.specialty && <p className="text-sm text-gray-400">{selectedMember.specialty}</p>}
                  </div>
                </div>
                <button
                  onClick={closeMemberModal}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-emerald-400 flex items-center gap-2">
                  <MessageCircle size={20} />
                  Contact Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                    <Phone size={16} className="text-emerald-400" />
                    <div>
                      <p className="text-xs text-gray-400">Phone</p>
                      <p className="text-white">{selectedMember.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                    <Mail size={16} className="text-cyan-400" />
                    <div>
                      <p className="text-xs text-gray-400">Email</p>
                      <p className="text-white text-sm">{selectedMember.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-emerald-400">Social Media</h4>
                <div className="flex gap-4">
                  {selectedMember.instagram && (
                    <motion.a
                      href={selectedMember.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-pink-400/20 hover:bg-pink-400/30 rounded-lg text-pink-400 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Instagram size={16} />
                      Instagram
                    </motion.a>
                  )}
                  {selectedMember.linkedin && (
                    <motion.a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-400/20 hover:bg-blue-400/30 rounded-lg text-blue-400 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </motion.a>
                  )}
                  {selectedMember.facebook && (
                    <motion.a
                      href={selectedMember.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg text-blue-600 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Facebook size={16} />
                      Facebook
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className="overflow-hidden">
      <div className="relative bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950 text-white min-h-screen">
        {/* Chemical Particles Background */}
        {renderChemicalParticles()}

        {/* Floating Chemical Equipment */}
        {renderFloatingEquipment()}

        {/* Chemical Formulas */}
        {renderChemicalFormulas("left")}
        {renderChemicalFormulas("right")}

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
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {/* Chemical Formula Label */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-mono text-emerald-400/60">
              {droplet.formula}
            </div>
          </motion.div>
        ))}

        {/* Chemical Bubbles */}
        {chemicalBubbles.map((bubble, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${bubble.size} ${bubble.color} opacity-40 shadow-lg`}
            style={{
              top: bubble.top,
              left: bubble.left,
              ...getTransform(0.04),
            }}
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {/* Chemical Formula */}
            <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-white/80">
              {bubble.formula}
            </div>
          </motion.div>
        ))}

        {/* Main Content */}
        <section className="relative z-10 px-6 lg:px-16 py-20">
          {/* Header with Chemical Theme */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Users size={40} className="text-emerald-400" />
              </motion.div>
              <h1 className="text-5xl lg:text-6xl font-black">
                ChEA{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  COUNCIL
                </span>
              </h1>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Crown size={40} className="text-cyan-400" />
              </motion.div>
            </div>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Meet the dedicated leaders driving innovation and excellence in Chemical Engineering
            </p>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
  {years.map(({ label, path }, index) => (
    <Link to={path} key={label}>
      <motion.button
        className={`px-4 py-2 rounded-lg border transition-colors duration-300 text-sm ${
          index === 0
            ? "bg-emerald-400/20 hover:bg-emerald-400/30 text-emerald-400 border-emerald-400/30"
            : "bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 border-slate-600/50"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {label}
      </motion.button>
    </Link>
  ))}
</div>

            {/* Chemical Equipment Decoration */}
            <div className="flex justify-center items-center gap-6 opacity-60">
              <Crown size={24} className="text-emerald-400" />
              <Users size={24} className="text-cyan-400" />
              <Briefcase size={24} className="text-violet-400" />
              <GraduationCap size={24} className="text-teal-400" />
            </div>
          </motion.div>

          {/* UG Council Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-12">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <GraduationCap size={32} className="text-emerald-400" />
              </motion.div>
              <h2 className="text-4xl font-bold">
                UG <span className="text-emerald-400">Council</span>
              </h2>
              <motion.div
                className="text-sm font-mono text-emerald-400/60"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                UG₂0
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {ugData.map((member, index) => (
                <ChemicalMemberCard key={index} member={member} index={index} isUG={true} />
              ))}
            </div>
          </motion.div>

          {/* Chemical Divider */}
          <div className="flex justify-center mb-20">
            <motion.div
              className="w-32 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent relative"
              initial={{ width: 0 }}
              animate={isInView ? { width: 128 } : {}}
              transition={{ delay: 1, duration: 1 }}
            >
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Zap size={16} className="text-emerald-400" />
              </motion.div>
            </motion.div>
          </div>

          {/* PG Council Section */}
          {/* <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-12">
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Crown size={32} className="text-orange-400" />
              </motion.div>
              <h2 className="text-4xl font-bold">
                PG <span className="text-orange-400">Council</span>
              </h2>
              <motion.div
                className="text-sm font-mono text-orange-400/60"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                PG₂₅
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {pgData.map((member, index) => (
                <ChemicalMemberCard key={index} member={member} index={index} isUG={false} />
              ))}
            </div>
          </motion.div> */}
        </section>

        {/* Member Modal */}
        <MemberModal />
      </div>
    </div>
  )
}
