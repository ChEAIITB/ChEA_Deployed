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
        className="relative bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700/50"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Chemical Reaction Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-cyan-400/5 rounded-2xl" />

        {/* Floating Chemical Formulas */}
        {chemicalFormulas.slice(0, 4).map((formula, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-400/20 text-sm font-mono font-bold pointer-events-none"
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
        ))}

        {/* Header */}
        <div className="relative p-6 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/80 to-slate-700/60 backdrop-blur-sm rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-slate-700/50 rounded-full transition-colors text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4">
            <motion.div
              className={`bg-gradient-to-r ${categoryColors[event.category] || "from-emerald-500 to-cyan-600"} text-white p-4 rounded-xl shadow-lg relative`}
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              <IconComponent size={32} />
              {/* Chemical indicator */}
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <div className="flex-1">
              <motion.h2
                className="text-2xl font-bold text-emerald-400 mb-2"
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
                <span
                  className={`capitalize bg-gradient-to-r ${categoryColors[event.category]} bg-opacity-20 text-emerald-400 px-3 py-1 rounded-full font-medium border border-emerald-400/30`}
                >
                  {event.category}
                </span>
              </div>

              {/* Chemical Formula Badge */}
              <motion.div
                className="inline-block text-xs font-mono text-emerald-400/60 bg-slate-700/50 px-2 py-1 rounded-full"
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h3 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
              <Beaker size={20} className="text-cyan-400" />
              Event Description
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 bg-slate-700/20 p-4 rounded-lg border border-slate-600/30">
              {event.description}
            </p>
          </motion.div>

          {/* Links/Resources */}
          {event.links && event.links.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h3 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                <ExternalLink size={20} className="text-cyan-400" />
                Resources & Links
                <motion.div
                  className="text-xs bg-emerald-400/20 text-emerald-400 px-2 py-1 rounded-full border border-emerald-400/30"
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
                    className="group flex items-center gap-3 p-4 bg-slate-700/30 hover:bg-slate-600/40 rounded-xl transition-all text-left border border-slate-600/30 hover:border-emerald-400/30 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {/* Chemical reaction background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-cyan-400/5"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div
                      className={`relative p-2 rounded-lg ${
                        link.type === "video"
                          ? "bg-red-500/20 text-red-400 border border-red-400/30"
                          : link.type === "photos"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-400/30"
                            : "bg-emerald-500/20 text-emerald-400 border border-emerald-400/30"
                      }`}
                    >
                      {link.type === "video" ? <Play className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}

                      {/* Chemical particle */}
                      <motion.div
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
                      />
                    </div>

                    <div className="relative flex-1">
                      <div className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                        {link.label}
                      </div>
                      <div className="text-xs text-gray-500 capitalize flex items-center gap-2">
                        {link.type}
                        <span className="text-emerald-400/60">•</span>
                        <span className="font-mono text-emerald-400/40">
                          {chemicalFormulas[index % chemicalFormulas.length]}
                        </span>
                      </div>
                    </div>

                    {/* Hover indicator */}
                    <motion.div
                      className="w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Chemical Particles Animation */}
          <div className="absolute top-4 right-4 flex gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-emerald-400/40 rounded-full"
                animate={{
                  scale: [0.5, 1.2, 0.5],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        {/* Footer with Chemical Theme */}
        <div className="relative p-6 border-t border-slate-700/50 bg-gradient-to-r from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-b-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <motion.div
                className="w-2 h-2 bg-emerald-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
              <span>Chemical Engineering Association</span>
              <span className="font-mono text-emerald-400/60">{chemicalFormulas[0]}</span>
            </div>

            <motion.div
              className="text-xs font-mono text-emerald-400/40"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              ChEA Events
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
