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
  Globe,
  FileText,
  Briefcase,
  GraduationCap,
  Users,
  Zap,
  Eye,
  Download,
  X,
} from "lucide-react"
import "aos/dist/aos.css"
import AOS from "aos"

// Import images
import image244 from "../../assets/images/link25/image244.jpg"
import intenr25 from "../../assets/images/link25/intenr25-resume.jpg"
import placement25 from "../../assets/images/link25/placement25-resume.jpg"
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
const linkData25 = [
  {
    id: "che-website",
    name: "ChE Official Website",
    image: image244,
    url: "https://www.che.iitb.ac.in/",
    type: "Website",
    icon: Globe,
    color: "text-emerald-400",
    bgColor: "from-emerald-950/20",
    description:
      "Official Chemical Engineering Department website with comprehensive information about faculty, courses, research, and academic programs.",
    category: "Academic",
    formula: "C₆H₁₂O₆",
    lastUpdated: "December 2024",
  },
  {
    id: "internship-resume",
    name: "Internship Resume-2025",
    image: intenr25,
    url: "https://drive.google.com/drive/u/1/folders/1eyM1gio4GCNLVimxFt1q1FXRHysx7EJk",
    type: "Document",
    icon: FileText,
    color: "text-cyan-400",
    bgColor: "from-cyan-950/20",
    description:
      "Comprehensive collection of internship resumes and templates for 2025 batch students, including industry-specific formats and guidelines.",
    category: "Career",
    formula: "H₂SO₄",
    lastUpdated: "January 2025",
  },
  {
    id: "placement-resume",
    name: "Placement Resume-2025",
    image: placement25,
    url: "https://drive.google.com/drive/folders/1mtc1B8dBsqnJssOOjyhVVovmOyLF0Wk2",
    type: "Document",
    icon: Briefcase,
    color: "text-violet-400",
    bgColor: "from-violet-950/20",
    description:
      "Professional placement resumes and career resources for final year students, featuring successful placement templates and interview tips.",
    category: "Career",
    formula: "NaOH",
    lastUpdated: "December 2024",
  },
];
const linkData24 = [
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
];

export default function Link25() {
  const [selectedLink, setSelectedLink] = useState(null)
  const [imageModalOpen, setImageModalOpen] = useState(false)
  const [content, updateContent] = useState(linkData25);
  const [pageNo, updatePage] = useState(0);
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const x = useTransform(mouseX, (x) => (x - window.innerWidth / 2) * 0.01)
  const y = useTransform(mouseY, (y) => (y - window.innerHeight / 2) * 0.01)


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
  // Enhanced link card with chemical theme and optimized hover
  const ChemicalLinkCard = ({ link, index }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
      <motion.div
        className="group relative"
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

         
          {/* Chemical Formula */}
          {/* Link Image with Full Visibility */}
          <div className="relative mb-4 overflow-hidden rounded-lg">
            <div className="aspect-video w-full bg-slate-700/30 rounded-lg overflow-hidden">
              <motion.img
                src={link.image || "/placeholder.svg"}
                alt={link.name}
                className="w-full h-full object-contain bg-white/5 cursor-pointer"
                animate={{ scale: isHovered ? 1.02 : 1 }}
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
            </motion.div>

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
              transition={{ duration: 0.3 }}
            >
              <motion.a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#315D9C]/20 hover:bg-[#315D9C]/30 rounded-lg text-[#4A8DFF] border border-[#315D9C]/30 transition-colors duration-300 text-sm transition-colors duration-300 flex-1 justify-center"
                whileHover={{ scale: 1.01 }}
                style={{color:'#adcbff'}}
                whileTap={{ scale: 0.99 }}
              >
                <ExternalLink size={14} />
                Visit Link
              </motion.a>
              <motion.button
                onClick={() => openImageModal(link)}
                style={{cursor:'pointer'}}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-400/20 hover:bg-cyan-400/30 rounded-lg text-cyan-400 text-sm transition-colors duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
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
            className="relative max-w-4xl max-h-[90vh] bg-slate-900/90 backdrop-blur-sm rounded-2xl border border-[#315D9C]/30 overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-700/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-emerald-400/10">
                  <selectedLink.icon size={20} style={{color:'#4A8DFF'}} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedLink.name}</h3>
                  <p className="text-sm text-[#adcbff]">
                    {selectedLink.type} • {selectedLink.category}
                  </p>
                </div>
              </div>
              <button
                onClick={closeImageModal}
                style={{cursor:'pointer'}}
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
                    <h4 className="text-lg font-semibold text-[#adcbff] mb-2">Description</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedLink.description}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#adcbff] mb-2">Details</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                        <span className="text-gray-400">Type</span>
                        <span className="text-white">{selectedLink.type}</span>
                      </div>
                      <div className="flex justify-between p-2 bg-slate-800/50 rounded">
                        <span className="text-gray-400">Category</span>
                        <span className="text-white">{selectedLink.category}</span>
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
className="flex items-center gap-2 px-4 py-2 bg-[#315D9C]/20 hover:bg-[#315D9C]/30 rounded-lg text-[#adcbff] transition-colors duration-300 flex-1 justify-center"                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Visit Link
                    </motion.a>
                    <motion.a
                      href={selectedLink.image}
                      download
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-400/20 hover:bg-cyan-400/30 rounded-lg text-cyan-400 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download size={16} />
                      Download
                    </motion.a>
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
      <div className="relative bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950 text-white min-h-screen">
        
        {/* Main Content */}
        <section className="relative z-10 px-6 lg:px-16 py-30 md:py-40" style={{background:'#0b1e38'}}>
          {/* Header with Chemical Theme */}
          <motion.div
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <LinkIcon size={40} className="text-[#4A8DFF]" />
              </motion.div>
              <h1 className="text-5xl lg:text-6xl font-black">
                Important{" "}
                <span>
                  LINKS
                </span>
              </h1>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Globe size={40} className="text-[#4A8DFF]" />
              </motion.div>
            </div>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Essential resources and links for Chemical Engineering students and professionals
            </p>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mb-8">
    <motion.button
      className={pageNo==0?"px-6 py-3 bg-[#315D9C]/20 hover:bg-[#315D9C]/30 rounded-lg text-[#adcbff] border border-[#315D9C]/30 transition-colors duration-300":"px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-gray-300 border border-slate-600/50 transition-colors duration-300"}
      whileHover={{ scale: 1.01 }}
      style={{"cursor":"pointer"}}
      onClick={() => {updateContent(linkData25); updatePage(0)}}
      whileTap={{ scale: 0.99 }}
    >
      2025
    </motion.button>

    <motion.button
      className={pageNo==1?"px-6 py-3 bg-[#315D9C]/20 hover:bg-[#315D9C]/30 rounded-lg text-[#adcbff] border border-[#315D9C]/30 transition-colors duration-300":"px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-gray-300 border border-slate-600/50 transition-colors duration-300"}
      whileHover={{ scale: 1.02 }}
      style={{"cursor":"pointer"}}
      onClick={() => {updateContent(linkData24); updatePage(1);}}
      whileTap={{ scale: 0.95 }}
    >
      Pre-2025
    </motion.button>
</div>

          </motion.div>

          {/* Links Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0,}}
            animate={isInView ? { opacity: 1,} : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {content.map((link, index) => (
              <ChemicalLinkCard key={link.id} link={link} index={index} />
            ))}
          </motion.div>

          {/* Chemical Divider */}
        </section>

        {/* Image Modal */}
        <ImageModal />
      </div>
    </div>
  )
}
