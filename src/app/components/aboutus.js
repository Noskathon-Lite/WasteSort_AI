import React from 'react'

const aboutus = () => {
  return (
    <div>
      
      {/* About Us Section */}
      <section className="py-10 bg-green-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-600">
            Welcome to WasteSort AI, a platform designed to make waste
            identification simple and efficient. Just upload a photo of the
            trash, and our system instantly identifies whether it's reusable,
            decomposable, or non-decomposable. Our mission is to help everyone
            better understand waste and take small steps toward a cleaner,
            greener planet.
          </p>
        </div>
      </section>
    </div>
  )
}

export default aboutus
