"use client"

import { useState } from "react"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Invitation from "./components/Invitation"
import EventDetails from "./components/EventDetails"
import RSVPForm from "./components/RSVPForm"
import Gallery from "./components/Gallery"

export default function App() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#5c3d3d]">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {activeSection === "home" && <Hero setActiveSection={setActiveSection} />}
      {activeSection === "invitation" && <Invitation />}
      {activeSection === "details" && <EventDetails />}
      {activeSection === "rsvp" && <RSVPForm />}
      {activeSection === "gallery" && <Gallery />}
    </main>
  )
}
