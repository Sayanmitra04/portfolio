import React from "react";

const certifications = [
  {
    title: "Full Stack Developer",
    issuer: "Coursera",
    date: "Jan 2024",
    gradient: "from-pink-500 via-red-500 to-yellow-500",
  },
  {
    title: "Machine Learning",
    issuer: "Stanford University",
    date: "Mar 2024",
    gradient: "from-green-400 via-blue-500 to-purple-600",
  },
  {
    title: "Cloud Computing",
    issuer: "Google Cloud",
    date: "Feb 2024",
    gradient: "from-purple-500 via-indigo-500 to-blue-500",
  },
  {
    title: "UI/UX Design",
    issuer: "Adobe",
    date: "Apr 2024",
    gradient: "from-yellow-400 via-orange-500 to-pink-500",
  },
  {
    title: "Cyber Security",
    issuer: "EC-Council",
    date: "May 2024",
    gradient: "from-teal-400 via-cyan-500 to-blue-600",
  },
  {
    title: "AI Fundamentals",
    issuer: "IBM",
    date: "Jun 2024",
    gradient: "from-fuchsia-500 via-purple-500 to-violet-600",
  },
];

const Certification = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-20">
      <h2 className="text-4xl font-bold mb-10 text-center text-white animate-pulse tracking-wide">
        Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`relative p-1 rounded-2xl bg-gradient-to-tr ${cert.gradient} shadow-2xl hover:scale-105 transition-transform duration-500`}
          >
            <div className="bg-black rounded-2xl p-6 h-full flex flex-col justify-between hover:bg-opacity-90 transition duration-500">
              <div>
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm opacity-80">{cert.issuer}</p>
              </div>
              <div className="mt-6 text-sm text-right italic text-gray-400">{cert.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
