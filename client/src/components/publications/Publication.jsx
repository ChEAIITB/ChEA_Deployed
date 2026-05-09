"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion, useMotionValue, useTransform, useInView, AnimatePresence } from "framer-motion"
import {
  FlaskRoundIcon as Flask,
  TestTube,
  Beaker,
  Atom,
  Droplets,
  BookOpen,
  Download,
  Eye,
  ChevronDown,
  Microscope,
  Dna,
  X,
  Calendar,
  FileText,
  ExternalLink,
} from "lucide-react"
import "aos/dist/aos.css"
import AOS from "aos"

// Import all publication images
import Alum_Oracle24 from "../../assets/images/publications/Alum_Oracle24.jpg"
import ao21 from "../../assets/images/publications/ao21.webp"
import cg17 from "../../assets/images/publications/cg17.webp"
import cg18 from "../../assets/images/publications/cg18.webp"
import cg19 from "../../assets/images/publications/cg19.webp"
import cg20 from "../../assets/images/publications/cg20.webp"
import cg2021 from "../../assets/images/publications/cg2021.webp"
import fn21 from "../../assets/images/publications/fn21.webp"
import fn19 from "../../assets/images/publications/fn19.webp"
import image21 from "../../assets/images/publications/image21.webp"
import image22 from "../../assets/images/publications/image22.webp"
import gazette25 from "../../assets/images/publications/gazette25.png"
import fn20 from "../../assets/images/publications/fn20.jpg"
import fn23 from "../../assets/images/publications/fn23.jpg"
import cv from "../../assets/images/publications/cv.jpg"
import ChEA_voice24 from "../../assets/images/publications/ChEA_voice24.jpg"
import ChEA_handbook24 from "../../assets/images/publications/ChEA_handbook24.png"
import chemical from "../../assets/images/publications/cg23.png"
import cg24 from "../../assets/images/publications/cg24.png"
import cheavoice from "../../assets/images/publications/chea_voice_2025.png"
import cheahandbook from "../../assets/images/publications/chea_handbook25.jpg"


// Chemical equipment for floating animations
const chemicalEquipment = [
  { size: 120, opacity: 0.08, rotation: 45, icon: Flask },
  { size: 100, opacity: 0.12, rotation: -30, icon: TestTube },
  { size: 140, opacity: 0.06, rotation: 60, icon: Beaker },
  { size: 80, opacity: 0.15, rotation: -45, icon: Atom },
]

// Chemical formulas to replace plus signs
const chemicalFormulas = []

// Floating chemical droplets with different colors
const chemicalDroplets = [
  { top: "15%", left: "10%", size: "w-6 h-6", color: "bg-emerald-400", glow: "shadow-emerald-400/50"},
  { top: "35%", left: "80%", size: "w-4 h-4", color: "bg-cyan-400", glow: "shadow-cyan-400/50"},
  { top: "65%", left: "15%", size: "w-5 h-5", color: "bg-violet-400", glow: "shadow-violet-400/50"},
  { top: "75%", left: "90%", size: "w-4 h-4", color: "bg-teal-400", glow: "shadow-teal-400/50"},
  { top: "25%", left: "60%", size: "w-3 h-3", color: "bg-lime-400", glow: "shadow-lime-400/50"},
]

// Larger chemical bubbles
const chemicalBubbles = [
  {
    top: "10%",
    left: "30%",
    size: "w-8 h-8",
    color: "bg-gradient-to-br from-emerald-400 to-cyan-500",
    
  },
  {
    top: "50%",
    left: "75%",
    size: "w-10 h-10",
    color: "bg-gradient-to-br from-cyan-400 to-violet-500",
    
  },
  {
    top: "85%",
    left: "20%",
    size: "w-6 h-6",
    color: "bg-gradient-to-br from-violet-400 to-teal-500",
   
  },
]

// Publication data with enhanced metadata
const publicationData = {
  2025: {
    title: "Latest Research",
    icon: Flask,
    color: "text-emerald-400",
    bgColor: "from-emerald-950/20",
    
    data: [
      // {
      //   id: "cg24",
      //   name: "Chemical Gazette 2024",
      //   image: cg24,
      //   url: "https://drive.google.com/file/d/1lfb-LiRb9J3I8TSdONUlhcO9v50ceYV8/view?usp=sharing",
      //   type: "Research Paper",
      //   pages: 12,
      //   description:
      //     "Annual research compilation featuring cutting-edge chemical engineering innovations and breakthroughs.",
      //   publishDate: "December 2024",
      //   category: "Research",
      // },
      {
        id: "chemicalgazette",
        name: "Chemical Gazette 2025",
        image: gazette25,
        url: "https://drive.google.com/file/d/1Chjcs59yPTRr7yM7IQ1r26GgsdFDng1b/view?usp=sharing",
        type: "Research Paper",
        pages: 10,
        description:
          "A comprehensive annual chronicle of IIT Bombay’s chemical engineering legacy, pioneering departmental research, and global student achievements.",
        publishDate: "May 2026",
        category: "Research",
      },
      {
        id: "handbook24",
        name: "ChEA Handbook 2025",
        image: cheahandbook,
        url: "https://drive.google.com/file/d/1nf5ltIQwkLZGsvB8S2XlylvOyf9aQb3R/view",
        type: "Handbook",
        pages: 37,
        description:
          "Comprehensive guide for chemical engineering students covering academic policies, procedures, and resources.",
        publishDate: "August 2025",
        category: "Academic",
      },
      {
        id: "voice24",
        name: "ChEA Voice 2025",
        image: cheavoice,
        url: "https://drive.google.com/file/d/1VxF446lQXywyuFZeRH_5cme_DZ6cfj0O/view",
        type: "Newsletter",
        pages: 4,
        description:
          "Student newsletter highlighting achievements, events, and departmental updates throughout the year.",
        publishDate: "November 2025",
        category: "Newsletter",
      },
      // {
      //   id: "oracle24",
      //   name: "Alum Oracle 2024",
      //   image: Alum_Oracle24,
      //   url: "https://drive.google.com/file/d/1968eL3oUEAJ5oMToeAiojZSwIesJtVXO/view?usp=sharing",
      //   type: "Alumni Magazine",
      //   pages: 8,
      //   description: "Alumni magazine featuring success stories, industry insights, and networking opportunities.",
      //   publishDate: "October 2024",
      //   category: "Alumni",
      // },
    ],
  },
  2024: {
    title: "Latest Research",
    icon: Flask,
    color: "text-emerald-400",
    bgColor: "from-emerald-950/20",
    
    data: [
      {
        id: "cg24",
        name: "Chemical Gazette 2024",
        image: cg24,
        url: "https://drive.google.com/file/d/1lfb-LiRb9J3I8TSdONUlhcO9v50ceYV8/view?usp=sharing",
        type: "Research Paper",
        pages: 12,
        description:
          "Annual research compilation featuring cutting-edge chemical engineering innovations and breakthroughs.",
        publishDate: "December 2024",
        category: "Research",
      },
      {
        id: "handbook24",
        name: "ChEA Handbook 2024",
        image: ChEA_handbook24,
        url: "https://drive.google.com/file/d/1zGpb7ZhaAtq2pSTOLnfN6EEDVgfDhAm6/view",
        type: "Handbook",
        pages: 37,
        description:
          "Comprehensive guide for chemical engineering students covering academic policies, procedures, and resources.",
        publishDate: "August 2024",
        category: "Academic",
      },
      {
        id: "voice24",
        name: "ChEA Voice 2024",
        image: ChEA_voice24,
        url: "https://drive.google.com/file/d/1y99FyM0GauPPu30tp3rTHo5a6r8lvP7E/view?usp=sharing",
        type: "Newsletter",
        pages: 4,
        description:
          "Student newsletter highlighting achievements, events, and departmental updates throughout the year.",
        publishDate: "November 2024",
        category: "Newsletter",
      },
      {
        id: "oracle24",
        name: "Alum Oracle 2024",
        image: Alum_Oracle24,
        url: "https://drive.google.com/file/d/1968eL3oUEAJ5oMToeAiojZSwIesJtVXO/view?usp=sharing",
        type: "Alumni Magazine",
        pages: 8,
        description: "Alumni magazine featuring success stories, industry insights, and networking opportunities.",
        publishDate: "October 2024",
        category: "Alumni",
      },
    ],
  },
  2023: {
    title: "Innovation Archive",
    icon: TestTube,
    color: "text-cyan-400",
    bgColor: "from-cyan-950/20",
    
    data: [
      {
        id: "voice23",
        name: "ChEA Voice 2023",
        image: fn23,
        url: "https://drive.google.com/file/d/1ABoS3L2gUuKREgSA_GvwtpGduzIiXJLh/view?usp=sharing",
        type: "Newsletter",
        pages: 4,
        description: "Annual newsletter showcasing student achievements and departmental highlights.",
        publishDate: "December 2023",
        category: "Newsletter",
      },
      {
        id: "gazette23",
        name: "Chemical Gazette 2023",
        image: chemical,
        url: "https://drive.google.com/file/d/1K51Nhnj-ifyw3-ifBwwS6hVeskVMPMtW/view?usp=sharing",
        type: "Research Paper",
        pages: 12,
        description: "Research compilation featuring innovative chemical engineering solutions and methodologies.",
        publishDate: "November 2023",
        category: "Research",
      },
    ],
  },
  2022: {
    title: "Discovery Collection",
    icon: Beaker,
    color: "text-violet-400",
    bgColor: "from-violet-950/20",
    
    data: [
      {
        id: "oracle22",
        name: "Alum Oracle 2022",
        image: image21,
        url: "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_3d318cd05cac446e98cf4b8e784f0744.pdf",
        type: "Alumni Magazine",
        pages: 6,
        description:
          "Alumni magazine celebrating achievements and fostering connections within the chemical engineering community.",
        publishDate: "October 2022",
        category: "Alumni",
      },
      {
        id: "oracle22dark",
        name: "Alum Oracle Dark Edition 2022",
        image: image22,
        url: "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_c989ac4b8b4e4b308afc62dc6c0b91f7.pdf",
        type: "Special Edition",
        pages: 6,
        description: "Special dark-themed edition featuring exclusive content and premium design.",
        publishDate: "December 2022",
        category: "Special",
      },
      {
        id: "voice22",
        name: "ChEA Voice 2022",
        image: cv,
        url: "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_bd7e7d46fdda44e5bc7cc843b72fcdcd.pdf",
        type: "Newsletter",
        pages: 4,
        description: "Student newsletter documenting academic year highlights and achievements.",
        publishDate: "November 2022",
        category: "Newsletter",
      },
    ],
  },
  2021: {
    title: "Synthesis Studies",
    icon: Atom,
    color: "text-teal-400",
    bgColor: "from-teal-950/20",
    
    data: [
      {
        id: "gazette21",
        name: "Chemical Gazette 2021",
        image: cg2021,
        url: "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_33982ebd08fc4a69b986929e0b64e38e.pdf",
        type: "Research Paper",
        pages: 12,
        description: "Research publication highlighting innovative chemical engineering solutions and discoveries.",
        publishDate: "December 2021",
        category: "Research",
      },
      {
        id: "oracle21",
        name: "Alum Oracle 2021",
        image: ao21,
        url: "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_e8062dd752db457ba327e36144e649be.pdf",
        type: "Alumni Magazine",
        pages: 4,
        description: "Alumni magazine connecting graduates and sharing industry insights.",
        publishDate: "October 2021",
        category: "Alumni",
      },
      {
        id: "voice21",
        name: "ChEA Voice 2021",
        image: fn21,
        url: "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_185bb007db8d453c9dc682a5c9fb59a5.pdf",
        type: "Newsletter",
        pages: 4,
        description: "Annual newsletter featuring student activities and departmental updates.",
        publishDate: "November 2021",
        category: "Newsletter",
      },
    ],
  },
  2020: {
    title: "Catalyst Chronicles",
    icon: Droplets,
    color: "text-emerald-400",
    bgColor: "from-emerald-950/20",
   
    data: [
      {
        id: "gazette20",
        name: "Chemical Gazette 2020",
        image: cg20,
        url: "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_6b4a04449c904929b2ce92b6f50b2de1.pdf",
        type: "Research Paper",
        pages: 8,
        description: "Research compilation showcasing chemical engineering innovations during challenging times.",
        publishDate: "December 2020",
        category: "Research",
      },
      {
        id: "voice20",
        name: "ChEA Voice 2020",
        image: fn20,
        url: "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_65777f8ea4b844358c53e9f8e42e2ecf.pdf",
        type: "Newsletter",
        pages: 4,
        description: "Newsletter documenting adaptations and achievements during the pandemic year.",
        publishDate: "November 2020",
        category: "Newsletter",
      },
    ],
  },
  2019: {
    title: "Molecular Insights",
    icon: Microscope,
    color: "text-cyan-400",
    bgColor: "from-cyan-950/20",
 
    data: [
      {
        id: "gazette19",
        name: "Chemical Gazette 2019",
        image: cg19,
        url: "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_deae54f32fca4d9ea018b991318ba648.pdf",
        type: "Research Paper",
        pages: 4,
        description: "Research publication featuring molecular-level insights and engineering applications.",
        publishDate: "December 2019",
        category: "Research",
      },
      {
        id: "voice19",
        name: "ChEA Voice 2019",
        image: fn19,
        url: "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_17b5cb10e973481c935c7b8943230e91.pdf",
        type: "Newsletter",
        pages: 2,
        description: "Student newsletter highlighting academic and extracurricular achievements.",
        publishDate: "November 2019",
        category: "Newsletter",
      },
    ],
  },
  "Pre-2019": {
    title: "Foundation Papers",
    icon: Dna,
    color: "text-violet-400",
    bgColor: "from-violet-950/20",
   
    data: [
      {
        id: "gazette18",
        name: "Chemical Gazette 2018",
        image: cg18,
        url: "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_71dd8d1e33af451f9c91f5e087b8219b.pdf",
        type: "Research Paper",
        pages: 4,
        description: "Foundational research publication establishing key chemical engineering principles.",
        publishDate: "December 2018",
        category: "Research",
      },
      {
        id: "gazette17",
        name: "Chemical Gazette 2017",
        image: cg17,
        url: "https://f8f4ff97-33da-4ff8-a83e-b43a7e57eef0.filesusr.com/ugd/52d346_0b90a5a264354853871333bf40965750.pdf",
        type: "Research Paper",
        pages: 4,
        description: "Early research compilation laying groundwork for future innovations.",
        publishDate: "December 2017",
        category: "Research",
      },
    ],
  },
}

// Sort years descending (latest first), with "Pre-2019" always last
const sortedPublicationEntries = Object.entries(publicationData).sort(([a], [b]) => {
  if (a === "Pre-2019") return 1
  if (b === "Pre-2019") return -1
  return Number(b) - Number(a)
})

export default function Publication() {
  // 2024 is open by default
  const [expandedSections, setExpandedSections] = useState({ 2025: true })
  const [selectedPublication, setSelectedPublication] = useState(null)
  const [previewModalOpen, setPreviewModalOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const x = useTransform(mouseX, (val) => (val - window.innerWidth / 2) * 0.01)
  const y = useTransform(mouseY, (val) => (val - window.innerHeight / 2) * 0.01)

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

  const getTransform = useCallback(() => ({ x, y }), [x, y])

  const toggleSection = useCallback((year) => {
    setExpandedSections((prev) => ({
      ...prev,
      [year]: !prev[year],
    }))
  }, [])

  const openPreviewModal = useCallback((publication) => {
    setSelectedPublication(publication)
    setPreviewModalOpen(true)
  }, [])

  const closePreviewModal = useCallback(() => {
    setPreviewModalOpen(false)
    setSelectedPublication(null)
  }, [])

  // Chemical particle animation
  const renderChemicalParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.6, 0.1],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
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
          ...getTransform(),
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

  // Enhanced publication card
  const ChemicalPubliCard = ({ publication, index, yearData }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
      <motion.div
        className="group relative"
        // initial={{ opacity: 0, y: 50, scale: 0.9 }}
        // animate={{ opacity: 1, y: 0, scale: 1 }}
        // transition={{ delay: index * 0.1, duration: 0.6 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 transition-all duration-300 overflow-hidden"
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

          {/* Chemical Equipment Icon */}
          {/* <motion.div
            className="absolute top-4 right-4"
            animate={{ opacity: isHovered ? 0.6 : 0.2 }}
            transition={{ duration: 0.3 }}
          >
            <yearData.icon size={24} className={yearData.color} />
          </motion.div> */}

          {/* Chemical Formula */}
          <motion.div
            className="absolute top-2 left-2 text-xs font-mono text-emerald-400/40"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            {yearData.formula}
          </motion.div>

          {/* Publication Image */}
          <div className="relative mb-4 overflow-hidden rounded-lg">
            <motion.img
              src={publication.image || "/placeholder.svg"}
              alt={publication.name}
              className="w-full h-48 object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-center justify-center"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
            </motion.div>

            {/* Publication Type Badge */}
            {/* <div className="absolute top-2 left-2 bg-emerald-400/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-emerald-400 border border-emerald-400/30">
              {publication.type}
            </div> */}

            {/* Pages Count */}
            {/* <div className="absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-gray-300 flex items-center gap-1">
              <BookOpen size={12} />
              {publication.pages}p
            </div> */}

            {/* Category Badge */}
            {/* <div className="absolute bottom-2 left-2 bg-cyan-400/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-cyan-400 border border-cyan-400/30">
              {publication.category}
            </div> */}
          </div>

          {/* Publication Info */}
          <div className="relative z-10">
            <motion.h3
              className="text-lg font-bold text-white mb-2 transition-colors duration-300"
              animate={{ color: isHovered ? "#10b981" : "#ffffff" }}
            >
              {publication.name}
            </motion.h3>

            <p className="text-sm text-gray-400 mb-3 line-clamp-2">{publication.description}</p>

            <div className="flex items-center gap-2 mb-3 text-xs text-gray-500">
              <Calendar size={12} />
              <span>{publication.publishDate}</span>
            </div>

            {/* Action Buttons */}
            <motion.div className="flex gap-2" >
              <motion.button
                onClick={() => openPreviewModal(publication)}
                className="flex items-center gap-2 px-3 py-2 bg-emerald-400/20 hover:bg-emerald-400/30 rounded-lg text-emerald-400 text-sm transition-colors duration-300 flex-1 justify-center"
                whileHover={{ scale: 1.05 }}
                style={{"cursor":"pointer"}}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={14} />
                Preview
              </motion.button>
              <motion.a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-cyan-400/20 hover:bg-cyan-400/30 rounded-lg text-cyan-400 text-sm transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={14} />
                Open
              </motion.a>
              {/* <motion.a
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-violet-400/20 hover:bg-violet-400/30 rounded-lg text-violet-400 text-sm transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={14} />
                Download
              </motion.a> */}
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
              scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              opacity: { duration: 0.3 },
            }}
          />
        </motion.div>
      </motion.div>
    )
  }

  // Preview Modal
  const PreviewModal = () => (
    <AnimatePresence>
      {previewModalOpen && selectedPublication && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePreviewModal}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900/95 backdrop-blur-sm rounded-2xl border border-emerald-400/30 overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-700/50 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-emerald-400/10">
                  <FileText size={24} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-400">{selectedPublication.name}</h3>
                  <p className="text-cyan-400">{selectedPublication.type}</p>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {selectedPublication.publishDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen size={12} />
                      {selectedPublication.pages} pages
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={closePreviewModal}
                className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-slate-800/50 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Publication Image */}
                <div className="space-y-4">
                  <img
                    src={selectedPublication.image || "/placeholder.svg"}
                    alt={selectedPublication.name}
                    className="w-full h-auto max-h-[60vh] object-contain bg-slate-800/30 rounded-lg"
                  />
                </div>

                {/* Publication Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-3">Description</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedPublication.description}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-3">Publication Details</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <span className="text-gray-400">Type</span>
                        <span className="text-white font-medium">{selectedPublication.type}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <span className="text-gray-400">Category</span>
                        <span className="text-cyan-400 font-medium">{selectedPublication.category}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <span className="text-gray-400">Pages</span>
                        <span className="text-white font-medium">{selectedPublication.pages}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                        <span className="text-gray-400">Published</span>
                        <span className="text-white font-medium">{selectedPublication.publishDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={selectedPublication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-emerald-400/20 hover:bg-emerald-400/30 rounded-lg text-emerald-400 transition-colors duration-300 flex-1 justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Open Publication
                    </motion.a>
                    {/* <motion.a
                      href={selectedPublication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-cyan-400/20 hover:bg-cyan-400/30 rounded-lg text-cyan-400 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download size={16} />
                      Download
                    </motion.a> */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    // <div ref={ref} onMouseMove={handleMouseMove} className="overflow-hidden">
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
            style={{ top: droplet.top, left: droplet.left, ...getTransform() }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3 + i * 0.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-mono text-emerald-400/60">
              {droplet.formula}
            </div>
          </motion.div>
        ))} */}

        {/* Chemical Bubbles */}
        {/* {chemicalBubbles.map((bubble, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${bubble.size} ${bubble.color} opacity-40 shadow-lg`}
            style={{ top: bubble.top, left: bubble.left, ...getTransform() }}
            animate={{ y: [0, -25, 0], scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4 + i, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-white/80">
              {bubble.formula}
            </div>
          </motion.div>
        ))} */}

        {/* Main Content */}
        <section className="relative z-10 px-6 lg:px-16 py-40">
          {/* Header */}
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
                <Atom size={40} className="text-emerald-400" />
              </motion.div>
              <h1 className="text-5xl lg:text-6xl font-black">
                ChEA{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  PUBLICATIONS
                </span>
              </h1>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Flask size={40} className="text-cyan-400" />
              </motion.div>
            </div>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive collection of chemical engineering research, innovations, and discoveries
            </p>

            <div className="flex justify-center items-center gap-6 mt-8 opacity-60">
              <TestTube size={24} className="text-emerald-400" />
              <Beaker size={24} className="text-cyan-400" />
              <Microscope size={24} className="text-violet-400" />
              <Dna size={24} className="text-teal-400" />
            </div>
          </motion.div>

          {/* Publications by Year — sorted latest first, 2024 open by default */}
          <div className="space-y-12">
            {sortedPublicationEntries.map(([year, yearData], yearIndex) => (
              <motion.div
                key={year}
                className="relative"
                initial={{ opacity: 0,}}
                animate={isInView ? { opacity: 1,} : {}}
                transition={{ delay: yearIndex * 0.2, duration: 0.8 }}
              >
                {/* Year Header */}
                <motion.div
                  className="flex items-center justify-between mb-8 cursor-pointer group"
                  onClick={() => toggleSection(year)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-slate-800/50 group-hover:bg-emerald-400/10 transition-colors duration-300">
                      <yearData.icon
                        size={32}
                        className={`${yearData.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        Publications {year}
                      </h2>
                      <p className={`text-lg ${yearData.color} opacity-80`}>{yearData.title}</p>
                    </div>
                    <motion.div
                      className="text-xs font-mono text-emerald-400/60 ml-4"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    >
                      {yearData.formula}
                    </motion.div>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedSections[year] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-emerald-400"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </motion.div>

                {/* Publications Grid */}
                <AnimatePresence>
                  {expandedSections[year] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-slate-900/20 backdrop-blur-sm rounded-2xl border border-slate-700/30">
                        {yearData.data.map((publication, index) => (
                          <ChemicalPubliCard
                            key={publication.id}
                            publication={publication}
                            index={index}
                            yearData={yearData}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Chemical Divider */}
                <div className="flex justify-center mt-8">
                  <motion.div
                    className="w-32 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent relative"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: 128 } : {}}
                    transition={{ delay: yearIndex * 0.1, duration: 1 }}
                  >
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Droplets size={12} className="text-emerald-400" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Preview Modal */}
        <PreviewModal />
      </div>
    </div>
  )
}