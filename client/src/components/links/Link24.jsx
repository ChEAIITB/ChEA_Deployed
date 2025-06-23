"use client"
import { Link } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from "react"
import { motion, useMotionValue, useTransform, useInView, AnimatePresence } from "framer-motion"
import {
  FlaskRoundIcon as Flask,
  TestTube,
  Beaker,
  Atom,
  LinkIcon,
  ExternalLink,
  FileText,
  Briefcase,
  GraduationCap,
  Zap,
  Eye,
  Download,
  Users,
  Calendar,
  X,
} from "lucide-react"
import "aos/dist/aos.css"
import AOS from "aos"

// Import images
import image25 from "../../assets/images/link24/image25.jpg"
import image26 from "../../assets/images/link24/image26.jpg"
import image27 from "../../assets/images/link24/image27.jpg"

// Chemical equipment for floating animations
const chemicalEquipment = [
  { size: 100, opacity: 0.08, rotation: 45, icon: Flask },
  { size: 80, opacity: 0.12, rotation: -30, icon: TestTube },
  { size: 120, opacity: 0.06, rotation: 60, icon: Beaker },
  { size: 90, opacity: 0.15, rotation: -45, icon: Atom },
]

// Chemical formulas for decorative elements (legacy tech terms)
const chemicalFormulas = ["HTML", "CSS", "PHP", "SQL", "XML", "FTP", "SMTP"]

// Chemical droplets with enhanced properties
const chemicalDroplets = [
  { top: "15%", left: "10%", size: "w-6 h-6", color: "bg-emerald-400", glow: "shadow-emerald-400/50", formula: "Web" },
  { top: "35%", left: "80%", size: "w-4 h-4", color: "bg-cyan-400", glow: "shadow-cyan-400/50", formula: "Doc" },
  { top: "65%", left: "15%", size: "w-5 h-5", color: "bg-violet-400", glow: "shadow-violet-400/50", formula: "PDF" },
  { top: "75%", left: "90%", size: "w-4 h-4", color: "bg-teal-400", glow: "shadow-teal-400/50", formula: "Link" },
  { top: "25%", left: "60%", size: "w-3 h-3", color: "bg-lime-400", glow: "shadow-lime-400/50", formula: "Data" },
]

// Enhanced chemical bubbles
const chemicalBubbles = [
  {
    top: "10%",
    left: "30%",
    size: "w-8 h-8",
    color: "bg-gradient-to-br from-emerald-400 to-cyan-500",
    formula: "DAMP",
  },
  {
    top: "50%",
    left: "75%",
    size: "w-10 h-10",
    color: "bg-gradient-to-br from-cyan-400 to-violet-500",
    formula: "Resume",
  },
  {
    top: "85%",
    left: "20%",
    size: "w-6 h-6",
    color: "bg-gradient-to-br from-violet-400 to-teal-500",
    formula: "Career",
  },
]

// Enhanced link data with metadata for 2024/Pre-2025
const linkData = [
  {
    id: "damp-chemical",
    name: "DAMP Chemical",
    image: image25,
    url: "https://dampiitbche.wordpress.com/",
    type: "Website",
    icon: Users,
    color: "text-emerald-400",
    bgColor: "from-emerald-950/20",
    description:
      "Department Academic Mentorship Program - Chemical Engineering guidance and support platform providing comprehensive mentorship for academic excellence.",
    category: "Academic",
    formula: "DAMP",
    year: "2024",
    lastUpdated: "December 2024",
    status: "Active",
  },
  {
    id: "internship-resume-24",
    name: "Internship Resume",
    image: image26,
    url: "https://drive.google.com/drive/u/4/folders/1-NQweMAHZlf_-cCWbZxytJFeoZ1cjA6K",
    type: "Document",
    icon: FileText,
    color: "text-cyan-400",
    bgColor: "from-cyan-950/20",
    description:
      "Comprehensive collection of internship resumes and templates for 2024 batch students, featuring industry-specific formats and successful application examples.",
    category: "Career",
    formula: "CV₂₄",
    year: "2024",
    lastUpdated: "August 2024",
    status: "Archived",
  },
  {
    id: "placement-resume-24",
    name: "Placement Resume",
    image: image27,
    url: "https://drive.google.com/drive/folders/1zPQxnLF6u2ydDIqGXfYe3fE3Rf59k6TT",
    type: "Document",
    icon: Briefcase,
    color: "text-violet-400",
    bgColor: "from-violet-950/20",
    description:
      "Professional placement resumes and career resources for final year students, including successful placement templates and comprehensive interview preparation materials.",
    category: "Career",
    formula: "Job₂₄",
    year: "2024",
    lastUpdated: "November 2024",
    status: "Archived",
  },
]

export default function Link24() {
  const [selectedLink, setSelectedLink] = useState(null)
  const [imageModalOpen, setImageModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
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

  const openImageModal = useCallback((link) => {
    setSelectedLink(link)
    setImageModalOpen(true)
  }, [])

  const closeImageModal = useCallback(() => {
    setImageModalOpen(false)
    setSelectedLink(null)
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

  // Enhanced link card with chemical theme and optimized hover
  const ChemicalLinkCard = ({ link, index }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
      <motion.div
        className="group relative"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: index * 0.2, duration: 0.6 }}
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

          {/* Chemical Equipment Icon */}
          <motion.div
            className="absolute top-4 right-4"
            animate={{ opacity: isHovered ? 0.6 : 0.2 }}
            transition={{ duration: 0.3 }}
          >
            <link.icon size={24} className={link.color} />
          </motion.div>

          {/* Chemical Formula */}
          <motion.div
            className="absolute top-2 left-2 text-xs font-mono text-emerald-400/40"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            {link.formula}
          </motion.div>

          {/* Year Badge */}
          <div className="absolute top-2 right-12 bg-orange-400/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-orange-400 border border-orange-400/30">
            {link.year}
          </div>

          {/* Link Image with Full Visibility */}
          <div className="relative mb-4 overflow-hidden rounded-lg">
            <div className="aspect-video w-full bg-slate-700/30 rounded-lg overflow-hidden">
              <motion.img
                src={link.image || "/placeholder.svg"}
                alt={link.name}
                className="w-full h-full object-contain bg-white/5 cursor-pointer"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => openImageModal(link)}
              />
            </div>

            {/* Image Overlay with View Button */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-center justify-center"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                onClick={() => openImageModal(link)}
                className="bg-emerald-400/20 backdrop-blur-sm px-4 py-2 rounded-full text-emerald-400 border border-emerald-400/30 flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={16} />
                View Full Image
              </motion.button>
            </motion.div>

            {/* Category Badge */}
            <div className="absolute top-2 left-2 bg-emerald-400/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-emerald-400 border border-emerald-400/30">
              {link.category}
            </div>

            {/* Type Badge */}
            <div className="absolute bottom-2 right-2 bg-cyan-400/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-cyan-400 border border-cyan-400/30">
              {link.type}
            </div>

            {/* Status Badge */}
            <div
              className={`absolute bottom-2 left-2 backdrop-blur-sm px-3 py-1 rounded-full text-xs border ${
                link.status === "Active"
                  ? "bg-green-400/20 text-green-400 border-green-400/30"
                  : "bg-orange-400/20 text-orange-400 border-orange-400/30"
              }`}
            >
              {link.status}
            </div>
          </div>

          {/* Link Info */}
          <div className="relative z-10 space-y-3">
            <motion.h3
              className="text-xl font-bold transition-colors duration-300"
              animate={{ color: isHovered ? "#10b981" : "#ffffff" }}
            >
              {link.name}
            </motion.h3>

            <p className="text-sm text-gray-400 transition-colors duration-300 line-clamp-2">{link.description}</p>

            <div className="text-xs text-gray-500">Last updated: {link.lastUpdated}</div>

            {/* Action Buttons */}
            <motion.div
              className="flex gap-2 pt-4"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-emerald-400/20 hover:bg-emerald-400/30 rounded-lg text-emerald-400 text-sm transition-colors duration-300 flex-1 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={14} />
                Visit Link
              </motion.a>
              <motion.button
                onClick={() => openImageModal(link)}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-400/20 hover:bg-cyan-400/30 rounded-lg text-cyan-400 text-sm transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={14} />
                Preview
              </motion.button>
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

  // Image Modal Component
  const ImageModal = () => (
    <AnimatePresence>
      {imageModalOpen && selectedLink && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeImageModal}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] bg-slate-900/90 backdrop-blur-sm rounded-2xl border border-emerald-400/30 overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-700/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-emerald-400/10">
                  <selectedLink.icon size={20} className={selectedLink.color} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-emerald-400">{selectedLink.name}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-cyan-400">
                      {selectedLink.type} • {selectedLink.category}
                    </p>
                    <span className="bg-orange-400/20 px-2 py-1 rounded-full text-xs text-orange-400 border border-orange-400/30">
                      2024 Archive
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeImageModal}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Image */}
                <div>
                  <img
                    src={selectedLink.image || "/placeholder.svg"}
                    alt={selectedLink.name}
                    className="w-full h-auto max-h-[60vh] object-contain bg-white/5 rounded-lg"
                  />
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">Description</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedLink.description}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-emerald-400 mb-2">Archive Details</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                        <span className="text-gray-400">Type</span>
                        <span className="text-white">{selectedLink.type}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                        <span className="text-gray-400">Category</span>
                        <span className="text-cyan-400">{selectedLink.category}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                        <span className="text-gray-400">Year</span>
                        <span className="text-orange-400">{selectedLink.year}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                        <span className="text-gray-400">Status</span>
                        <span className={selectedLink.status === "Active" ? "text-green-400" : "text-orange-400"}>
                          {selectedLink.status}
                        </span>
                      </div>
                      <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                        <span className="text-gray-400">Last Updated</span>
                        <span className="text-white">{selectedLink.lastUpdated}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <motion.a
                      href={selectedLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-400/20 hover:bg-emerald-400/30 rounded-lg text-emerald-400 transition-colors duration-300 flex-1 justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Visit Link
                    </motion.a>
                    <motion.a
                      href={selectedLink.image}
                      download
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-400/20 hover:bg-cyan-400/30 rounded-lg text-cyan-400 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download size={16} />
                      Download
                    </motion.a>
                  </div>

                  {/* Archive Notice */}
                  <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-3 mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} className="text-orange-400" />
                      <span className="text-orange-400 font-semibold text-sm">Archive Notice</span>
                    </div>
                    <p className="text-gray-400 text-xs">
                      This resource is from the 2024 academic year. For current resources, please check the 2025
                      section.
                    </p>
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
    <div ref={ref} onMouseMove={handleMouseMove} className="overflow-hidden">
      <div className="relative bg-gradient-to-b from-slate-900 via-orange-950 to-slate-950 text-white min-h-screen">
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
                <LinkIcon size={40} className="text-orange-400" />
              </motion.div>
              <h1 className="text-5xl lg:text-6xl font-black">
                Important{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-emerald-400">
                  LINKS
                </span>
              </h1>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Calendar size={40} className="text-orange-400" />
              </motion.div>
            </div>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Legacy resources and archived links from 2024 - Pre-2025 era
            </p>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mb-8">
  <Link to="/links/25">
    <motion.button
      className="px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-gray-300 border border-slate-600/50 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      2025
    </motion.button>
  </Link>

  <Link to="/links/24">
    <motion.button
      className="px-6 py-3 bg-orange-400/20 hover:bg-orange-400/30 rounded-lg text-orange-400 border border-orange-400/30 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Pre-2025
    </motion.button>
  </Link>
</div>

            {/* Archive Badge */}
            <div className="flex justify-center mb-8">
              <div className="bg-orange-400/10 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-400/30 flex items-center gap-3">
                <Calendar size={20} className="text-orange-400" />
                <span className="text-orange-400 font-semibold">Legacy Archive Collection</span>
                <div className="text-xs font-mono text-orange-400/60">2024</div>
              </div>
            </div>

            {/* Chemical Equipment Decoration */}
            <div className="flex justify-center items-center gap-6 opacity-60">
              <Users size={24} className="text-orange-400" />
              <FileText size={24} className="text-emerald-400" />
              <Briefcase size={24} className="text-cyan-400" />
              <GraduationCap size={24} className="text-violet-400" />
            </div>
          </motion.div>

          {/* Links Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {linkData.map((link, index) => (
              <ChemicalLinkCard key={link.id} link={link} index={index} />
            ))}
          </motion.div>

          {/* Chemical Divider */}
          <div className="flex justify-center mt-16">
            <motion.div
              className="w-32 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent relative"
              initial={{ width: 0 }}
              animate={isInView ? { width: 128 } : {}}
              transition={{ delay: 1, duration: 1 }}
            >
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Zap size={16} className="text-orange-400" />
              </motion.div>
            </motion.div>
          </div>

          {/* Archive Footer */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calendar size={24} className="text-orange-400" />
                <h3 className="text-lg font-bold text-orange-400">Archive Notice</h3>
              </div>
              <p className="text-gray-400 text-sm">
                These resources are from the 2024 academic year and earlier. For the most current information and
                resources, please visit the 2025 section.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Image Modal */}
        <ImageModal />
      </div>
    </div>
  )
}
