"use client"

import { useState } from "react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { id: 1, title: "Engagement", emoji: "💍" },
    { id: 2, title: "First Date", emoji: "🌹" },
    { id: 3, title: "Adventure", emoji: "✈️" },
    { id: 4, title: "Proposal", emoji: "💎" },
    { id: 5, title: "Together", emoji: "💑" },
    { id: 6, title: "Love", emoji: "💕" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 bg-[#f5f1e8]">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl text-center mb-4 animate-fade-in-down text-[#8b4a4a] tracking-widest uppercase font-light">
          Our Story
        </h2>
        <p className="text-center text-[#5c3d3d]/70 mb-16 animate-fade-in-up">A journey of love and memories</p>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="relative border-4 border-[#8b4a4a] p-8 bg-gradient-to-br from-[#faf8f3] to-[#f5f1e8] cursor-pointer transform transition-all duration-300 hover:scale-105 animate-fade-in-up shadow-lg hover:shadow-xl"
              style={{ animationDelay: `${(index % 5) * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#8b4a4a] -translate-x-1 -translate-y-1"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#8b4a4a] translate-x-1 -translate-y-1"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#8b4a4a] -translate-x-1 translate-y-1"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#8b4a4a] translate-x-1 translate-y-1"></div>

              <div className="text-6xl mb-4 text-center">{image.emoji}</div>
              <h3 className="text-lg text-center text-[#8b4a4a] tracking-widest uppercase font-light">{image.title}</h3>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in-scale"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative border-4 border-[#8b4a4a] p-8 bg-gradient-to-br from-[#faf8f3] to-[#f5f1e8] max-w-md w-full text-center shadow-2xl">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-3 border-l-3 border-[#8b4a4a] -translate-x-1 -translate-y-1"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-3 border-r-3 border-[#8b4a4a] translate-x-1 -translate-y-1"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-3 border-l-3 border-[#8b4a4a] -translate-x-1 translate-y-1"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-3 border-r-3 border-[#8b4a4a] translate-x-1 translate-y-1"></div>

              <div className="text-8xl mb-6">{images.find((img) => img.id === selectedImage)?.emoji}</div>
              <h3 className="text-2xl mb-4 text-[#8b4a4a] tracking-widest uppercase font-light">
                {images.find((img) => img.id === selectedImage)?.title}
              </h3>
              <p className="text-[#5c3d3d]/70 mb-6">A beautiful moment in our love story</p>
              <button
                onClick={() => setSelectedImage(null)}
                className="px-6 py-2 bg-[#8b4a4a] text-[#faf8f3] rounded hover:bg-[#6b3e3e] transition-all shadow-lg hover:shadow-xl"
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
