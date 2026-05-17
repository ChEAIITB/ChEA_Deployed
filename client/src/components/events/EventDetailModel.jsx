"use client"
import { useCallback } from "react"
import { motion } from "framer-motion"
import {
  Calendar,
  ExternalLink,
  Play,
  X,
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
} from "lucide-react"

const categoryColors = {
  farewell: "from-violet-600 to-purple-700",
  cultural: "from-cyan-500 to-blue-600",
  academic: "from-emerald-500 to-teal-600",
  adventure: "from-teal-500 to-cyan-600",
  sports: "from-orange-500 to-red-600",
  alumni: "from-purple-600 to-pink-700",
  orientation: "from-emerald-600 to-cyan-700",
  discussion: "from-blue-600 to-indigo-700",
  ceremony: "from-rose-600 to-pink-700",
  entertainment: "from-fuchsia-600 to-purple-700",
}

const categoryIconComponents = {
  farewell: GraduationCap,
  cultural: Theater,
  academic: BookOpen,
  adventure: Mountain,
  sports: Trophy,
  alumni: Users2,
  orientation: PartyPopper,
  discussion: MessageCircle,
  ceremony: Award,
  entertainment: Film,
}

// const chemicalFormulas = ["Party", "Maaje", "Dance", "Lectures", "Exams", "Sports"]
const chemicalFormulas = []

export const EventDetailModal = ({ event, onClose }) => {
  const handleLinkClick = useCallback((url) => {
    window.open(url, "_blank")
  }, [])

  const IconComponent = categoryIconComponents[event.category] || Beaker

  return (
    <motion.div
  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  onClick={onClose}
>
  <motion.div
    className="relative bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#315D9C]/20"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.8, opacity: 0 }}
    onClick={(e) => e.stopPropagation()}
  >
    {/* Chemical Reaction Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#315D9C]/5 via-transparent to-[#4A8DFF]/5 rounded-2xl" />

    {/* Floating Chemical Formulas */}
    {/* {chemicalFormulas.slice(0, 4).map((formula, i) => (
      <motion.div
        key={i}
        className="absolute text-[#4A8DFF]/20 text-sm font-mono font-bold pointer-events-none"
        style={{
          top: `${15 + i * 20}%`,
          right: `${10 + i * 5}%`,
        }}
        animate={{
          rotate: [0, 5, -5, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4 + i * 0.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {formula}
      </motion.div>
    ))} */}

    {/* Header */}
    <div className="relative p-6 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/80 to-slate-700/60 backdrop-blur-sm rounded-t-2xl">
      <button
        onClick={onClose}
        style={{cursor:'pointer'}}
        className="absolute top-4 right-4 p-2 hover:bg-slate-700/50 rounded-full transition-colors text-gray-400 hover:text-white"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="flex items-start gap-4">
        <motion.div
          className="bg-gradient-to-r from-[#315D9C] to-[#4A8DFF] text-white p-4 rounded-xl shadow-lg shadow-[#315D9C]/20 relative"
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          <IconComponent size={32} />

          {/* Chemical indicator */}
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-[#4A8DFF] rounded-full"
            style={{display:"none"}}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <div className="flex-1">
          <motion.h2
            className="text-2xl font-bold text-white mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {event.title}
          </motion.h2>

          <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {event.year}
            </span>

            <span className="capitalize bg-[#315D9C]/10 text-[#adcbff] px-3 py-1 rounded-full font-medium border border-[#315D9C]/30">
              {event.category}
            </span>
          </div>

          {/* Chemical Formula Badge */}
          <motion.div
            className="inline-block text-xs font-mono text-[#4A8DFF]/60 bg-slate-700/50 px-2 py-1 rounded-full"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            {chemicalFormulas[Math.floor(Math.random() * chemicalFormulas.length)]}
          </motion.div>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="relative p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold text-[#fff] mb-4 flex items-center gap-2">
          <Beaker size={20} className="text-[#4A8DFF]" />
          Event Description
        </h3>

        <p className="text-gray-300 leading-relaxed mb-6 bg-slate-700/20 p-4 rounded-lg border border-slate-600/30">
          {event.description}
        </p>
      </motion.div>

      {/* Links/Resources */}
      {event.links && event.links.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-[#fff] mb-4 flex items-center gap-2">
            <ExternalLink size={20} className="text-[#4A8DFF]" />
            Resources & Links

            <motion.div
              className="text-xs bg-[#315D9C]/20 text-[#4A8DFF] px-2 py-1 rounded-full border border-[#315D9C]/30"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              {event.links.length} items
            </motion.div>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {event.links.map((link, index) => (
              <motion.button
                key={index}
                onClick={() => handleLinkClick(link.url)}
                className="group flex items-center gap-3 p-4 bg-slate-700/30 hover:bg-slate-600/40 rounded-xl transition-all text-left border border-slate-600/30 hover:border-[#315D9C]/30 relative overflow-hidden"
                whileHover={{ scale: 1.01 }}
                style={{cursor:'pointer'}}
                whileTap={{ scale: 0.99 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {/* Chemical reaction background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#315D9C]/5 to-[#4A8DFF]/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div
                  className={`relative p-2 rounded-lg ${
                    link.type === "video"
                      ? "bg-red-500/20 text-red-400 border border-red-400/30"
                      : link.type === "photos"
                      ? "bg-[#315D9C]/20 text-[#fff] border border-[#315D9C]/30"
                      : "bg-[#315D9C]/20 text-[#fff] border border-[#315D9C]/30"
                  }`}
                >
                  {link.type === "video" ? (
                    <Play className="w-4 h-4" />
                  ) : (
                    <ExternalLink className="w-4 h-4" />
                  )}

                  {/* Chemical particle */}
                  {/* <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-current rounded-full opacity-60"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.3,
                    }}
                  /> */}
                </div>

                <div className="relative flex-1">
                  <div className="font-medium text-white group-hover:text-[#fff] transition-colors">
                    {link.label}
                  </div>

                  <div className="text-xs text-gray-500 capitalize flex items-center gap-2">
                    {link.type}

                    <span className="text-[#fff]/60">•</span>

                    <span className="font-mono text-[#fff]/40">
                      {/* {chemicalFormulas[index % chemicalFormulas.length]} */}
                    </span>
                  </div>
                </div>

                {/* Hover indicator */}
                {/* <motion.div
                  className="w-2 h-2 bg-[#4A8DFF] rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                /> */}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

    </div>

  </motion.div>
</motion.div>
  )
}
