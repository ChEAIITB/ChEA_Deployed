"use client"
import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import {
  ExternalLink,
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
  Calendar,
  Eye,
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

const categoryIcons = {
  farewell: "🎓",
  cultural: "🎭",
  academic: "📚",
  adventure: "🏔️",
  sports: "⚽",
  alumni: "👥",
  orientation: "🎉",
  discussion: "💬",
  ceremony: "🎖️",
  entertainment: "🎬",
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

const chemicalFormulas = ["C₆H₁₂O₆", "H₂SO₄", "NaCl", "CO₂", "NH₃", "CH₄", "C₂H₅OH", "CaCO₃"]

export const EventCard = ({ event, index, onEventClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = useCallback(() => setIsHovered(true), [])
  const handleMouseLeave = useCallback(() => setIsHovered(false), [])

  const handleCardClick = useCallback(() => {
    onEventClick(event)
  }, [event, onEventClick])

  return (
    <motion.div
      className="group relative max-w-sm mx-auto"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <motion.div
        className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer w-full group-hover:border-emerald-400/30"
        animate={{
          scale: isHovered ? 1.02 : 1,
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
          className="absolute top-3 right-3"
          animate={{ opacity: isHovered ? 0.8 : 0.4 }}
          transition={{ duration: 0.3 }}
        >
          {(() => {
            const IconComponent = categoryIconComponents[event.category] || Beaker
            return <IconComponent size={20} className="text-emerald-400" />
          })()}
        </motion.div>

        {/* Chemical Formula */}
        <motion.div
          className="absolute top-1 left-1 text-xs font-mono text-emerald-400/60"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          {chemicalFormulas[index % chemicalFormulas.length]}
        </motion.div>

        {/* Event Icon Container */}
        <div className="relative mb-3 overflow-hidden rounded-lg">
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border border-slate-600/30 rounded-lg">
            {(() => {
              const IconComponent = categoryIconComponents[event.category] || Beaker
              return (
                <motion.div
                  className={`bg-gradient-to-br ${categoryColors[event.category]} p-6 rounded-full shadow-2xl`}
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                    rotate: isHovered ? 5 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent className="w-12 h-12 text-white" />
                </motion.div>
              )
            })()}
          </div>

          {/* Chemical Overlay Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-center justify-center"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={() => onEventClick(event)}
              className="bg-emerald-400/20 backdrop-blur-sm px-4 py-2 rounded-full text-emerald-400 border border-emerald-400/30 flex items-center gap-1 text-sm font-medium"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye size={14} />
              View
            </motion.button>
          </motion.div>

          {/* Event Type Badge */}
          <div
            className={`absolute top-1.5 left-1.5 bg-gradient-to-r ${categoryColors[event.category]} backdrop-blur-sm px-2 py-0.5 rounded-full text-xs text-white border border-white/30`}
          >
            {event.category}
          </div>

          {/* Year Badge */}
          <div className="absolute bottom-1.5 right-1.5 bg-slate-700/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-gray-300 flex items-center gap-1 border border-slate-600/50">
            <Calendar size={10} />
            {event.year}
          </div>

          {/* Links Count Badge */}
          <div className="absolute bottom-1.5 left-1.5 bg-emerald-400/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-emerald-400 border border-emerald-400/30">
            {event.links?.length || 0}
          </div>
        </div>

        {/* Event Info */}
        <div className="relative z-10">
          <motion.h3
            className="text-lg font-bold text-white mb-3 transition-colors duration-300 line-clamp-2 group-hover:text-emerald-400"
            animate={{ color: isHovered ? "#10b981" : "#ffffff" }}
          >
            {event.title}
          </motion.h3>

          <p className="text-sm text-gray-300 mb-3 line-clamp-3">
            {event.description.length > 80 ? `${event.description.substring(0, 80)}...` : event.description}
          </p>

          <div className="flex items-center gap-1 mb-4 text-sm text-gray-400">
            <span className="capitalize">{event.category}</span>
            <span className="text-gray-500">•</span>
            <span>{event.links?.length || 0} resources</span>
          </div>

          {/* Action Buttons */}
          <motion.div className="flex gap-2" animate={{ opacity: isHovered ? 1 : 0.8 }} transition={{ duration: 0.3 }}>
            <motion.button
              onClick={() => onEventClick(event)}
              className="flex items-center gap-1 px-3 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg text-white text-sm font-medium transition-colors duration-300 flex-1 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye size={14} />
              View Details
            </motion.button>
            <motion.button
              onClick={() => onEventClick(event)}
              className="flex items-center gap-1 px-3 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-gray-300 text-sm font-medium transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={14} />
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

        {/* Chemical Particles */}
        <motion.div
          className="absolute bottom-3 right-3 flex gap-0.5"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-emerald-400/60 rounded-full"
              animate={{
                scale: isHovered ? [1, 1.5, 1] : 1,
                opacity: isHovered ? [0.5, 1, 0.5] : 0,
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
