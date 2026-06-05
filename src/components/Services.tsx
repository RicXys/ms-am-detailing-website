import {
  Car,
  Droplets,
  Shield,
  Paintbrush,
  SprayCan,
  Sparkles,
  Ship,
  Waves,
  Anchor,
  SunDim,
} from 'lucide-react'
import FadeIn from './FadeIn'

const autoServices = [
  {
    icon: Droplets,
    name: 'Exterior Wash & Wax',
    desc: 'Hand wash, clay bar treatment, and premium carnauba wax for a deep, lasting shine.',
  },
  {
    icon: SprayCan,
    name: 'Interior Deep Clean',
    desc: 'Full vacuum, steam cleaning, leather conditioning, and odor elimination.',
  },
  {
    icon: Shield,
    name: 'Ceramic Coating',
    desc: 'Professional-grade ceramic coating for long-term paint protection and hydrophobic finish.',
  },
  {
    icon: Paintbrush,
    name: 'Paint Correction',
    desc: 'Multi-stage polishing to remove swirls, scratches, and oxidation — restoring factory clarity.',
  },
  {
    icon: Car,
    name: 'Full Detail Package',
    desc: 'Complete interior and exterior detail — our most comprehensive service for a showroom result.',
  },
  {
    icon: Sparkles,
    name: 'Headlight Restoration',
    desc: 'Remove yellowing and haze from headlights for improved visibility and appearance.',
  },
]

const boatServices = [
  {
    icon: Waves,
    name: 'Hull Cleaning',
    desc: 'Remove barnacles, algae, and buildup below the waterline for better performance and appearance.',
  },
  {
    icon: SunDim,
    name: 'Oxidation Removal',
    desc: 'Restore faded and chalky gelcoat to its original luster with professional compound work.',
  },
  {
    icon: Anchor,
    name: 'Gelcoat Polish & Seal',
    desc: 'High-gloss polish and marine-grade sealant for lasting protection against UV and salt.',
  },
  {
    icon: Ship,
    name: 'Interior Marine Detail',
    desc: 'Deep clean vinyl, upholstery, carpet, and all cabin surfaces. Mildew treatment included.',
  },
  {
    icon: Shield,
    name: 'Marine Ceramic Coating',
    desc: 'Advanced ceramic protection formulated for marine environments — UV, salt, and stain resistant.',
  },
  {
    icon: Sparkles,
    name: 'Metal & Chrome Polish',
    desc: 'Restore brilliance to rails, cleats, trim, and all metal hardware on your vessel.',
  },
]

function ServiceCard({
  icon: Icon,
  name,
  desc,
  delay,
}: {
  icon: typeof Car
  name: string
  desc: string
  delay: number
}) {
  return (
    <FadeIn delay={delay}>
      <div className="group bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-accent/40 hover:bg-white/10 transition-all duration-300 h-full">
        <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors">
          <Icon size={24} className="text-accent" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </FadeIn>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-[#0f1923] overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm text-center">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 text-white">
            Our Services
          </h2>
        </FadeIn>

        {/* Auto Detailing */}
        <div className="mt-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2 text-white">
                <Car size={22} className="text-accent" />
                Auto Detailing
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {autoServices.map((s, i) => (
              <ServiceCard key={s.name} {...s} delay={i * 0.07} />
            ))}
          </div>
        </div>

        {/* Boat / Marine Detailing */}
        <div className="mt-20">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight flex items-center gap-2 text-white">
                <Ship size={22} className="text-accent" />
                Boat &amp; Marine Detailing
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {boatServices.map((s, i) => (
              <ServiceCard key={s.name} {...s} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
