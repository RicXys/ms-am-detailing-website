import FadeIn from './FadeIn'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <FadeIn>
            <div className="flex justify-center">
              {/* TODO: Save team photo as public/assets/team.png */}
              <img
                src={`${import.meta.env.BASE_URL}assets/team.png`}
                alt="MS A&M Detailing founders"
                className="w-full max-w-lg rounded-2xl"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={0.15}>
            <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm">
              Meet the Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Family-Owned. Passion-Driven.
            </h2>
            <p className="text-gray-600 mt-5 leading-relaxed">
              We're a husband-and-wife team with a shared obsession for
              perfection. What started as a passion for keeping our own vehicles
              spotless turned into a full-service detailing business serving car
              and boat owners across the area.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              As proud members of the International Detailing Association (IDA),
              we stay on top of the latest techniques, products, and industry
              standards so every vehicle we touch gets the absolute best.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Whether it's a daily driver, a weekend showpiece, or your pride and
              joy on the water, we treat every detail like it's our own.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <p className="text-3xl font-bold text-accent">IDA</p>
                <p className="text-gray-500 text-sm mt-1">Certified Members</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-gray-500 text-sm mt-1">Satisfaction Rate</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-3xl font-bold text-gray-900">5★</p>
                <p className="text-gray-500 text-sm mt-1">Google Reviews</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
