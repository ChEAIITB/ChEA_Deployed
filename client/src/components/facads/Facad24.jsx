"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion, useMotionValue, useTransform, useInView, AnimatePresence } from "framer-motion"
import {
  FlaskRoundIcon as Flask,
  TestTube,
  Beaker,
  Atom,
  GraduationCap,
  Phone,
  Mail,
  ExternalLink,
  BookOpen,
  Users,
  Eye,
  Microscope,
  Crown,
  User,
} from "lucide-react"
import "aos/dist/aos.css"
import AOS from "aos"

// Import all faculty images
import AbhijitC from "../../assets/images/facad24/AbhijitC.jpg"
import MadhuV from "../../assets/images/facad24/MadhuV.jpg"
import ojus from "../../assets/images/facad24/ojus.jpg"
import sujit from "../../assets/images/facad24/sujit.jpg"
import amol from "../../assets/images/facad23/amol.png"
import hemant from "../../assets/images/facad23/hemant.jpg"
import jason from "../../assets/images/facad23/jason.png"
import supreet from "../../assets/images/facad23/supreet.jpg"
import swati from "../../assets/images/facad22/swati.png"
import gurus from "../../assets/images/facad22/gurus.jpg"
import Rajdip from "../../assets/images/facad22/Rajdip.jpg"
import bharat from "../../assets/images/facad22/bharat.jpeg"
import Arindham from "../../assets/images/facad21/Arindham.jpg"
import Mukta from "../../assets/images/facad21/Mukta.jpg"
import rochish from "../../assets/images/facad21/rochish.jpg"
import Sameer from "../../assets/images/facad21/Sameer.jpg"
import Abhijit from "../../assets/images/facadmtech/Abhijit.jpg"
import Ratul from "../../assets/images/facadmtech/Ratul.jpg"
import Mani from "../../assets/images/facadphd/Mani.jpg"
import Partha from "../../assets/images/facadphd/Partha.jpg"
import malani from "../../assets/images/facadphd/malani.png"
import sunthar from "../../assets/images/facad25/p_sunthar.jpg"
import sonali from "../../assets/images/facad25/Sonali.jpeg"
import venkat from "../../assets/images/facad25/VenkatG.jpg"
import nagappan from "../../assets/images/facad25/nagappan.jpg"

// Chemical equipment for floating animations
const chemicalEquipment = [
  
]

// Chemical formulas for decorative elements
const chemicalFormulas = []

// Chemical droplets with enhanced properties
const chemicalDroplets = [

]

// Enhanced chemical bubbles
const chemicalBubbles = [

]

// Comprehensive faculty data with additional members
const facultyData = {
  "2025": {
    title: "Current Batch",
    icon: Flask,
    color: "text-emerald-400",
    bgColor: "from-emerald-950/20",
    formula: "25B",
    data: [
      {
  "name": "Prof. P. Sunthar",
  "image": sunthar,
  "email": "sunthar@che.iitb.ac.in",
  "phone": "+91 (22) 2576 7229",
  "url": "https://www.che.iitb.ac.in/faculty-page/p-sunthar",
  "roll": "24B0301 – 24B0333",
  "position": "Professor",
  "department": "Chemical Engineering",
  "specialization": "Computational Flow Modelling & Transport Phenomena",
  "education": {
    "BTech": "CECRI, 1993",
    "MS": "IIT Madras, 1995",
    "PhD": "IISc Bangalore, 2002",
    "PostDoc": "Research Fellow, Monash University, 2003-2006"
  },
  "courses": [
    "CL254: Process Fluid Mechanics",
    "CL657: Computational Flow Modelling",
    "CL427: Polymer Thermodynamics",
    "CL336: Advanced Transport Phenomena"
  ],
  "researchAreas": [
    "Blood flow in coronary arteries (Ischemia modeling)",
    "Colloidal fingering (Double-diffusive instability)",
    "Self-assembly of vesicles",
    "Polymer Simulation & Brownian Dynamics"
  ],
  "experience": "20+ years"
},
      {
  "name": "Prof. Sonali Das",
  "image": sonali,
  "email": "sonali.das@iitb.ac.in",
  "phone": "+91 (22) 2576 7265",
  "url": "https://www.che.iitb.ac.in/faculty-page/sonali-das",
  "roll": "24B0334 – 24B0366",
  "position": "Assistant Professor",
  "department": "Chemical Engineering",
  "specialization": "Chemical and Electrochemical Reaction Engineering",
  "education": {
    "BE": "Jadavpur University, 2012",
    "PhD": "National University of Singapore, 2021",
    "PostDoc": "University of California, Davis, 2021-22"
  },
  "researchAreas": [
    "Chemical and Electrochemical Reaction Engineering",
    "Energy, Climate and Sustainability",
    "Softmatter Engineering"
  ],
  "experience": "3+ years (Post-PhD)"
},
      {
  "name": "Prof. Venkat Gundabala",
  "image": venkat,
  "email": "venkatg@iitb.ac.in",
  "phone": "+91 (22) 2576 7208",
  "url": "http://che.iitb.ac.in/faculty-page/venkat-gundabala",
  "roll": "24B0367 – 24B0399",
  "position": "Associate Professor",
  "department": "Chemical Engineering",
  "specialization": "Microfluidics and Soft Matter Engineering",
  "education": {
    "BTech": "Andhra University, 2000",
    "MS": "Drexel University, 2002",
    "PhD": "University of Sheffield, 2006",
    "PostDoc": [
      "University of Cambridge, 2007-2008",
      "Georgia Institute of Technology, 2008-2012"
    ]
  },
  "courses": [
    "CL152: Introduction to Chemical Engineering"
  ],
  "researchAreas": [
    "Microfluidics for Bioengineering Applications",
    "Water-based Antimicrobial Coatings",
    "Bio-based Packaging Films",
    "Latex Nanocomposites"
  ],
  "experience": "12+ years (Faculty at IITB)"
},
      {
  "name": "Prof. Nagappan Ramaswamy",
  "image": nagappan,
  "email": "nagappan@iitb.ac.in",
  "phone": "+91 (22) 2576 7217",
  "url": "https://www.che.iitb.ac.in/faculty-page/nagappan-ramaswamy",
  "roll": "24B0400 – 24B0432",
  "position": "Associate Professor",
  "department": "Chemical Engineering",
  "specialization": "Chemical and Electrochemical Reaction Engineering",
  "education": {
    "BTech": "CECRI Karaikudi, 2005",
    "PhD": "Northeastern University, Boston, 2011"
  },
  "researchAreas": [
    "Water Electrolyzers and Fuel Cells",
    "Redox-flow Batteries",
    "Desalination Batteries",
    "Energy, Climate and Sustainability"
  ],
  "experience": "10+ years"
}
    ],
  },
  "2024": {
    title: "Current Batch",
    icon: Flask,
    color: "text-emerald-400",
    bgColor: "from-emerald-950/20",
    formula: "24B",
    data: [
      {
        name: "Prof. Madhu Vinjamur",
        image: MadhuV,
        email: "madhu@che.iitb.ac.in",
        phone: "+91 (22) 2576 7218",
        url: "https://www.che.iitb.ac.in/faculty/madhu-vinjamur",
        roll: "24B0301 – 24B0333",
        specialization: "Process Systems Engineering",
        department: "Chemical Engineering",
        experience: "15+ years",
        researchAreas: ["Process Control", "Optimization", "Systems Engineering"],
        position: "Professor",
      },
      {
        name: "Prof. Abhijit Chatterjee",
        image: AbhijitC,
        email: "abhijit@che.iitb.ac.in",
        phone: "+91 (22) 2576 7242",
        url: "https://www.che.iitb.ac.in/faculty/abhijit-chatterjee",
        roll: "24B0334 – 24B0366",
        specialization: "Transport Phenomena",
        department: "Chemical Engineering",
        experience: "12+ years",
        researchAreas: ["Heat Transfer", "Mass Transfer", "Fluid Mechanics"],
        position: "Professor",
      },
      {
        name: "Prof. Sujit Jogwar",
        image: sujit,
        email: "jogwar@iitb.ac.in",
        phone: "+91 (22) 2576 7244",
        url: "https://www.che.iitb.ac.in/faculty/sujit-s-jogwar",
        roll: "24B0367 – 24B0399",
        specialization: "Process Control",
        department: "Chemical Engineering",
        experience: "10+ years",
        researchAreas: ["Advanced Control", "Process Dynamics", "Automation"],
        position: "Professor",
      },
      {
        name: "Prof. Ojus Mohan",
        image: ojus,
        email: "ojus@che.iitb.ac.in",
        phone: "+91 (22) 2576 7234",
        url: "https://www.che.iitb.ac.in/faculty/ojus-mohan",
        roll: "24B0400 – 24B0432",
        specialization: "Reaction Engineering",
        department: "Chemical Engineering",
        experience: "8+ years",
        researchAreas: ["Catalysis", "Reactor Design", "Kinetics"],
        position: "Professor",
      },
    ],
  },
  "2023": {
    title: "Third Year",
    icon: TestTube,
    color: "text-cyan-400",
    bgColor: "from-cyan-950/20",
    formula: "23B",
    data: [
      {
        name: "Prof. Hemant Nanavati",
        image: hemant,
        email: "hnanavati@che.iitb.ac.in",
        phone: "+91 (22) 2576 7215",
        url: "https://www.che.iitb.ac.in/index.php/faculty/hemant-nanavati",
        roll: "23B0301 – 23B0337",
        specialization: "Polymer Science",
        department: "Chemical Engineering",
        experience: "20+ years",
        researchAreas: ["Polymer Processing", "Materials Science", "Rheology"],
        position: "Professor",
      },
      {
        name: "Prof. Jason Ryan Picardo",
        image: jason,
        email: "jrpicardo@che.iitb.ac.in",
        phone: "+91 (22) 2576 7247",
        url: "https://www.che.iitb.ac.in/index.php/faculty/jason-r-picardo",
        roll: "23B0338 – 23B0374",
        specialization: "Fluid Mechanics",
        department: "Chemical Engineering",
        experience: "12+ years",
        researchAreas: ["Computational Fluid Dynamics", "Turbulence", "Mixing"],
        position: "Professor",
      },
      {
        name: "Prof. Amol Subhedar",
        image: amol,
        email: "amol.subhedar@che.iitb.ac.in",
        phone: "+91 (22) 2576 7248",
        url: "https://www.che.iitb.ac.in/index.php/faculty/amol-subhedar",
        roll: "23B0375 – 23B0411",
        specialization: "Biochemical Engineering",
        department: "Chemical Engineering",
        experience: "8+ years",
        researchAreas: ["Bioprocess Engineering", "Fermentation", "Downstream Processing"],
        position: "Professor",
      },
      {
        name: "Prof. Supreet Saini",
        image: supreet,
        email: "saini@che.iitb.ac.in",
        phone: "+91 (22) 2576 7216",
        url: "https://www.che.iitb.ac.in/index.php/faculty/supreet-saini",
        roll: "23B0412 – 23B0447",
        specialization: "Synthetic Biology",
        department: "Chemical Engineering",
        experience: "10+ years",
        researchAreas: ["Genetic Engineering", "Metabolic Engineering", "Biosystems"],
        position: "Professor",
      },
    ],
  },
  "2022": {
    title: "Second Year",
    icon: Beaker,
    color: "text-violet-400",
    bgColor: "from-violet-950/20",
    formula: "22B",
    data: [
      {
        name: "Prof. Swati Bhattacharya",
        image: swati,
        email: "swaticb@che.iitb.ac.in",
        phone: "+91 (22) 2576 7220",
        url: "https://www.che.iitb.ac.in/faculty/swati-bhattacharya",
        roll: "22B0420-458",
        specialization: "Environmental Engineering",
        department: "Chemical Engineering",
        experience: "15+ years",
        researchAreas: ["Water Treatment", "Air Pollution Control", "Sustainability"],
        position: "Professor",
      },
      {
        name: "Prof. Bharatkumar Suthar",
        image: bharat,
        email: "bharat.k.suthar@iitb.ac.in",
        phone: "+91 (22) 2576 7243",
        url: "https://www.che.iitb.ac.in/faculty/bharatkumar-suthar",
        roll: "22B0341-380",
        specialization: "Thermodynamics",
        department: "Chemical Engineering",
        experience: "12+ years",
        researchAreas: ["Phase Equilibria", "Molecular Simulation", "Statistical Mechanics"],
        position: "Professor",
      },
      {
        name: "Prof. Rajdip Bandyopadhyaya",
        image: Rajdip,
        email: "rajdip@che.iitb.ac.in",
        phone: "+91 (22) 2576 7209",
        url: "https://www.che.iitb.ac.in/faculty/rajdip-bandyopadhyaya",
        roll: "22B0381-419",
        specialization: "Nanoparticle Engineering",
        department: "Chemical Engineering",
        experience: "18+ years",
        researchAreas: ["Nanoparticles", "Aerosols", "Particle Technology"],
        position: "Professor",
      },
      {
        name: "Prof. Guruswamy Kumaraswamy",
        image: gurus,
        email: "guruswamy@iitb.ac.in",
        phone: "+91 (22) 2576 7239",
        url: "https://www.che.iitb.ac.in/faculty/guruswamy-kumaraswamy",
        roll: "22B0301-340",
        specialization: "Soft Matter Physics",
        department: "Chemical Engineering",
        experience: "20+ years",
        researchAreas: ["Polymer Physics", "Colloids", "Complex Fluids"],
        position: "Professor",
      },
    ],
  },
  "2021": {
    title: "Final Year",
    icon: Atom,
    color: "text-teal-400",
    bgColor: "from-teal-950/20",
    formula: "21B",
    data: [
      {
        name: "Prof. Sameer Jadhav",
        image: Sameer,
        email: "srjadhav@che.iitb.ac.in",
        phone: "91 (22) 2576 7219",
        url: "https://www.che.iitb.ac.in/index.php/faculty/sameer-jadhav",
        roll: "210020001-40",
        specialization: "Multiphase Flow",
        department: "Chemical Engineering",
        experience: "14+ years",
        researchAreas: ["Bubble Columns", "Fluidization", "Mass Transfer"],
        position: "Professor",
      },
      {
        name: "Prof. Rochish Thaokar",
        image: rochish,
        email: "rochish@che.iitb.ac.in",
        phone: "91 (22) 2576 7241",
        url: "https://www.che.iitb.ac.in/index.php/faculty/rochish-madhukar-thaokar",
        roll: "210020041-80",
        specialization: "Electrokinetics",
        department: "Chemical Engineering",
        experience: "16+ years",
        researchAreas: ["Electrohydrodynamics", "Microfluidics", "Colloid Science"],
        position: "Professor",
      },
      {
        name: "Prof. Arindam Sarkar",
        image: Arindham,
        email: "asarkar@che.iitb.ac.in",
        phone: "91 (22) 2576 7233",
        url: "https://www.che.iitb.ac.in/index.php/faculty/arindam-sarkar",
        roll: "210020081-120",
        specialization: "Process Safety",
        department: "Chemical Engineering",
        experience: "11+ years",
        researchAreas: ["Risk Assessment", "Safety Engineering", "Hazard Analysis"],
        position: "Professor",
      },
      {
        name: "Prof. Mukta Tripathy",
        image: Mukta,
        email: "tripathy@che.iitb.ac.in",
        phone: "91 (22) 2576 7204",
        url: "https://www.che.iitb.ac.in/index.php/faculty/mukta-tripathy",
        roll: "210020120-last",
        specialization: "Computational Biology",
        department: "Chemical Engineering",
        experience: "13+ years",
        researchAreas: ["Bioinformatics", "Molecular Modeling", "Systems Biology"],
        position: "Professor",
      },
    ],
  },
  "M.Tech": {
    title: "Masters Program",
    icon: GraduationCap,
    color: "text-orange-400",
    bgColor: "from-orange-950/20",
    formula: "MTech",
    data: [
      {
        name: "Prof. Ratul Dasgupta",
        image: Ratul,
        email: "dasgupta.ratul@iitb.ac.in",
        phone: "+91 (22) 2576 7235",
        url: "https://www.che.iitb.ac.in/index.php/faculty/ratul-dasgupta",
        roll: "M.Tech Coordinator",
        specialization: "Statistical Mechanics",
        department: "Chemical Engineering",
        experience: "12+ years",
        researchAreas: ["Molecular Simulation", "Thermodynamics", "Phase Transitions"],
        position: "Coordinator",
      },
      {
        name: "Prof. Abhijit Majumder",
        image: Abhijit,
        email: "abhijitm@iitb.ac.in",
        phone: "+91-(22)-2576 7237",
        url: "https://www.che.iitb.ac.in/index.php/faculty/abhijit-majumder",
        roll: "M.Tech Co-Coordinator",
        specialization: "Environmental Engineering",
        department: "Chemical Engineering",
        experience: "15+ years",
        researchAreas: ["Air Pollution", "Atmospheric Chemistry", "Environmental Modeling"],
        position: "Co-Coordinator",
      },
    ],
  },
  PhD: {
    title: "Doctoral Program",
    icon: Crown,
    color: "text-purple-400",
    bgColor: "from-purple-950/20",
    formula: "PhD",
    data: [
      {
        name: "Prof. Mani Bhushan",
        image: Mani,
        email: "mbhushan@che.iitb.ac.in",
        phone: "+91 (22) 2576 7214",
        url: "https://www.che.iitb.ac.in/index.php/faculty/mani-bhushan",
        roll: "PhD Coordinator",
        specialization: "Process Systems Engineering",
        department: "Chemical Engineering",
        experience: "18+ years",
        researchAreas: ["Process Control", "Fault Diagnosis", "Data Analytics"],
        position: "Coordinator",
      },
      {
        name: "Prof. Partha Sarathi Goswami",
        image: Partha,
        email: "psg@che.iitb.ac.in",
        phone: "+91 22 2576 7230",
        url: "https://www.che.iitb.ac.in/index.php/faculty/partha-sarathi-goswami",
        roll: "PhD Co-Coordinator",
        specialization: "Reaction Engineering",
        department: "Chemical Engineering",
        experience: "16+ years",
        researchAreas: ["Catalysis", "Reactor Modeling", "Chemical Kinetics"],
        position: "Co-Coordinator",
      },
      {
        name: "Prof. Ateeque Malani",
        image: malani,
        email: "malani@che.iitb.ac.in",
        phone: "+91-22-2576 7205",
        url: "https://www.che.iitb.ac.in/index.php/faculty/ateeque-malani",
        roll: "PhD Advisory Committee",
        specialization: "Molecular Simulation",
        department: "Chemical Engineering",
        experience: "14+ years",
        researchAreas: ["Molecular Dynamics", "Monte Carlo", "Adsorption"],
        position: "Committee Member",
      },
    ],
  },
}

const positionHierarchy = {
  Professor: { level: 1, icon: GraduationCap, color: "text-emerald-400", formula: "PROF" },
  Coordinator: { level: 2, icon: Crown, color: "text-violet-400", formula: "COORD" },
  "Co-Coordinator": { level: 3, icon: Users, color: "text-cyan-400", formula: "CO-ORD" },
  "Committee Member": { level: 4, icon: User, color: "text-gray-400", formula: "MEM" },
}

export default function Facad() {
  const [selectedCategory, setSelectedCategory] = useState("2024")
  const [hoveredCard, setHoveredCard] = useState(null)
  const [selectedFaculty, setSelectedFaculty] = useState(null)
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

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  const getTransform = (mult = 0.01) => {
    return { x, y }
  }

  const openFacultyModal = useCallback((faculty) => {
    setSelectedFaculty(faculty)
    setModalOpen(true)
  }, [])

  const closeFacultyModal = useCallback(() => {
    setModalOpen(false)
    setSelectedFaculty(null)
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

  // Enhanced faculty card with chemical theme and optimized hover
  const ChemicalFacultyCard = ({ faculty, index, categoryData }) => {
    const [isHovered, setIsHovered] = useState(false)

    const positionData = positionHierarchy[faculty.position] || {
      level: 4,
      icon: User,
      color: "text-gray-400",
      formula: "MEM",
    }

    return (
      <motion.div
        className="group relative"
        initial={{ opacity: 0,}}
        animate={{ opacity: 1, }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 transition-all duration-300 overflow-hidden min-h-[450px]"
          animate={{
            scale: isHovered ? 1.02 : 1,
            borderColor: isHovered ? "rgba(16, 185, 129, 0.3)" : "rgba(71, 85, 105, 0.5)",
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Chemical Reaction Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-cyan-400/5"
            // animate={{ opacity: isHovered ? 1 : 0 }}
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

          {/* Faculty Photo */}
          <div className="relative mb-4 overflow-hidden rounded-lg">
            <div className="aspect-square w-full bg-slate-700/30 rounded-lg overflow-hidden">
              <motion.img
                src={faculty.image || "/placeholder.svg"}
                alt={faculty.name}
                className="w-full h-full object-cover cursor-pointer"
                animate={{ scale: isHovered ? 1.02 : 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => openFacultyModal(faculty)}
              />
            </div>

            {/* Photo Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end justify-center pb-4"
              // animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              
            </motion.div>

            {/* Experience Badge */}
            {/* <div className="absolute top-2 left-2 bg-emerald-400/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-emerald-400 border border-emerald-400/30">
              {faculty.experience}
            </div> */}
          </div>

          {/* Faculty Info */}
          <div className="relative z-10 space-y-3">
            <motion.h3
              className="text-lg font-bold transition-colors duration-300"
              animate={{ color: isHovered ? "#10b981" : "#ffffff" }}
            >
              {faculty.name}
            </motion.h3>

            <motion.p
              className="text-sm font-semibold transition-colors duration-300"
              animate={{ color: isHovered ? "#22d3ee" : "#06b6d4" }}
            >
              {faculty.specialization}
            </motion.p>

            {faculty.roll && (
              <motion.p
                className="text-xs transition-colors duration-300"
                animate={{ color: isHovered ? "#a78bfa" : "#8b5cf6" }}
              >
                Roll Range: {faculty.roll}
              </motion.p>
            )}

            {/* Contact Info */}
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-emerald-400" />
                <span>{faculty.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={12} className="text-cyan-400" />
                <span className="truncate">{faculty.email}</span>
              </div>
            </div>

            {/* Research Areas */}
            {faculty.researchAreas && (
              <div className="pt-2">
                <p className="text-xs text-gray-500 mb-1">Research Areas:</p>
                <div className="flex flex-wrap gap-1">
                  {faculty.researchAreas.slice(0, 2).map((area, i) => (
                    <span key={i} className="text-xs bg-slate-700/50 px-2 py-1 rounded-full text-gray-300">
                      {area}
                    </span>
                  ))}
                  {faculty.researchAreas.length > 2 && (
                    <span className="text-xs text-gray-500">+{faculty.researchAreas.length - 2} more</span>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <motion.div
              className="flex gap-2 pt-2"
              // animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.a
                href={faculty.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 bg-emerald-400/20 hover:bg-emerald-400/30 rounded-lg text-emerald-400 text-xs transition-colors duration-300 flex-1 justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={12} />
                Profile
              </motion.a>
              <motion.button
                onClick={() => openFacultyModal(faculty)}
                className="flex items-center gap-2 px-3 py-1 bg-cyan-400/20 hover:bg-cyan-400/30 rounded-lg text-cyan-400 text-xs transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                style={{"cursor":"pointer"}}
              >
                <Eye size={12} />
                Details
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

  // Faculty Modal Component
  const FacultyModal = () => (
    <AnimatePresence>
      {modalOpen && selectedFaculty && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeFacultyModal}
        >
          <motion.div
            className="relative max-w-3xl w-full bg-slate-900/90 backdrop-blur-sm rounded-2xl border border-emerald-400/30 overflow-hidden"
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
                    src={selectedFaculty.image || "/placeholder.svg"}
                    alt={selectedFaculty.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-emerald-400/30"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-400">{selectedFaculty.name}</h3>
                    <p className="text-cyan-400 font-semibold text-lg">{selectedFaculty.specialization}</p>
                    <p className="text-gray-400">{selectedFaculty.department}</p>
                    <p className="text-sm text-violet-400">{selectedFaculty.experience} Experience</p>
                  </div>
                </div>
                <button
                  onClick={closeFacultyModal}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-xl"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-emerald-400 flex items-center gap-2">
                  <Phone size={20} />
                  Contact Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                    <Phone size={16} className="text-emerald-400" />
                    <div>
                      <p className="text-xs text-gray-400">Phone</p>
                      <p className="text-white">{selectedFaculty.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg">
                    <Mail size={16} className="text-cyan-400" />
                    <div>
                      <p className="text-xs text-gray-400">Email</p>
                      <p className="text-white text-sm">{selectedFaculty.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Roll Range */}
              {selectedFaculty.roll && (
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-emerald-400 flex items-center gap-2">
                    <Users size={20} />
                    Student Range
                  </h4>
                  <div className="p-3 bg-slate-800/50 rounded-lg">
                    <p className="text-violet-400 font-mono">{selectedFaculty.roll}</p>
                  </div>
                </div>
              )}

              {/* Research Areas */}
              {selectedFaculty.researchAreas && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-emerald-400 flex items-center gap-2">
                    <Microscope size={20} />
                    Research Areas
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedFaculty.researchAreas.map((area, index) => (
                      <div
                        key={index}
                        className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-emerald-400/30 transition-colors duration-300"
                      >
                        <p className="text-white">{area}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-4">
                <motion.a
                  href={selectedFaculty.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-emerald-400/20 hover:bg-emerald-400/30 rounded-lg text-emerald-400 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  Visit Faculty Page
                </motion.a>
                <motion.a
                  href={`mailto:${selectedFaculty.email}`}
                  className="flex items-center gap-2 px-6 py-3 bg-cyan-400/20 hover:bg-cyan-400/30 rounded-lg text-cyan-400 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={16} />
                  Send Email
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  const currentCategoryData = facultyData[selectedCategory]

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className="overflow-hidden">
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
          > */}
            {/* Chemical Formula */}
            {/* <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-white/80">
              {bubble.formula}
            </div> */}
          {/* </motion.div>
        ))} */}

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
                <GraduationCap size={40} className="text-emerald-400" />
              </motion.div>
              <h1 className="text-5xl lg:text-6xl font-black">
                KNOW YOUR{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  FACAD
                </span>
              </h1>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <BookOpen size={40} className="text-cyan-400" />
              </motion.div>
            </div>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Connect with your Faculty Advisors - Expert mentors guiding your academic journey
            </p>

            {/* Category Navigation */}
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
              {Object.entries(facultyData).map(([key, data]) => (
                <motion.button
                  key={key}
                  style={{"cursor":"pointer"}}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-lg border transition-colors duration-300 text-sm ${
                    selectedCategory === key
                      ? "bg-emerald-400/20 hover:bg-emerald-400/30 text-emerald-400 border-emerald-400/30"
                      : "bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 border-slate-600/50"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {key === "2024"
                    ? "2024 B.Tech"
                    : key === "2023"
                      ? "2023 B.Tech"
                      : key === "2022"
                        ? "2022 B.Tech"
                        : key === "2021"
                          ? "2021 B.Tech"
                          : key}
                </motion.button>
              ))}
            </div>

            {/* Chemical Equipment Decoration */}
            {/* <div className="flex justify-center items-center gap-6 opacity-60">
              <Flask size={24} className="text-emerald-400" />
              <TestTube size={24} className="text-cyan-400" />
              <Beaker size={24} className="text-violet-400" />
              <Atom size={24} className="text-teal-400" />
            </div> */}
          </motion.div>

          {/* Faculty Section */}
          <motion.div
            className="mb-20"
            // initial={{ opacity: 0, y: 50 }}
            // animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-12">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <currentCategoryData.icon size={32} className={currentCategoryData.color} />
              </motion.div>
              <h2 className="text-4xl font-bold">
                {selectedCategory} <span className={currentCategoryData.color}>{currentCategoryData.title}</span>
              </h2>
              {/* <motion.div
                className={`text-sm font-mono ${currentCategoryData.color}/60`}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                {currentCategoryData.formula}
              </motion.div> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentCategoryData.data.map((faculty, index) => (
                <ChemicalFacultyCard key={index} faculty={faculty} index={index} categoryData={currentCategoryData} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Faculty Modal */}
        <FacultyModal />
      </div>
    </div>
  )
}
