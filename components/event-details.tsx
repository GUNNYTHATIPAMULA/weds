"use client"

export default function EventDetails() {
  const details = [
    {
      title: "Ceremony",
      time: "6:30 PM",
      location: "Grand Ballroom - Main Hall",
      description: "Join us as we exchange our vows",
      icon: "⛪",
    },
    {
      title: "Cocktail Hour",
      time: "7:30 PM",
      location: "Grand Ballroom - Terrace",
      description: "Enjoy refreshments and mingle",
      icon: "🥂",
    },
    {
      title: "Reception",
      time: "8:30 PM",
      location: "Grand Ballroom - Dining Hall",
      description: "Dinner, dancing, and celebration",
      icon: "💃",
    },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 bg-background">
      <div className="max-w-4xl w-full">
        <h2 className="vintage-heading text-3xl text-center mb-16 animate-fade-in-down">Event Details</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <div
              key={index}
              className={`ornate-border p-8 aged-paper text-center animate-fade-in-up stagger-${index + 1}`}
            >
              <div className="text-4xl mb-4">{detail.icon}</div>
              <h3 className="vintage-heading text-xl mb-2">{detail.title}</h3>
              <p className="text-lg text-accent font-serif mb-4">{detail.time}</p>
              <p className="text-sm text-foreground/70 mb-4">{detail.location}</p>
              <p className="text-sm text-foreground">{detail.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 ornate-border p-8 aged-paper animate-fade-in-scale">
          <h3 className="vintage-heading text-xl text-center mb-6">Important Information</h3>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <p className="font-semibold text-accent mb-2">Dress Code</p>
              <p className="text-foreground/70">Black Tie Optional</p>
            </div>
            <div>
              <p className="font-semibold text-accent mb-2">RSVP</p>
              <p className="text-foreground/70">By June 1st, 2024</p>
            </div>
            <div>
              <p className="font-semibold text-accent mb-2">Parking</p>
              <p className="text-foreground/70">Complimentary valet available</p>
            </div>
            <div>
              <p className="font-semibold text-accent mb-2">Accommodations</p>
              <p className="text-foreground/70">Special rates at nearby hotels</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
