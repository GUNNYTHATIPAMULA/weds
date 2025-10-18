"use client"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-accent">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="vintage-heading text-xl font-bold text-accent">Our Wedding</h1>

        <div className="flex gap-6">
          {[
            { id: "home", label: "Home" },
            { id: "invitation", label: "Invitation" },
            { id: "details", label: "Details" },
            { id: "gallery", label: "Gallery" },
            { id: "rsvp", label: "RSVP" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`text-sm font-medium transition-all duration-300 ${
                activeSection === item.id ? "text-accent border-b-2 border-accent" : "text-foreground hover:text-accent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
