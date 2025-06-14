import React, { useState } from 'react';

const Certification = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Tech Academy",
      date: "2024",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
      color: "from-purple-600 to-blue-600",
      borderColor: "border-purple-500/30",
      glowColor: "shadow-purple-500/20"
    },
    {
      id: 2,
      title: "React Advanced Concepts",
      issuer: "React Institute",
      date: "2024",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      color: "from-blue-600 to-cyan-600",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-blue-500/20"
    },
    {
      id: 3,
      title: "Cloud Computing AWS",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
      color: "from-pink-600 to-purple-600",
      borderColor: "border-pink-500/30",
      glowColor: "shadow-pink-500/20"
    },
    {
      id: 4,
      title: "Machine Learning Fundamentals",
      issuer: "AI Learning Hub",
      date: "2023",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      color: "from-blue-600 to-purple-600",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-blue-500/20"
    },
    {
      id: 5,
      title: "Cybersecurity Essentials",
      issuer: "Security Institute",
      date: "2023",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
      color: "from-purple-600 to-pink-600",
      borderColor: "border-purple-500/30",
      glowColor: "shadow-purple-500/20"
    },
    {
      id: 6,
      title: "UI/UX Design Mastery",
      issuer: "Design Academy",
      date: "2022",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
      color: "from-cyan-600 to-blue-600",
      borderColor: "border-cyan-500/30",
      glowColor: "shadow-cyan-500/20"
    }
  ];

  return (
    <div 
      className="relative w-full overflow-hidden" 
      style={{
        background: '#0C0C0C',
        paddingTop: '100px',
        paddingBottom: '100px'
      }}
    >
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
            linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)
          `
        }}
      />

      {/* Blurred circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" 
             style={{ backgroundColor: 'rgba(204, 0, 187, 0.08)' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000" 
             style={{ backgroundColor: 'rgba(0, 70, 209, 0.08)' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse delay-500" 
             style={{ backgroundColor: 'rgba(201, 32, 184, 0.05)' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span 
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ 
                background: 'linear-gradient(225deg, #CC00BB 0%, #0046D1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Professional Achievements
            </span>
          </div>
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ color: '#F2F3F4' }}
          >
            Certifications
          </h1>
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#B1B2B3' }}
          >
            Showcasing my commitment to continuous learning and professional excellence through industry-recognized certifications
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className={`group relative p-1 rounded-2xl transition-all duration-500 hover:scale-105 hover:rotate-1 cursor-pointer ${
                  hoveredCard === cert.id ? `shadow-2xl ${cert.glowColor}` : 'shadow-lg'
                }`}
                style={{
                  background: `linear-gradient(135deg, rgba(204, 0, 187, 0.3) 0%, rgba(0, 70, 209, 0.3) 100%)`,
                  animationDelay: `${index * 200}ms`
                }}
                onMouseEnter={() => setHoveredCard(cert.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"
                     style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }}></div>
                
                <div 
                  className="relative rounded-xl p-6 h-full border transition-all duration-500 backdrop-blur-sm"
                  style={{
                    backgroundColor: 'rgba(22, 22, 22, 0.9)',
                    borderColor: hoveredCard === cert.id ? 'rgba(204, 0, 187, 0.5)' : 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-3 right-3">
                      <div 
                        className="px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg"
                        style={{ background: 'linear-gradient(135deg, #CC00BB 0%, #0046D1 100%)' }}
                      >
                        {cert.date}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold" style={{ color: '#F2F3F4' }}>{cert.title}</h3>
                    <p className="text-sm font-medium" style={{ color: '#B1B2B3' }}>{cert.issuer}</p>

                    <div 
                      className="w-full rounded-full h-1 mt-4 overflow-hidden"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      <div 
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          background: 'linear-gradient(90deg, #CC00BB 0%, #0046D1 100%)',
                          width: hoveredCard === cert.id ? '100%' : '0%'
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500"
                     style={{ backgroundColor: '#CC00BB' }}></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-150"
                     style={{ backgroundColor: '#0046D1' }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            className="group relative px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #CC00BB 0%, #0046D1 100%)',
              boxShadow: hoveredCard ? '0 20px 40px rgba(204, 0, 187, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.3)'
            }}
          >
            <span className="relative z-10">View All Certificates</span>
            <div 
              className="absolute inset-0 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #CC00BB 0%, #0046D1 100%)' }}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certification;
