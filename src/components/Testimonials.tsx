import { Star } from 'lucide-react'
import FadeIn from './FadeIn'

const reviews = [
  {
    name: 'Jake M.',
    vehicle: '2023 BMW M4',
    text: "Best detail my car has ever had. The paint correction was flawless — looks better than when I drove it off the lot. Can't recommend MS A&M enough.",
    stars: 5,
  },
  {
    name: 'Sarah K.',
    vehicle: '28ft Sea Ray',
    text: 'They brought my boat back to life after a tough season on the water. The oxidation removal and gelcoat polish were incredible. Like a brand new boat.',
    stars: 5,
  },
  {
    name: 'Marcus D.',
    vehicle: 'Tesla Model Y',
    text: "Professional, punctual, and the ceramic coating they applied is still beading water perfectly months later. This is the only detailer I'll use going forward.",
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -left-20 w-[350px] h-[350px] rounded-full bg-accent/[0.03] blur-3xl" />
        <div className="absolute top-8 right-16 w-16 h-16 border border-accent/[0.05] rounded-xl rotate-[20deg]" />
        <div className="absolute bottom-12 left-1/4 w-2 h-2 rounded-full bg-accent/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm text-center">
            Client Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 text-gray-900">
            What People Say
          </h2>
        </FadeIn>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <FadeIn key={r.name} delay={i * 0.1}>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, s) => (
                    <Star
                      key={s}
                      size={16}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  "{r.text}"
                </p>
                <div className="mt-5 pt-4 border-t border-gray-200">
                  <p className="font-semibold text-sm text-gray-900">{r.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{r.vehicle}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
