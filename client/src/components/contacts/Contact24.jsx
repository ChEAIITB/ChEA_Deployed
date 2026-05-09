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
import mdsaud from '../../assets/images/contact25/mdsaud.jpg';

import Prehas from '../../assets/images/contact25/Prehas.jpg';
import Abhinav from '../../assets/images/contact2024/Abhinav.jpg';
import Agrim from '../../assets/images/contact2024/Agrim.jpg';
import Amrit from '../../assets/images/contact2024/Amrit.jpeg';
import Anvita from '../../assets/images/contact2024/Anvita.jpg';
import Damodar from '../../assets/images/contact2024/Damodar.jpg';
import Harry from '../../assets/images/contact2024/Harry.jpeg';
import Harsh from '../../assets/images/contact2024/Harsh.jpg';
import Maitri from '../../assets/images/contact2024/Maitri.jpg';
import Minal from '../../assets/images/contact2024/Minal.jpg';
import Pratiksh from '../../assets/images/contact2024/Pratiksh.jpg';

import Shreya from '../../assets/images/contact2024/Shreya.jpg';
import Sneha from '../../assets/images/contact2024/Sneha.jpg';
import Steve from '../../assets/images/contact2024/Steve.jpg';
import Ayush from '../../assets/images/contact2024/Ayush.png';




// Chemical equipment for floating animations
const chemicalEquipment = [
]

// Chemical formulas for decorative elements
const chemicalFormulas = ["Team", "Lead", "Org", "Comm", "Mgmt", "Coord", "Admin"]

// Chemical droplets with enhanced properties
const chemicalDroplets = [
]

// Enhanced chemical bubbles
const chemicalBubbles = [
 
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
    "name": "Amrit Raj",
    "image": Amrit,
    "position": "Department General Secretary",
    "phone": "7545855055, 8529756127",
    "email": "dgsec@che.iitb.ac.in",
    "facebook": "https://www.facebook.com/profile.php?id=100091401824609&mibextid=ZbWKwL",
    "instagram": "https://instagram.com/amritraj4440?igshid=MzNlNGNkZWQ4Mg==",
    "linkedin": "https://www.linkedin.com/in/amrit-raj-b2037a228"
  },
  {
    "name": "Steve Austin Samuel",
    "image": Steve,
    "position": "Joint Secretary Events",
    "phone": "9600082807",
    "email": "steveaustinsamuel@gmail.com",
    "facebook": "https://www.facebook.com/steve.austin.samuel?mibextid=ZbWKwL",
    "instagram": "https://instagram.com/mainhoonsteve?igshid=NGExMmI2YTkyZg==",
    "linkedin": "https://www.linkedin.com/in/steve-austin-samuel-a2a8b6155"
  },
  {
    "name": "Pratiksha Kapoor",
    "image": Pratiksh,
    "position": "Joint Secretary Industrial Outreach",
    "phone": "9152929329, 8605661520",
    "email": "pratiksha.kapoor@iitb.ac.in",
    "instagram": "https://www.instagram.com/pratikshakapoor89/",
    "linkedin": "https://www.linkedin.com/in/pratiksha-kapoor-66b384250/"
  },
  {
    "name": "Maitreyee Tengshe",
    "image": Maitri,
    "position": "Joint Secretary Academic Affairs",
    "phone": "7030909443",
    "email": "22b0318@iitb.ac.in",
    "facebook": "https://www.facebook.com/profile.php?id=100089717880314&mibextid=ZbWKwL",
    "instagram": "https://www.instagram.com/maitreyee_.38?r=nametag",
    "linkedin": "https://www.linkedin.com/in/maitreyee-tengshe-810812252"
  },
  {
    "name": "Abhinav Kumar",
    "image": Abhinav,
    "position": "Associate Secretary",
    "phone": "6201395251",
    "email": "abhinavkrrr@gmail.com",
    "instagram": "https://www.instagram.com/pablo_chocobar.cpp?igsh=c2FvZHJuaHY2MnZz",
    "linkedin": "https://www.linkedin.com/in/abhinav-kumar-499004280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "name": "Shubham Kumar",
    "image": Harry,
    "position": "Associate Secretary",
    "phone": "8541873913",
    "email": "shubhamherry.iitb@gmail.com",
    "instagram": "https://www.instagram.com/shubham_herry/",
    "linkedin": "https://www.linkedin.com/in/shubham-kumar-iitb/"
  },
  {
    "name": "Ayush Tayal",
    "image": Ayush,
    "position": "Social Secretary",
    "phone": "8171548721",
    "email": "tayalayush03@gmail.com",
    "facebook": "https://www.facebook.com/ayush.tayal.9?mibextid=ZbWKwL",
    "instagram": "https://www.instagram.com/its_tayalayush?igsh=b3hucTV5Mnpkd2x2",
    "linkedin": "https://www.linkedin.com/in/tayalayush03?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "name": "Agrim Jain",
    "image": Agrim,
    "position": "Sports Secretary",
    "phone": "9045839776",
    "email": "agrimj2712@gmail.com",
    "facebook": "https://www.facebook.com/profile.php?id=100084896567870",
    "instagram": "https://www.instagram.com/agrimj2712/",
    "linkedin": "https://www.linkedin.com/in/agrim-jain-934226230/"
  },
  {
    "name": "Damodar Pendse",
    "image": Damodar,
    "position": "Alumni Secretary",
    "phone": "7350644940",
    "email": "23b0429@iitb.ac.in",
    "facebook": "https://www.facebook.com/profile.php?id=61561073463381",
    "instagram": "https://www.instagram.com/damitssme/",
    "linkedin": "https://www.linkedin.com/in/damodar-pendse/"
  },
  {
    "name": "Shreya Pingle",
    "image": Shreya,
    "position": "Editor",
    "phone": "8999965946",
    "email": "aabha1006@gmail.com",
    "instagram": "https://www.instagram.com/shreya_pingle2303?igsh=MW11MzJ6bHZmdzNrdA%3D%3D&utm_source=qr",
    "linkedin": "https://www.linkedin.com/in/shreya-pingle-20442124b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    "name": "Anvitaa Goel",
    "image": Anvita,
    "position": "Design Secretary",
    "phone": "8860751667",
    "email": "goelanvitaa@gmail.com",
    "instagram": "https://www.instagram.com/anvitaagoel?igsh=ZTByd2Eyb3I1dHl4",
    "linkedin": "http://www.linkedin.com/in/anvitaa-goel-b4817631a"
  },
  {
    "name": "Sneha Shandilya",
    "image": Sneha,
    "position": "Web Secretary",
    "phone": "7665246878",
    "email": "23b0345@iitb.ac.in",
    "instagram": "https://www.instagram.com/snehashandilya09/",
    "linkedin": "https://www.linkedin.com/in/shandilyasneha09/"
  },
  {
    "name": "Harsh Jadhav",
    "image": Harsh,
    "position": "S1 Class Representative",
    "phone": "8369526409",
    "email": "23b0301@iitb.ac.in",
    "instagram": "https://www.instagram.com/hharshh.27?igsh=OXl0eTR6c2hucnR2&utm_source=qr",
    "linkedin": "https://www.linkedin.com/in/harsh-jadhav-1qw12?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    "name": "Minal Bhojasia",
    "image": Minal,
    "position": "S2 Class Representative",
    "phone": "9113801656",
    "email": "23b0404@iitb.ac.in",
    "instagram": "https://www.instagram.com/minal.bhojasia/",
    "linkedin": "https://www.linkedin.com/in/minal-bhojasia-346ba9281/"
  },
  
]

const pgData = [
  {
    "name": "Mohammed Saud Shaikh",
    "image":mdsaud,
    "position": "M. Tech Representative",
    "phone": "9930247998",
    "email": "sauddjhs@gmail.com",
    "linkedin": "https://www.linkedin.com/in/mohammedsaud786/"
  },
  {
    "name": "Prehas Madke",
    "image":Prehas,
    "position": "PhD Representative",
    "phone": "9834706856",
    "email": "23D0125@iitb.ac.in",
    "instagram": "https://www.instagram.com/prehasmadke/",
    "linkedin": "https://www.linkedin.com/in/prehasmadke"
  }

]

export default function Contact() {
  const [selectedMember, setSelectedMember] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [currentYear, updateYear] = useState(0);
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 transition-all duration-300 overflow-hidden min-h-[400px]"
          animate={{
            // scale: isHovered ? 1.02 : 1,
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
          {/* <motion.div
            className="absolute top-4 right-4"
            animate={{ opacity: isHovered ? 0.6 : 0.2 }}
            transition={{ duration: 0.3 }}
          >
            <positionData.icon size={24} className={positionData.color} />
          </motion.div> */}

          {/* Chemical Formula */}
          {/* <motion.div
            className="absolute top-2 left-2 text-xs font-mono text-emerald-400/40"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            {positionData.formula}
          </motion.div> */}

          {/* Member Photo */}
          <div className="relative mb-4 overflow-hidden rounded-lg">
            <div className="aspect-square w-full bg-slate-700/30 rounded-lg overflow-hidden">
              <motion.img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-full h-full object-cover cursor-pointer"
                animate={{ scale: isHovered ? 1.02 : 1 }}
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
                style={{"cursor":"pointer"}}
                className="bg-emerald-400/20 backdrop-blur-sm px-3 py-1 rounded-full text-emerald-400 border border-emerald-400/30 flex items-center gap-2 text-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={14} />
                View Profile
              </motion.button>
            </motion.div>

            {/* Level Badge */}
            {/* <div className="absolute top-2 left-2 bg-emerald-400/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-emerald-400 border border-emerald-400/30">
              Level {positionData.level}
            </div> */}
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
                  style={{"cursor":"pointer"}}
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
                      whileHover={{ scale: 1.02 }}
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
                      whileHover={{ scale: 1.02 }}
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
                      whileHover={{ scale: 1.02 }}
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
    <div ref={ref} className="overflow-hidden">
      <div className="relative bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950 text-white min-h-screen">
        {/* Chemical Particles Background */}
        {/* {renderChemicalParticles()} */}

        {/* Floating Chemical Equipment */}
        {/* {renderFloatingEquipment()} */}

        {/* Chemical Formulas */}
        {/* {renderChemicalFormulas("left")}
        {renderChemicalFormulas("right")} */}

        {/* Chemical Droplets */}
        {/* {chemicalDroplets.map((droplet, i) => (
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
          > */}
            {/* Chemical Formula Label */}
            {/* <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-mono text-emerald-400/60">
              {droplet.formula}
            </div>
          </motion.div>
        ))} */}

        {/* Chemical Bubbles */}
        {/* {chemicalBubbles.map((bubble, i) => (
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
            {/* <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-white/80">
              {bubble.formula}
            </div>
          </motion.div>
        ))}  */}

        {/* Main Content */}
        <section className="relative z-10 px-6 lg:px-16 py-40">
          {/* Header with Chemical Theme */}
          <motion.div
            className="text-center mb-16"
            // initial={{ opacity: 0, y: -50 }}
            // animate={isInView ? { opacity: 1, y: 0 } : {}}
            // transition={{ duration: 0.8 }}
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
      style={{"cursor":"pointer"}}
        className={`px-4 py-2 rounded-lg border transition-colors duration-300 text-sm ${
          index === 1
            ? "bg-emerald-400/20 hover:bg-emerald-400/30 text-emerald-400 border-emerald-400/30"
            : "bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 border-slate-600/50"
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
      >
        {label}
      </motion.button>
    </Link>
  ))}
</div>

            {/* Chemical Equipment Decoration */}
            {/* <div className="flex justify-center items-center gap-6 opacity-60">
              <Crown size={24} className="text-emerald-400" />
              <Users size={24} className="text-cyan-400" />
              <Briefcase size={24} className="text-violet-400" />
              <GraduationCap size={24} className="text-teal-400" />
            </div> */}
          </motion.div>

          {/* UG Council Section */}
          <motion.div
            className="mb-20 py-10"
            initial={{ opacity: 0,}}
            animate={isInView ? { opacity: 1} : {}}
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
              {/* <motion.div
                className="text-sm font-mono text-emerald-400/60"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                UG₂₅
              </motion.div> */}
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
          <motion.div
            initial={{ opacity: 0,}}
            animate={isInView ? { opacity: 1} : {}}
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {pgData.map((member, index) => (
                <ChemicalMemberCard key={index} member={member} index={index} isUG={false} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Member Modal */}
        <MemberModal />
      </div>
    </div>
  )
}
