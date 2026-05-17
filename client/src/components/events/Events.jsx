"use client"
import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { EventCard } from "./eventCard.jsx"
import { EventDetailModal } from "./EventDetailModel.jsx"
import { HeroSlider } from "./HeroSlider.jsx"
import {
  GraduationCap,
  Theater,
  BookOpen,
  Mountain,
  Trophy,
  Users2,
  PartyPopper,
  MessageCircle,
  Award,
  Film,
  Beaker,
  Microscope,
  FlaskConical,
  TestTube,
} from "lucide-react"

// Comprehensive event data
const eventData = {
  "2025-2026": [
    {
      id: "valfi-2025",
      title: "Valfi 2025",
      description:
        "A fun-filled event organized as a farewell to all 4th-year students, celebrating the memories they've created during their time here.",
      image: "valfi25-1.JPG",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1GYrakAymNf_SUK_nvY4gVilx-fsqH4iA",
          label: "View Photos",
        },
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/17oRbUFsbMEVvogk-FDcagFRpaLg0SIU1",
          label: "Photoshoot",
        },
      ],
      category: "farewell",
      year: "2025",
    },
    {
      id: "traditional-day-2025",
      title: "Traditional Day 2025",
      description:
        "A fun, informal event which gives you a chance to meet your roll baap/maa/beta/beti. Posings and photoshoots in traditionals are the main highlight.",
      image: "traditionalday_2025.JPG",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1bhAgkbJCdnzYf_0jq8YCMEGi7vn0Ez_T?usp=drive_link",
          label: "View Photos",
        },
      ],
      category: "cultural",
      year: "2025",
    },
  ],
  "2024-2025": [
    {
      id: "valfi-2024",
      title: "Valfi 2024",
      description:
        "A fun-filled event organized as a farewell to all 4th-year students, celebrating the memories they've created during their time here.",
      image: "valfi24.JPG",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/15dtTbKXWF2B8b0SwNweJBT5kXc31I0Ab",
          label: "View Photos",
        },
        { type: "video", url: "https://www.youtube.com/watch?v=STL94I3N2-I&t=259s", label: "Batch Video" },
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1--0CEkdOUdTtk_2sbXRw1YTXW6Hm7ffM",
          label: "Photoshoot",
        },
      ],
      category: "farewell",
      year: "2024",
    },
    {
      id: "traditional-day-2024",
      title: "Traditional Day 2024",
      description:
        "A fun, informal event which gives you a chance to meet your roll baap/maa/beta/beti. The event takes place at Jal Vihar in the campus.",
      image: "traday23.JPG",
      links: [
        {
          type: "document",
          url: "https://docs.google.com/document/d/1h8TyUc4i_9YaL1ubwAcL6Bdlyq54v3zcSsoIw5r8x2I/edit",
          label: "View Details",
        },
      ],
      category: "cultural",
      year: "2024",
    },
    {
      id: "freshie-oreo-2024",
      title: "Freshers' Orientation 2024",
      description:
        "This event serves as the first major interaction between the council and the freshies. The event comes packed full of games and performances.",
      image: "Freshie24.JPG",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1pwscWcJ-XbILXpzA3pxFIYH8sAoI-OpC",
          label: "View Photos",
        },
      ],
      category: "orientation",
      year: "2024",
    },
    {
      id: "core-talks-2024",
      title: "Core Talks 2024",
      description: "Interactive sessions conducted annually with alums from Industry and Higher Studies fields.",
      image: "ct1.webp",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/u/0/folders/1LGb47fzAmsm88yuHRRGIkMxra4RJynIE",
          label: "View Photos",
        },
      ],
      category: "academic",
      year: "2024",
    },
    {
      id: "department-trips-2024",
      title: "Department Trips 2024",
      description:
        "The trips are a means of taking students out of their academic stress. Trek and camping experiences for bonding.",
      image: "img25-v5.jpg",
      links: [
        { type: "photos", url: "https://photos.app.goo.gl/hTF3X2RW2o4wrQ9r6", label: "Trek 2024" },
        {
          type: "photos",
          url: "https://drive.google.com/drive/u/0/folders/1yhNsiArAuN2pW8OSzm54z8Cx_O0kq5VA",
          label: "Pawna Lake",
        },
      ],
      category: "adventure",
      year: "2024",
    },
    {
      id: "sport-events-2024",
      title: "Sport Events 2024",
      description:
        "ChEA organises various sports events including Football, Cricket tournaments, Badminton and Table Tennis.",
      image: "batm25-3.jpg",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1-FiAP1o4O34jKQuUBk4UHZ-alcbcnvWY",
          label: "Badminton 2025",
        },
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1Saz1zyzKUOV0Kt1SK42N8PbLuv57FXAB?usp=sharing",
          label: "Mixed Cricket League",
        },
      ],
      category: "sports",
      year: "2024",
    },
  ],
  "Pre-2024": [
    {
      id: "valfi-2023",
      title: "Valfi 2023",
      description:
        "Valedictory Function celebrating the memories of 4th-year students with heartfelt interactions and games.",
      image: "valfi23.JPG",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/19M9ERXGJZjver42U2pLdvDWPYMZe3oM6",
          label: "View Photos",
        },
        { type: "video", url: "https://youtu.be/hNOgnAiZAno?si=M5EDdw5scJz3DCX_", label: "Batch Video" },
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1-0inbHghFZcsWBi2HEtpWavbhu-VjiOj",
          label: "Photoshoot",
        },
      ],
      category: "farewell",
      year: "2023",
    },
    {
      id: "valfi-2022",
      title: "Valfi 2022",
      description:
        "Valedictory Function celebrating the memories of 4th-year students with heartfelt interactions and games.",
      image: "vf1.JPG",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/14UbucO64AR8velpzHzI_3lvUqMTsGF7B",
          label: "View Photos",
        },
        { type: "video", url: "https://youtu.be/etxKrIU5JlQ?feature=shared", label: "Batch Video" },
      ],
      category: "farewell",
      year: "2022",
    },
    {
      id: "valfi-2018",
      title: "Valfi 2018",
      description: "Valedictory Function celebrating the memories of 4th-year students.",
      image: "vf2.JPG",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1vTii8wFscKVLqNiMjZbjalDDFX_j6IR7",
          label: "View Photos",
        },
      ],
      category: "farewell",
      year: "2018",
    },
    {
      id: "freshie-oreo-2023",
      title: "Freshers' Orientation 2023",
      description: "This event serves as the first major interaction between the council and the freshies.",
      image: "fo23.JPG",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1Kl4CoRlSjLrrudFnKUiFumy6erjBzzv2",
          label: "View Photos",
        },
      ],
      category: "orientation",
      year: "2023",
    },
    {
      id: "freshie-oreo-2022",
      title: "Freshers' Orientation 2022",
      description: "This event serves as the first major interaction between the council and the freshies.",
      image: "fo4.JPG",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/u/0/folders/1EZc6EWCndGsaiAJUVKcgsUutZP2hbxMp",
          label: "View Photos",
        },
      ],
      category: "orientation",
      year: "2022",
    },
    {
      id: "freshie-oreo-2019",
      title: "Freshers' Orientation 2019",
      description: "This event serves as the first major interaction between the council and the freshies.",
      image: "fo3.JPG",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1EZ5fkyQZFzsXH83eIMMVDUyWTX2vxE9z",
          label: "View Photos",
        },
      ],
      category: "orientation",
      year: "2019",
    },
    {
      id: "traditional-day-2023",
      title: "Traditional Day 2023",
      description: "A fun, informal event which gives you a chance to meet your roll baap/maa/beta/beti.",
      image: "td4.JPG",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1-YayQt036kt_K5OfxhHkfUWfQFnYUion",
          label: "View Photos",
        },
      ],
      category: "cultural",
      year: "2023",
    },
    {
      id: "traditional-day-2022",
      title: "Traditional Day 2022",
      description: "A fun, informal event which gives you a chance to meet your roll baap/maa/beta/beti.",
      image: "td3.JPG",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1E4og9_sK-HJIFuqUxGUQ4vIqe0mwryQ-",
          label: "View Photos",
        },
      ],
      category: "cultural",
      year: "2022",
    },
    {
      id: "traditional-day-2019",
      title: "Traditional Day 2019",
      description: "A fun, informal event which gives you a chance to meet your roll baap/maa/beta/beti.",
      image: "td2.JPG",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1Mu1AJKKNTD1C5DXfPzHzFiW6rlBZLVR-",
          label: "View Photos",
        },
      ],
      category: "cultural",
      year: "2019",
    },
    {
      id: "traditional-day-2017",
      title: "Traditional Day 2017",
      description: "A fun, informal event which gives you a chance to meet your roll baap/maa/beta/beti.",
      image: "td1.JPG",
      links: [
        {
          type: "photos",
          url: "https://onedrive.live.com/?authkey=%21AMXBuXlcDJavTno&id=30B2A03F2C43CA04%21107&cid=30B2A03F2C43CA04",
          label: "View Photos",
        },
      ],
      category: "cultural",
      year: "2017",
    },
    {
      id: "cinegala-2023",
      title: "Cinegala 2023",
      description:
        "A cinematic celebration bringing together the department community for an evening of entertainment.",
      image: "cinegala.JPG",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1TsbisNNhZACejhhHzSd7QYYXicsaAmn5",
          label: "View Photos",
        },
      ],
      category: "entertainment",
      year: "2023",
    },
    {
      id: "la-la-land-2022",
      title: "La La Land 2022",
      description: "A musical entertainment event bringing joy and celebration to the department community.",
      image: "m1.JPG",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/u/0/folders/1qhcPvuP8b2n1IdGAiGNZ-EMxIq2x-923",
          label: "View Photos",
        },
      ],
      category: "entertainment",
      year: "2022",
    },
    {
      id: "career-talk-harmit-2022",
      title: "Discovering Your Career - Dr Harmit Singh Malik",
      description: "Career guidance session by Dr Harmit Singh Malik helping students discover their career paths.",
      image: "m2.JPG",
      links: [
        {
          type: "video",
          url: "https://www.youtube.com/watch?v=5PUEiYRwR38",
          label: "Watch Video",
        },
      ],
      category: "academic",
      year: "2022",
    },
    {
      id: "career-talk-premnath-2022",
      title: "Discovering Your Career - Dr. V Premnath",
      description: "Career guidance session by Dr. V Premnath providing insights into career development.",
      image: "m3.JPG",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/u/0/folders/1xfp3uh0V84bN1pCI8vJAjODrud2qFu1E",
          label: "View Photos",
        },
        {
          type: "video",
          url: "https://www.youtube.com/watch?v=LSfwfLX7nM0",
          label: "YouTube Live",
        },
      ],
      category: "academic",
      year: "2022",
    },
    {
      id: "chem-chho-2021",
      title: "Chem Chho 2021",
      description: "A fun chemistry-themed event bringing together students for entertainment and learning.",
      image: "chemcho.jpg",
      links: [],
      category: "entertainment",
      year: "2021",
    },
    {
      id: "know-your-profs",
      title: "Know Your Profs",
      description:
        "A video series wherein professors from the department are invited to chat regarding their college days and experiences in academia.",
      image: "hod25.jpg",
      links: [
        { type: "video", url: "https://www.youtube.com/embed/sRe9oNQ22DE?si=tBdBOGA-W_IwC0Rb", label: "Prof VM Naik" },
        {
          type: "video",
          url: "https://www.youtube.com/embed/s-DmxM8kAz4?si=KFZcVCnvm8gHJwdA",
          label: "Prof. Mahajani & Prof. Nabar",
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/NzJ6aFdCkoY?si=5UTG5cNiMPfnOvjR",
          label: "KYP - A Revival",
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/Dy_gJl7yQiQ?si=cnp6c-8SGhWgmmDz",
          label: "Prof. Devang Khakhar",
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/TGdk6jbF2RQ?si=atQwHED-z3yPhwyy",
          label: "Prof. MO Garg",
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/7WLwNrT5P4s?si=5kbYv4qKK5JRVrcW",
          label: "Prof. Partha S Goswami",
        },
      ],
      category: "academic",
      year: "2023",
      type: "video-series",
    },
    {
      id: "time-capsule",
      title: "Time Capsule",
      description:
        "The Time Capsule - The 25 year Journey, where distinguished alumni interact with students providing unparalleled professional experience.",
      image: "image1.webp",
      links: [
        {
          type: "video",
          url: "https://www.youtube.com/embed/Zrc0L-1uPOQ?si=tTpQ7CAfShzcBsQY",
          label: "Time Capsule 2022",
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/QpG4g8WW8C0?si=lP2VgwxN86Ry3deW",
          label: "Time Capsule 2021",
        },
      ],
      category: "alumni",
      year: "2022",
      type: "video-series",
    },
    {
      id: "panel-discussions",
      title: "Panel Discussions",
      description:
        "The Changing Role Of Chemical Engineers - discussions where alums discuss changes in the global spectrum.",
      image: "image9.webp",
      links: [
        {
          type: "video",
          url: "https://www.youtube.com/embed/7tafF43uU14?si=OU18LNkt7dSGNRoe",
          label: "Future of Medical Technologies",
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/FfqxNoF9S0M?si=eNCth8TNoesN-fJt",
          label: "Evolution of Energy",
        },
        { type: "video", url: "https://www.youtube.com/embed/khkN5WjD9qM?si=XnkjkAnBjbxU2Nfv", label: "Air Quality" },
        {
          type: "video",
          url: "https://www.youtube.com/embed/Y-74E7tjj70?si=58_NA6ktsiyyXbKg",
          label: "Pharma and Life Sciences",
        },
      ],
      category: "discussion",
      year: "2021",
      type: "video-series",
    },
    {
      id: "core-talks-2021",
      title: "Core Talks 2021",
      description: "Interactive sessions with alumni from Industry and Higher Studies providing career guidance.",
      image: "ct2.webp",
      links: [
        {
          type: "video",
          url: "https://www.youtube.com/embed/67ns_-mcH88?si=3eYnE4TBK09G7CKr",
          label: "Higher Studies 2021",
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/0ZvGZ378sgg?si=D9MIg9iRuvc7HCDu",
          label: "Industry 2021",
        },
      ],
      category: "academic",
      year: "2021",
      type: "video-series",
    },
    {
      id: "core-talks-2020",
      title: "Core Talks 2020",
      description: "Interactive sessions with alumni from Industry and Higher Studies providing career guidance.",
      image: "ct3.webp",
      links: [
        {
          type: "video",
          url: "https://www.youtube.com/embed/ww9EEMq6H8U?si=UAish7KLJTMd_Zgc",
          label: "Industry 2020",
        },
        {
          type: "video",
          url: "https://www.youtube.com/embed/QpG4g8WW8C0?si=yhzbshgGuaLjLvF2",
          label: "Higher Studies 2020",
        },
      ],
      category: "academic",
      year: "2020",
      type: "video-series",
    },
    {
      id: "department-trips-2022",
      title: "Department Trips 2022",
      description: "Bhandardara and Sundhan Valley trek providing students relief from academic stress.",
      image: "dp2.JPG",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1WV33Hhyyc2yPNKEjhaOL00vHsMBEbD93",
          label: "View Photos",
        },
      ],
      category: "adventure",
      year: "2022",
    },
    {
      id: "department-trips-2019",
      title: "Department Trips 2019",
      description: "Ratangarh Trek and other adventure activities for department bonding.",
      image: "dp3.JPG",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1WPWDbkqfbTxw0KoJhO8CHOmePDVNe0sD",
          label: "Ratangarh Trek",
        },
        {
          type: "photos",
          url: "https://photos.google.com/share/AF1QipNx8I0f-3HhERC04352XSx9xauF8SdZikWxQikycfLT1c_mlu0rxQdrRjhZl5hOHw?key=bWxUU2l3Y0QtNnpBX2tEZW9pb2JOQmFlR2lXeUdR",
          label: "Kashid Beach & Murud Janjira Fort",
        },
      ],
      category: "adventure",
      year: "2019",
    },
    {
      id: "sport-events-2023",
      title: "Sport Events 2023",
      description: "Various sports tournaments including Cricket, Table Tennis and other competitive events.",
      image: "sp11.jpg",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1KdfxKihSwSaNWJbyvlFDFhXmo4frye87",
          label: "Table Tennis 2023",
        },
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1K3A4okJZ9gdLu_smJ5Fc2U_fhTx8rZas?usp=sharing",
          label: "Mixed Cricket League 2023",
        },
      ],
      category: "sports",
      year: "2023",
    },
    {
      id: "sport-events-2019",
      title: "Sport Events 2019",
      description: "Football League, Cricket Tournament and Badminton Open providing fitness and competition.",
      image: "spe1.webp",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/u/0/folders/1lE8o7UKKATP4ZV2jZh-Vuq39Cxsy4rWU?fbclid=IwAR2ykm4JseNjIXGPF63ofPk0AFzZByxPalTWlqxgKLzltGTOwt9RFvYOypg",
          label: "Football League 2019",
        },
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/16_4CrJnpdPc7X6QslsW9Q1CwCLcfGjwV?fbclid=IwAR2_2SzFSIEABM2mKrfjOJP3zmMFefZDV0QcA6Hya5hwi_XsNQVhpuFQ6pk",
          label: "Cricket Tournament 2019",
        },
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1WPWDbkqfbTxw0KoJhO8CHOmePDVNe0sD",
          label: "Badminton Open 2019",
        },
      ],
      category: "sports",
      year: "2019",
    },
    {
      id: "sport-events-2018",
      title: "Sport Events 2018",
      description: "Table Tennis Open and other indoor sports competitions.",
      image: "spe4.webp",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1s0Nd2CYrSq0yuZZGC-WO5aUHIlW9FdeI",
          label: "Table Tennis Open 2018",
        },
      ],
      category: "sports",
      year: "2018",
    },
    {
      id: "alumni-reunion",
      title: "Alumni Reunion",
      description:
        "A 3-day event where we are fortunate to have the silver jubilee batch of Chemical Engineering Alumni grace the department.",
      image: "ar5.jpg",
      links: [
        {
          type: "photos",
          url: "https://drive.google.com/drive/folders/1k0tm9YYlic5nKMIqb2iwDOpMuq_toydG",
          label: "Alumni Reunion 2022",
        },
        {
          type: "photos",
          url: "https://drive.google.com/drive/u/0/folders/1-6Co-8pCrEc47X0qpyry3pdVPV2uEg6U",
          label: "Alumni Reunion 2021",
        },
      ],
      category: "alumni",
      year: "2022",
    },
    {
      id: "convocation",
      title: "Convocation",
      description:
        "The pandemic took away the opportunity for Convocation. They were able to reconnect and relieve that core memory thanks to the wonderful ceremony.",
      image: "convo4.JPG",
      links: [
        {
          type: "photos",
          url: "https://photos.google.com/share/AF1QipMOloY9bKgm9E58ACuw5Xek9Fg0zybdumu4prx_Ayk3P7mtjOLfl5ftK8WyDu62VQ?key=RHFTVkVPcmhEZENEMXpvQUxQYnpjU1ZUaVVfV193",
          label: "Convocation 2022",
        },
        {
          type: "photos",
          url: "https://drive.google.com/drive/u/0/folders/1-6Co-8pCrEc47X0qpyry3pdVPV2uEg6U",
          label: "Convocation 2020 & 2021",
        },
      ],
      category: "ceremony",
      year: "2022",
    },
  ],
}


export default function ChemicalEvents() {
  const [selectedYear, setSelectedYear] = useState("2024-2025")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const handleYearChange = useCallback(
    async (year) => {
      if (year === selectedYear) return
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 300))
      setSelectedYear(year)
      setIsLoading(false)
    },
    [selectedYear],
  )

  const handleEventClick = useCallback((event) => {
    setSelectedEvent(event)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedEvent(null)
  }, [])

  const currentEvents = eventData[selectedYear] || []

  return (
    <div style={{background:"#0b1e38"}} className="min-h-screen pt-20 relative overflow-hidden">

      {/* <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/20 via-cyan-800/20 to-teal-800/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillrule=%22evenodd%22%3E%3Cg fill=%22%2310b981%22 fillOpacity=%22.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat" />
      </div> */}

      <div className="absolute top-0 left-0 right-0 h-px " />

      <div className="relative z-10 mx-auto py-8" style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <HeroSlider />

        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-xl p-2 flex gap-2 border border-slate-700/50">
            {Object.keys(eventData).map((year) => (
              <motion.button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedYear === year
                    ? "bg-gradient-to-r from-[#3B6FC4] to-[#4A8DFF] text-white shadow-lg shadow-[#4A8DFF]/10"
                    : "text-gray-300 hover:text-[#4A8DFF] hover:bg-[#4A8DFF]/10"
                }`}
                animate={{
                  scale: selectedYear === year ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{cursor:"pointer"}}
              >
                {year}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              className="flex justify-center items-center h-64"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                <span className="text-emerald-400 font-medium">Loading events...</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={selectedYear}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {currentEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} onEventClick={handleEventClick} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {!isLoading && currentEvents.length === 0 && (
          <motion.div
            className="text-center py-16 bg-slate-800/30 backdrop-blur-sm rounded-2xl mx-4 border border-slate-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-6xl mb-4">🧪</div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-2">No Events Found</h3>
            <p className="text-gray-300">Events for this period are being planned. Stay tuned!</p>
          </motion.div>
        )}
      </div>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && <EventDetailModal event={selectedEvent} onClose={handleCloseModal} />}
      </AnimatePresence>

      {/* Bottom Chemical Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
    </div>
  )
}
