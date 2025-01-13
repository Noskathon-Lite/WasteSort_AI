import React from 'react'

const Footer = () => {
  return (
    <div className="">
    <footer className="bg-gray-800 text-white py-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
    {/* About Column */}
    <div>
      <h4 className="text-2xl font-semibold mb-4">Waste Sort-AI</h4>
      <p className="text-gray-300 leading-relaxed">
       "WasteSort AI" is an innovative solution that promotes effective waste management by identifying recyclable and non-recyclable waste using image recognition.
      </p>
    </div>

    {/* Contact Column */}
    <div>
      <h4 className="text-2xl font-semibold mb-4">Contact</h4>
      <ul className="space-y-3 text-gray-300">
        <li>Email: <a href="mailto:snapthriftstore@gmail.com" className="text-gray-100 hover:text-gray-400">wastesort@gmail.com</a></li>
        <li>Phone: <a href="tel:+977-97********" className="text-gray-100 hover:text-gray-400">+977-97********</a></li>
        <li>
          <a href="#" className="hover:text-gray-400">Facebook</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">Instagram</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400"> TikTok</a>
        </li>
      </ul>
    </div>

   
  </div>

  <div className="text-center mt-8 border-t border-gray-600 pt-4">
    <p className="text-gray-400">&copy; 2024 Waste Sort-AI. All rights reserved.</p>
  </div>
</footer>
  </div>

  )
}

export default Footer

