import React from "react";
import Image from "next/image";

const Work = () => {
  return (
    <div>
      {/* How It Works Section */}
      <section className="py-10 bg-[#B1ECC4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#709965]">
            HOW IT WORKS?
          </h2>
        
          <p className="p-4 text-center bg-[#709965] mb-10 text-white shadow-md rounded-lg mx-auto max-w-4xl">
            Upload the picture of the waste items you want to identify, and let our
            system detect whether the waste is reusable, decomposable, or
            non-decomposable. Turn your waste management efforts into an
            eco-friendly solution and contribute to a cleaner environment!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <p className="font-bold text-3xl text-[#709965] pt-4">STEP 1</p>
              <Image
                src="/Image/step1.jpeg"
                alt="Capture and Upload"
                width={300}
                height={200}
                className="rounded-lg mx-auto"
              />
              <h3 className="font-bold text-lg text-[#709965] pt-4">Capture and Upload</h3>
              <p className="text-gray-600">
                Take a clear photo of the waste item you want to classify or
                drag your waste image to our platform.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <p className="font-bold text-3xl text-[#709965] pt-4">STEP 2</p>
              <Image
                src="/Image/step33.jpg"
                alt="Image Analysis"
                width={300}
                height={200}
                className="rounded-lg mx-auto"
              />
              <h3 className="font-bold text-lg text-[#709965] pt-4">Image Analysis</h3>
              <p className="text-gray-600">
                Our advanced AI system will analyze the uploaded photo and
                classify it as Reusable, Decomposable, or Non-Decomposable.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <p className="font-bold text-3xl text-[#709965] pt-4">STEP 3</p>
              <Image
                src="/Image/image.png"
                alt="Get Instant Result"
                width={300}
                height={200}
                className="rounded-lg mx-auto"
              />
              <h3 className="font-bold text-lg text-[#709965] pt-4">Get Instant Result</h3>
              <p className="text-gray-600">
                Instantly view the classification results and eco-friendly tips
                on how to handle the waste properly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
