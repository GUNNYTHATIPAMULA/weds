export default function EventDetails() {
  const details = [
    {
      title: "Muhurtham",
      time: "Friday, 24th October 2025 – 11:32 AM",
      location: "K.K.R. Function Hall, Vinukonda Road, Sattenapalli",
      description: "Auspicious wedding ceremony",
      icon: "💍",
    },
    {
      title: "Reception",
      time: "Saturday, 25th October 2025 – 6:30 PM onwards",
      location: "Ramakrishna Function Hall, Palnadu Road, Narasaraopet",
      description: "Join us for celebrations, dinner, and togetherness",
      icon: "🎉",
    },
  ]

  const info = [
    { label: "Hosts", value: "Smt. Thotapamula Padma (Late Ravinder)" },
    { label: "Groom", value: "Chi. La. Sou. Jabith (Akhil) – S/o Sri Siva Kumar & Smt. Anasuya Kumari" },
    { label: "Bridegroom", value: "Chi. Dilip Kumar – S/o Sri Ananda Kumar & Smt. Kumari Susmitha" },
    { label: "Blessings", value: "With best compliments from family, friends & relatives" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 bg-[#f5f1e8]">
      <div className="max-w-5xl w-full">
        {/* Heading */}
        <h2 className="text-3xl text-center mb-12 animate-fade-in-down text-[#8b4a4a] tracking-widest uppercase font-light">
          Wedding Schedule
        </h2>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {details.map((detail, index) => (
            <div
              key={index}
              className="relative border-4 border-[#8b4a4a] p-8 bg-gradient-to-br from-[#faf8f3] to-[#f5f1e8] text-center animate-fade-in-up shadow-lg hover:shadow-xl transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#8b4a4a] -translate-x-1 -translate-y-1"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#8b4a4a] translate-x-1 -translate-y-1"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#8b4a4a] -translate-x-1 translate-y-1"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#8b4a4a] translate-x-1 translate-y-1"></div>

              <div className="text-4xl mb-4">{detail.icon}</div>
              <h3 className="text-xl mb-2 text-[#8b4a4a] tracking-widest uppercase font-light">{detail.title}</h3>
              <p className="text-lg text-[#8b4a4a] font-serif mb-4">{detail.time}</p>
              <p className="text-sm text-[#5c3d3d]/70 mb-4">{detail.location}</p>
              <p className="text-sm text-[#5c3d3d]">{detail.description}</p>
            </div>
          ))}
        </div>

        {/* Important Info */}
        <div className="mt-16 relative border-4 border-[#8b4a4a] p-8 bg-gradient-to-br from-[#faf8f3] to-[#f5f1e8] animate-fade-in-scale shadow-lg">
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-3 border-l-3 border-[#8b4a4a] -translate-x-1 -translate-y-1"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-3 border-r-3 border-[#8b4a4a] translate-x-1 -translate-y-1"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-3 border-l-3 border-[#8b4a4a] -translate-x-1 translate-y-1"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-3 border-r-3 border-[#8b4a4a] translate-x-1 translate-y-1"></div>

          <h3 className="text-xl text-center mb-6 text-[#8b4a4a] tracking-widest uppercase font-light">
            Important Information
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            {info.map((item, idx) => (
              <div key={idx}>
                <p className="font-semibold text-[#8b4a4a] mb-2">{item.label}</p>
                <p className="text-[#5c3d3d]/70">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
