import { useState } from 'react'
import type { FormEvent } from 'react'
import { Send, Phone, Mail, MapPin } from 'lucide-react'
import FadeIn from './FadeIn'

interface FormData {
  name: string
  phone: string
  email: string
  vehicleType: string
  service: string
  message: string
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  vehicleType: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(): boolean {
    const errs: typeof errors = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.phone.trim()) errs.phone = 'Phone number is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Enter a valid email'
    if (!form.vehicleType) errs.vehicleType = 'Please select a vehicle type'
    if (!form.service) errs.service = 'Please select a service'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return

    // TODO: Replace with actual form submission endpoint
    console.log('Form submission payload:', form)

    setSubmitted(true)
    setForm(initialForm)
  }

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const inputClass = (field: keyof FormData) =>
    `w-full bg-white/[0.07] border ${
      errors[field] ? 'border-red-500' : 'border-white/15 focus:border-accent'
    } rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 outline-none transition-colors`

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#0f1923] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-[350px] h-[350px] rounded-full bg-accent/[0.03] blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-accent font-semibold tracking-[0.15em] uppercase text-sm text-center">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 text-white">
            Book Your Detail
          </h2>
          <p className="text-gray-400 text-center mt-3 max-w-xl mx-auto">
            Ready for a showroom finish? Fill out the form below and we'll get
            back to you within 24 hours.
          </p>
        </FadeIn>

        <div className="mt-14 grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact info */}
          <FadeIn className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <Phone size={18} className="text-accent" />
              </div>
              <div>
                <p className="font-semibold text-sm text-white">Phone</p>
                {/* TODO: Replace with real phone number */}
                <a
                  href="tel:+15551234567"
                  className="text-gray-400 text-sm hover:text-accent transition-colors"
                >
                  (555) 123-4567
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <p className="font-semibold text-sm text-white">Email</p>
                {/* TODO: Replace with real email */}
                <a
                  href="mailto:info@msamdetailing.com"
                  className="text-gray-400 text-sm hover:text-accent transition-colors"
                >
                  info@msamdetailing.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <p className="font-semibold text-sm text-white">Service Area</p>
                {/* TODO: Replace with real service area */}
                <p className="text-gray-400 text-sm">
                  Serving the greater metro area & surrounding marinas
                </p>
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-white/10">
              <p className="text-gray-500 text-xs leading-relaxed">
                We typically respond within a few hours during business hours.
                For urgent requests, give us a call.
              </p>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.15} className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white/[0.06] border border-accent/20 rounded-xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Thanks for reaching out. We'll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-accent text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/[0.06] border border-white/10 rounded-xl p-6 md:p-8 space-y-5"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Your name"
                      className={inputClass('name')}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="(555) 000-0000"
                      className={inputClass('phone')}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="you@email.com"
                    className={inputClass('email')}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Vehicle / Boat Type *
                    </label>
                    <select
                      value={form.vehicleType}
                      onChange={(e) => update('vehicleType', e.target.value)}
                      className={inputClass('vehicleType')}
                    >
                      <option value="">Select type...</option>
                      <option value="sedan">Sedan / Coupe</option>
                      <option value="suv">SUV / Truck</option>
                      <option value="motorcycle">Motorcycle</option>
                      <option value="powerboat">Powerboat</option>
                      <option value="sailboat">Sailboat</option>
                      <option value="jetski">Jet Ski / PWC</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.vehicleType && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.vehicleType}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Service Interest *
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => update('service', e.target.value)}
                      className={inputClass('service')}
                    >
                      <option value="">Select service...</option>
                      <option value="exterior">Exterior Wash & Wax</option>
                      <option value="interior">Interior Deep Clean</option>
                      <option value="full-detail">Full Detail Package</option>
                      <option value="ceramic">Ceramic Coating</option>
                      <option value="paint-correction">Paint Correction</option>
                      <option value="hull-cleaning">Hull Cleaning</option>
                      <option value="oxidation">Oxidation Removal</option>
                      <option value="gelcoat">Gelcoat Polish</option>
                      <option value="marine-interior">Marine Interior</option>
                      <option value="other">Other / Multiple</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.service}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Tell us about your vehicle/boat and what you're looking for..."
                    rows={4}
                    className={`${inputClass('message')} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Inquiry
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
