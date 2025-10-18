"use client"

import { useState } from "react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { id: 1, title: "Engagement", emoji: "💍" },
    { id: 2, title: "First Date", emoji: "🌹" },
    { id: 3, title: "Adventure", emoji: "✈️" },
    { id: 4, title: "Proposal", emoji: "💎" },
    { id: 5, title: "Together", emoji: "💑" },
    { id: 6, title: "Love", emoji: "💕" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 bg-background">
      <div className="max-w-5xl w-full">
        <h2 className="vintage-heading text-3xl text-center mb-4 animate-fade-in-down">Our Story</h2>
        <p className="text-center text-foreground/70 mb-16 animate-fade-in-up">A journey of love and memories</p>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className={`ornate-border p-8 aged-paper cursor-pointer transform transition-all duration-300 hover:scale-105 animate-fade-in-up stagger-${(index % 5) + 1}`}
            >
              <div className="text-6xl mb-4 text-center">{image.emoji}</div>
              <h3 className="vintage-heading text-lg text-center">{image.title}</h3>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in-scale"
            onClick={() => setSelectedImage(null)}
          >
            <div className="ornate-border p-8 aged-paper max-w-md w-full text-center">
              <div className="text-8xl mb-6">{images.find((img) => img.id === selectedImage)?.emoji}</div>
              <h3 className="vintage-heading text-2xl mb-4">{images.find((img) => img.id === selectedImage)?.title}</h3>
              <p className="text-foreground/70 mb-6">A beautiful moment in our love story</p>
              <button
                onClick={() => setSelectedImage(null)}
                className="px-6 py-2 bg-accent text-cream rounded hover:bg-accent/90 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
