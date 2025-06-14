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
    date: "Feb 2024",
    gradient: "from-green-400 via-blue-500 to-purple-600",
  },
  {
    title: "Cloud Computing",
    issuer: "Google Cloud",
    date: "Mar 2024",
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
    <div className="w-full min-h-screen py-16 px-4 sm:px-8 flex flex-col items-center text-white">
      <h2 className="text-4xl font-bold text-center mb-12 tracking-wider animate-pulse">
        Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`relative p-1 w-[300px] h-[420px] rounded-2xl bg-gradient-to-br ${cert.gradient} hover:scale-105 transition-transform duration-500 shadow-xl`}
          >
            <div className="bg-[#0e0e0e] rounded-2xl h-full w-full p-6 flex flex-col justify-between hover:bg-opacity-90 transition duration-500">
              <div>
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-300">{cert.issuer}</p>
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
