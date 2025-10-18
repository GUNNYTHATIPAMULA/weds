export default function Invitation() {
  return (
    <section className="min-h-screen flex items-center justify-center py-10 px-2 bg-[#f5f1e8]">
      <div className="w-full max-w-3xl">
        <div className="relative border-4 border-[#8b4a4a] p-6 sm:p-12 bg-gradient-to-br from-[#faf8f3] to-[#f5f1e8] shadow-2xl animate-fade-in-scale rounded-md">
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-5 h-5 sm:w-8 sm:h-8 border-t-4 border-l-4 border-[#8b4a4a] -translate-x-2 -translate-y-2"></div>
          <div className="absolute top-0 right-0 w-5 h-5 sm:w-8 sm:h-8 border-t-4 border-r-4 border-[#8b4a4a] translate-x-2 -translate-y-2"></div>
          <div className="absolute bottom-0 left-0 w-5 h-5 sm:w-8 sm:h-8 border-b-4 border-l-4 border-[#8b4a4a] -translate-x-2 translate-y-2"></div>
          <div className="absolute bottom-0 right-0 w-5 h-5 sm:w-8 sm:h-8 border-b-4 border-r-4 border-[#8b4a4a] translate-x-2 translate-y-2"></div>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="text-xl sm:text-3xl text-[#8b4a4a] mb-2">✦</div>
            <h2 className="text-lg sm:text-2xl text-[#8b4a4a] tracking-widest uppercase font-light mb-1">
              Wedding Invitation
            </h2>
            <p className="text-xs sm:text-sm text-[#5c3d3d]/70">
              Together with their families
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#8b4a4a] to-transparent my-6"></div>

          {/* Couple */}
          <div className="text-center space-y-4 my-8">
            <p className="text-base sm:text-lg font-serif">
              <span className="block text-xl sm:text-2xl text-[#8b4a4a]">Chi. La. Sow. Jabili (Archana)</span>
              <span className="block text-sm text-[#5c3d3d]/70">weds</span>
              <span className="block text-xl sm:text-2xl text-[#8b4a4a]">Chi. Dilip Kumar</span>
            </p>

            <p className="text-xs sm:text-sm text-[#5c3d3d]/70 leading-relaxed">
              Cordially invite you to join us in celebrating their wedding
            </p>

            {/* Date */}
            <p className="text-sm sm:text-lg font-serif text-[#8b4a4a]">
              Friday, 24th October 2025
              <br />
              at 11:23 AM
            </p>

            {/* Venue */}
            <p className="text-xs sm:text-sm text-[#5c3d3d]/70">
              K.K.R. Function Hall
              <br />
              Venkateshwara Temple Road, Uppal,
              <br />
              Medchal-Malkajgiri Dist.
            </p>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#8b4a4a] to-transparent my-6"></div>

          {/* Reception */}
          <div className="text-center text-xs sm:text-sm text-[#5c3d3d]/60 space-y-1">
            <p>Reception: On 26th October 2025, 07:00 PM onwards</p>
            <p>At RAMAIAH Function Hall, Pothuna Nagar,Ramannapet, Warangal</p>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-lg sm:text-2xl text-[#8b4a4a]/30">✦ ✦ ✦</div>
        </div>
      </div>
    </section>
  )
}
