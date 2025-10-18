"use client"

import { useState } from "react"

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    dietary: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 bg-[#f5f1e8]">
      <div className="max-w-2xl w-full">
        <h2 className="text-3xl text-center mb-4 animate-fade-in-down text-[#8b4a4a] tracking-widest uppercase font-light">
          RSVP
        </h2>
        <p className="text-center text-[#5c3d3d]/70 mb-12 animate-fade-in-up">Please let us know if you can join us</p>

        <form
          onSubmit={handleSubmit}
          className="relative border-4 border-[#8b4a4a] p-12 bg-gradient-to-br from-[#faf8f3] to-[#f5f1e8] animate-fade-in-scale space-y-6 shadow-lg"
        >
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#8b4a4a] -translate-x-2 -translate-y-2"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#8b4a4a] translate-x-2 -translate-y-2"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#8b4a4a] -translate-x-2 translate-y-2"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#8b4a4a] translate-x-2 translate-y-2"></div>

          <div>
            <label className="block text-sm font-semibold text-[#8b4a4a] mb-2">Your Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-[#8b4a4a]/30 rounded bg-[#faf8f3] text-[#5c3d3d] focus:outline-none focus:border-[#8b4a4a] transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#8b4a4a] mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-[#8b4a4a]/30 rounded bg-[#faf8f3] text-[#5c3d3d] focus:outline-none focus:border-[#8b4a4a] transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#8b4a4a] mb-2">Number of Guests *</label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-[#8b4a4a]/30 rounded bg-[#faf8f3] text-[#5c3d3d] focus:outline-none focus:border-[#8b4a4a] transition-colors"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#8b4a4a] mb-2">Dietary Restrictions</label>
            <input
              type="text"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-[#8b4a4a]/30 rounded bg-[#faf8f3] text-[#5c3d3d] focus:outline-none focus:border-[#8b4a4a] transition-colors"
              placeholder="e.g., Vegetarian, Gluten-free"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#8b4a4a] mb-2">Special Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border-2 border-[#8b4a4a]/30 rounded bg-[#faf8f3] text-[#5c3d3d] focus:outline-none focus:border-[#8b4a4a] transition-colors resize-none"
              placeholder="Share your thoughts with us..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#8b4a4a] text-[#faf8f3] rounded font-semibold hover:bg-[#6b3e3e] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Submit RSVP
          </button>

          {submitted && (
            <div className="p-4 bg-[#8b4a4a]/10 border-2 border-[#8b4a4a] rounded text-center text-[#8b4a4a] font-semibold animate-fade-in-scale">
              Thank you! Your RSVP has been received.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
