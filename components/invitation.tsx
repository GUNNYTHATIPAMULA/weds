"use client"

export default function Invitation() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 bg-background">
      <div className="max-w-3xl w-full">
        {/* Ornate Card */}
        <div className="ornate-border p-12 aged-paper animate-fade-in-scale">
          {/* Header Decorations */}
          <div className="text-center mb-8">
            <div className="text-3xl text-accent mb-4">✦</div>
            <h2 className="vintage-heading text-2xl mb-2">Together with their parents</h2>
            <p className="text-sm text-foreground/70">request the honour of your presence</p>
          </div>

          <div className="floral-divider my-8"></div>

          {/* Main Content */}
          <div className="text-center space-y-6 my-12">
            <p className="text-lg font-serif">
              <span className="text-2xl text-accent">Sarah Elizabeth</span>
              <br />
              <span className="text-sm text-foreground/70">and</span>
              <br />
              <span className="text-2xl text-accent">James Michael</span>
            </p>

            <p className="text-sm text-foreground/70 leading-relaxed">
              request the honour of your presence
              <br />
              at the marriage of
            </p>

            <p className="text-lg font-serif text-accent">
              Saturday, the fifteenth of June
              <br />
              Two thousand twenty-four
              <br />
              at half past six in the evening
            </p>

            <p className="text-sm text-foreground/70">
              The Grand Ballroom
              <br />
              Downtown Convention Center
              <br />
              City, State 12345
            </p>
          </div>

          <div className="floral-divider my-8"></div>

          {/* Footer */}
          <div className="text-center text-xs text-foreground/60 space-y-2">
            <p>Reception to follow</p>
            <p>Black Tie Optional</p>
          </div>

          {/* Decorative Corners */}
          <div className="mt-8 text-center text-2xl text-accent/30">✦ ✦ ✦</div>
        </div>
      </div>
    </section>
  )
}
