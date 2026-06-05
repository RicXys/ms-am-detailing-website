import { MapPin, Award, ThumbsUp, Clock } from 'lucide-react'
import FadeIn from './FadeIn'

const points = [
  {
    icon: MapPin,
    title: 'Mobile Service',
    desc: 'We come to you — home, office, or marina. No need to drop off your vehicle or boat.',
  },
  {
    icon: Award,
    title: 'Premium Products',
    desc: 'We use only professional-grade compounds, coatings, and tools for superior results.',
  },
  {
    icon: ThumbsUp,
    title: '100% Satisfaction',
    desc: "If you're not thrilled with the result, we'll make it right. That's our promise.",
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    desc: 'Evenings and weekends available. Book a time that works for your schedule.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-20 md:py-28 bg-[#0f1923] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-0 left-1/3 w-[350px] h-[350px] rounded-full bg-accent/[0.03] blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="whyus-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#whyus-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm text-center">
            The MS A&M Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 text-white">
            Why Choose Us
          </h2>
        </FadeIn>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-5">
                  <p.icon size={26} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
