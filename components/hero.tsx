"use client"

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 aged-paper">
      <div className="max-w-4xl w-full text-center">
        {/* Decorative Top */}
        <div className="mb-8 animate-fade-in-down">
          <div className="text-4xl text-accent mb-4">✦ ✦ ✦</div>
        </div>

        {/* Main Heading */}
        <div className="mb-8 animate-fade-in-up stagger-1">
          <h1 className="vintage-script mb-4">Together</h1>
          <p className="text-2xl vintage-heading tracking-widest mb-6">We are getting married</p>
        </div>

        {/* Names */}
        <div className="mb-12 animate-fade-in-scale stagger-2">
          <p className="text-3xl font-serif text-accent mb-2">Sarah & James</p>
          <div className="floral-divider"></div>
        </div>

        {/* Date Preview */}
        <div className="mb-12 animate-fade-in-up stagger-3">
          <p className="text-lg text-foreground mb-2">June 15, 2024</p>
          <p className="text-sm text-foreground/70">The Grand Ballroom, Downtown</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-6 justify-center flex-wrap animate-fade-in-up stagger-4">
          <button
            onClick={() => setActiveSection("invitation")}
            className="px-8 py-3 bg-accent text-cream rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 font-medium"
          >
            View Invitation
          </button>
          <button
            onClick={() => setActiveSection("rsvp")}
            className="px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-cream transition-all duration-300 font-medium"
          >
            RSVP Now
          </button>
        </div>

        {/* Decorative Bottom */}
        <div className="mt-16 animate-float">
          <div className="text-4xl text-accent/50">✦ ✦ ✦</div>
        </div>
      </div>
    </section>
  )
}
