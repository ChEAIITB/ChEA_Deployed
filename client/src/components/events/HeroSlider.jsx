"use client"
import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Beaker, Microscope, FlaskConical, TestTube } from "lucide-react"

const heroIcons = [
  { icon: Beaker, color: "from-green-600 to-blue-700" },
  { icon: Microscope, color: "from-blue-600 to-cyan-700" },
  { icon: FlaskConical, color: "from-cyan-600 to-purple-700" },
  { icon: TestTube, color: "from-purple-600 to-green-700" },
]

const chemicalFormulas = []
// const chemicalFormulas = ["Party", "Maaje", "Dance", "Lectures", "Exams", "Sports"]

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroIcons.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroIcons.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroIcons.length) % heroIcons.length)
  }, [])

  return (
    <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl mb-12 bg-gradient-to-br from-slate-700 to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800/30 via-blue-900/20 to-purple-900/20 opacity-50" />

      {/* Slides with SVG Icons */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
        >
          {(() => {
            const SlideIcon = heroIcons[currentSlide].icon

            return (
              <motion.div
                className={`bg-gradient-to-br ${heroIcons[currentSlide].color} p-16 rounded-full shadow-2xl`}
                animate={{ scale: [1, 1.02, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                <SlideIcon className="w-24 h-24 text-white" />
              </motion.div>
            )
          })()}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 via-blue-900/40 to-purple-900/60" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroIcons.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-cyan-400 scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Floating Chemical Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/30 font-bold text-lg"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3,
          }}
        >
          {chemicalFormulas[i]}
        </motion.div>
      ))}

      {/* Title Overlay */}
      <div className="absolute bottom-8 left-8">
        <motion.h1
          className="text-4xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          ChEA <span className="text-cyan-300">EVENTS</span>
        </motion.h1>
        <motion.p
          className="text-gray-200 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Celebrating Chemicals, Engineering & Community
        </motion.p>
      </div>
    </div>
  )
}
