import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/assets/gallery/01.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        {/* TODO: Replace with your hero video file */}
        <source src="/assets/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#B8D4E3]/30 via-[#C9BFA8]/20 to-[#E8DDD0]/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,1.5)]"
        >
          Auto &amp; Marine Detailing
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-gray-900 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        >
          Pristine Finish,{' '}
          <span className="text-accent">Every Detail.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-5 text-black text-lg md:text-xl max-w-2xl mx-auto"
        >
          Premium detailing for cars, trucks, and boats. We bring
          showroom-quality results to your vehicle on land or water.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-light text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
          >
            Book a Detail
          </a>
          <a
            href="#services"
            className="border border-gray-400 hover:border-gray-600 text-gray-900 font-medium px-8 py-3.5 rounded-lg transition-colors text-lg"
          >
            Our Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-gray-700 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
