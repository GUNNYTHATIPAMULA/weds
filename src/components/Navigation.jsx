"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react" // icons for mobile menu

export default function Navigation({ activeSection, setActiveSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "invitation", label: "Invitation" },
    { id: "details", label: "Details" },
    { id: "gallery", label: "Gallery" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f1e8]/95 backdrop-blur-sm border-b-2 border-[#8b4a4a]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-lg md:text-xl font-bold text-[#8b4a4a] tracking-widest uppercase">
          Our Wedding
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? "text-[#8b4a4a] border-b-2 border-[#8b4a4a]"
                  : "text-[#5c3d3d] hover:text-[#8b4a4a]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#8b4a4a]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#f5f1e8] border-t border-[#8b4a4a] flex flex-col items-center py-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id)
                setMenuOpen(false)
              }}
              className={`text-base font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? "text-[#8b4a4a] border-b border-[#8b4a4a]"
                  : "text-[#5c3d3d] hover:text-[#8b4a4a]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
