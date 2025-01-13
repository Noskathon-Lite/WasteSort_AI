import React from 'react'

export default function Programs() {
    const programs = [
      {
        title: "Support Environmental Activities",
        description: "We help organizations identify sustainable ways to manage waste.",
        icon: "🤲",

      },
      {
          title: "Workshops and Education Programs",
          description: "We can  Host paid training sessions or online courses on waste segregation and sustainability.it provides a dedicated knowledge to the public about the waste management",
          icon: "📢",
          
        },
        {
            title: " Recycling Partnerships",
            description: " Earning commissions by connecting waste producers with recycling plants or  selling recyclable materials.",
        icon: "🔗",
       
      },
      {
        title: "Data Monetization",
        description: "We can  sell waste classification data to researchers, NGOs, and policymakers for environmental studies and sustainability initiatives.",
        icon: "🔬",
       
      },
      {
        title: "Advertising and Branding",
        description: "Partnering with eco-friendly brands and display their ads of our website",
        icon: "🌍",
       
      },
      {
        title: "Spread Environmental Information",
        description: "We contribute to enriching the globe with environmental literature and knowledge.",
        icon: "ℹ️",
      
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
              className="bg-[#bfe2ca] shadow-lg rounded-lg p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 "
            >
              <div className="text-5xl mb-4 text-green-500">{program.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    );
  }
  
