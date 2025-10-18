"use client"

import type React from "react"

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 bg-background">
      <div className="max-w-2xl w-full">
        <h2 className="vintage-heading text-3xl text-center mb-4 animate-fade-in-down">RSVP</h2>
        <p className="text-center text-foreground/70 mb-12 animate-fade-in-up">Please let us know if you can join us</p>

        <form onSubmit={handleSubmit} className="ornate-border p-12 aged-paper animate-fade-in-scale space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-accent mb-2">Your Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-accent/30 rounded bg-cream text-foreground focus:outline-none focus:border-accent transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-accent mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-accent/30 rounded bg-cream text-foreground focus:outline-none focus:border-accent transition-colors"
              placeholder="your@email.com"
            />
          </div>

          {/* Number of Guests */}
          <div>
            <label className="block text-sm font-semibold text-accent mb-2">Number of Guests *</label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-accent/30 rounded bg-cream text-foreground focus:outline-none focus:border-accent transition-colors"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
          </div>

          {/* Dietary Restrictions */}
          <div>
            <label className="block text-sm font-semibold text-accent mb-2">Dietary Restrictions</label>
            <input
              type="text"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-accent/30 rounded bg-cream text-foreground focus:outline-none focus:border-accent transition-colors"
              placeholder="e.g., Vegetarian, Gluten-free"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-accent mb-2">Special Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border-2 border-accent/30 rounded bg-cream text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Share your thoughts with us..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-accent text-cream rounded font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
          >
            Submit RSVP
          </button>

          {/* Success Message */}
          {submitted && (
            <div className="p-4 bg-accent/10 border-2 border-accent rounded text-center text-accent font-semibold animate-fade-in-scale">
              Thank you! Your RSVP has been received.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
