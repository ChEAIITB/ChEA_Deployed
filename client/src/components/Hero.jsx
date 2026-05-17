"use client"
import { useEffect } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { FlaskRoundIcon as Flask, TestTube, Beaker, Atom, Zap, Droplets, Factory, Flame, Wind, Gauge, Settings, AlertTriangle } from 'lucide-react'
import loading from "../assets/images/loading.png"

export default function Hero() {
  
  return (
    <div className="overflow-hidden">
      <div className="relative  via-emerald-950 to-cyan-950 text-white" style={{background:'#0b1e38'}}>
        <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16 py-20 relative" style={{ zIndex: 20 }}>
          <div className="w-full lg:w-1/2 space-y-6 ml-7 relative" style={{ zIndex: 30 }}>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight"> 
                CHEMICAL Engineering <br />
                <span className="text-transparent bg-clip-text " style={{color:"#70b5ed"}}>
                  Association, IIT Bombay
                </span>
              </h1>
              <div className="w-30 h-1 bg-[#274B7A]/70 my-8" />
            
            <p className="text-lg text-gray-300 relative" style={{ zIndex: 30 }}>
              <span className=" font-bold flex items-center gap-2" style={{color:'#7ab3e1'}}>
                <Zap size={20} />
                Transforming atoms into innovations:
              </span>
              where science converges with ingenuity! From massive chemical plants to cutting-edge research facilities, 
              we engineer the industrial backbone that transforms raw materials into the products that power our world. 
              The Chemical Engineering Association (ChEA), 
              established in 1965, looks back with pride with an 
              enviable record of a number of educational, informative, and informal events.
            </p>
          </div>

          <div className="lg:flex w-1/2 justify-center relative" style={{ zIndex: 25 }}>
            <div className="relative" style={{padding:'25px', marginTop:'35px', marginBottom:'25px'}}>
              <img
                src={loading || "/placeholder.svg?height=500&width=500&query=massive chemical industrial plant with smokestacks and cooling towers"}
                alt="Chemical Industrial Plant"
                className="max-h-[500px] object-contain relative z-10"
              />
              
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{border: "2px solid #4A8DFF", boxShadow:'0 0 10px rgba(74,141,255,0.22)'}}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            </div>
          </div>
        </section>

        <div className="relative text-white" style={{ zIndex: 20 }}>
          <div className="flex justify-center my-8">
            <div
              className="w-4/5 h-[4px] bg-[#274B7A] relative"
              
              animate={{
                boxShadow: [
                  "0 0 10px rgba(16, 185, 129, 0.5)",
                  "0 0 30px rgba(6, 182, 212, 0.8)",
                  "0 0 10px rgba(16, 185, 129, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
            </div>
          </div>
        </div>

        <section className="relative py-20 px-6 lg:px-20" style={{ zIndex: 20, background:'#0b1e38' }} >
          {/* <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ zIndex: 1 }}>
            <div className="absolute top-10 left-10 w-32 h-48 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-lg" />
            <div className="absolute top-20 right-20 w-24 h-40 bg-gradient-to-t from-cyan-600 to-teal-600 rounded-full" />
            <div className="absolute bottom-20 left-1/4 w-28 h-36 bg-gradient-to-t from-teal-600 to-cyan-600" />
          </div> */}

          <div className="relative flex flex-col lg:flex-row gap-10 items-center" style={{ zIndex: 25 }}>
            <motion.div
              className="w-full lg:w-1/2 aspect-video relative"
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3 }}
              style={{ zIndex: 30 }}
            >
              <iframe
                className="w-full h-full rounded-lg shadow-2xl"
                style={{border: '3px solid #4A8DFF', boxShadow:'0 0 12px rgba(74,141,255,0.22)'}}
                src="https://www.youtube.com/embed/JOLQSrkcSAo?si=tbyiqzyl2Tz-k6M8"
                title="ChEA Industrial video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              
              <Flask className="absolute -top-4 -left-4 text-emerald-400 opacity-70" size={28} />
              <TestTube className="absolute -top-4 -right-4 text-cyan-400 opacity-70" size={28} />
              <Beaker className="absolute -bottom-4 -left-4 text-violet-400 opacity-70" size={28} />
              <Atom className="absolute -bottom-4 -right-4 text-teal-400 opacity-70" size={28} />
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 text-lg leading-relaxed p-8 rounded-xl shadow-2xl backdrop-blur-md text-gray-300 relative"
              
              whileHover={{
                boxShadow: "0 0 5px rgba(74,141,255,0.22)",
                borderColor: "#5592fb",
              }}
              transition={{ duration: 0.3 }}
              style={{ zIndex: 30, border:'1px solid #4A8DFF', background:'#0e2341' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Droplets style={{color:'#7ab3e1'}} size={28} />
                <h3 className="text-2xl font-bold" style={{color:'#7ab3e1'}}>About ChEA</h3>
              </div>
              <p className="mb-4">
                ChEA is an association of the Alumni, Faculty, Students, and Staff of the Chemical Engineering
                Department, dedicated to the noble cause of disseminating knowledge and fostering awareness in the field
                of chemical engineering.
              </p>
              <p className="mb-4">
                One of its paramount objectives is to foster and fortify the spirit of brotherhood and cooperation among
                the esteemed members of the association, weaving a tapestry of unity that strengthens the bonds within
                this academic community.
              </p>
              <p>
                Association aims to nurture and cultivate leadership qualities, ignite the spark of initiative, and
                inculcate a profound sense of responsibility among its members.
              </p>
              
              <div className="flex justify-end mt-6 gap-4 text-sm text-emerald-400/60 font-mono">
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
