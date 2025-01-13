import React from 'react'

export default function Programs() {
    const programs = [
      {
        title: "Support Environmental Activities",
        description: "We help organizations identify sustainable ways to manage waste.",
        icon: "🤲",
        link: "#",
      },
      {
        title: " Increased User Engagement Through Innovative Technology",
        description: "We feature our members' names and activities on our website and in our publications.",
        icon: "📢",
        link: "#",
      },
      {
        title: "Connect Members",
        description: "We bring together organizations to share knowledge in environmental subjects.",
        icon: "🔗",
        link: "#",
      },
      {
        title: "Foster Environmental Research",
        description: "We support research in topics like biodiversity and climate change.",
        icon: "🔬",
        link: "#",
      },
      {
        title: "Contribute to Environmental Debates",
        description: "We demonstrate our philosophy and values through global debates.",
        icon: "🌍",
        link: "#",
      },
      {
        title: "Spread Environmental Information",
        description: "We contribute to enriching the globe with environmental literature and knowledge.",
        icon: "ℹ️",
        link: "#",
      },
    ];
  
    return (
      <div className="bg-white py-10">
        <div className="text-center mb-10">
          <p className="text-sm uppercase text- font-semibold">
            A Platform of Good Causes
          </p>
          <h2 className="text-4xl font-bold text-gray-800">
            Our Programs Are Tailored To Protecting The Environment
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 "
            >
              <div className="text-5xl mb-4 text-green-500">{program.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600[#709965] mb-4">{program.description}</p>
              <a
                href={program.link}
                className="text-blue-500 font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
