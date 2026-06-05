import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'

const base = import.meta.env.BASE_URL

const images = [
  { src: `${base}assets/gallery/01.jpg`, alt: 'Ferrari detail — foam wash in progress' },
  { src: `${base}assets/gallery/02.png`, alt: 'Blue McLaren 600LT with doors up' },
  { src: `${base}assets/gallery/03.png`, alt: 'Classic hot rod with candy red paint' },
  { src: `${base}assets/gallery/04.jpg`, alt: 'Green Lamborghini Urus' },
  { src: `${base}assets/gallery/05.jpg`, alt: 'White McLaren Senna with racing livery' },
  { src: `${base}assets/gallery/06.jpg`, alt: 'Yacht deck and chrome polish' },
  { src: `${base}assets/gallery/07.jpg`, alt: 'Classic 1956 Chevy in gold' },
  { src: `${base}assets/gallery/08.jpg`, alt: 'Blue Corvette C8 in garage' },
  { src: `${base}assets/gallery/09.jpg`, alt: 'Red Honda Ridgeline detailed' },
  { src: `${base}assets/gallery/10.jpg`, alt: 'White Ferrari 458 Speciale' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const next = () =>
    setLightbox((prev) => (prev !== null ? (prev + 1) % images.length : null))
  const prev = () =>
    setLightbox((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null,
    )

  return (
    <section id="gallery" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-3xl" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border border-accent/[0.05] rounded-2xl -rotate-12" />
        <div className="absolute top-20 left-8 w-2.5 h-2.5 rounded-full bg-accent/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm text-center">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 text-gray-900">
            Gallery
          </h2>
          <p className="text-gray-500 text-center mt-3 max-w-xl mx-auto">
            See the difference a professional detail makes — before and after
            transformations on cars and boats.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {images.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.05}>
              <button
                onClick={() => setLightbox(i)}
                className="relative group overflow-hidden rounded-lg aspect-[4/3] w-full bg-gray-100 cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                    View
                  </span>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              className="absolute left-4 text-white/70 hover:text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={36} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              className="absolute right-4 text-white/70 hover:text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
