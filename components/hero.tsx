"use client"

export default function Hero({ setActiveSection }) {
  return (
    <section className="min-h-screen flex items-center justify-center py-12 sm:pt-20 sm:pb-20 px-2 sm:px-4 bg-gradient-to-br from-[#f5f1e8] to-[#faf8f3]">
      <div className="max-w-4xl w-full text-center">
        
        {/* Top Icon */}
        <div className="mb-6 sm:mb-8 animate-fade-in-down">
          <div className="text-2xl sm:text-4xl text-[#8b4a4a] mb-2 sm:mb-4">✦ ✦ ✦</div>
        </div>

        {/* Title */}
        <div className="mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#8b4a4a] mb-2 sm:mb-4 italic">Together</h1>
          <p className="text-base sm:text-2xl text-[#8b4a4a] tracking-widest uppercase font-light mb-4 sm:mb-6">
            We are getting married
          </p>
        </div>

        {/* Names */}
        <div className="mb-8 sm:mb-12 animate-fade-in-scale" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl sm:text-3xl font-serif text-[#8b4a4a] mb-1 sm:mb-2">
            Dilip & Jabili (Archana)
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-[#8b4a4a] to-transparent my-4 sm:my-6"></div>
        </div>

        {/* Date & Venue */}
        <div className="mb-8 sm:mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-sm sm:text-lg text-[#5c3d3d] mb-1 sm:mb-2">October 24, 2025</p>
          <p className="text-xs sm:text-sm text-[#5c3d3d]/70">KKR Function Hall, Uppal</p>
        </div>

        {/* Button */}
        <div className="flex gap-4 sm:gap-6 justify-center flex-wrap animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={() => setActiveSection("invitation")}
            className="px-4 py-2 sm:px-8 sm:py-3 bg-[#8b4a4a] text-[#faf8f3] rounded-lg hover:bg-[#6b3e3e] transition-all duration-300 transform hover:scale-105 font-medium shadow-lg hover:shadow-xl text-xs sm:text-base"
          >
            View Invitation
          </button>
        </div>

        {/* Bottom Icon */}
        <div className="mt-12 sm:mt-16 animate-float">
          <div className="text-2xl sm:text-4xl text-[#8b4a4a]/50">✦ ✦ ✦</div>
        </div>
      </div>
    </section>
  )
}


