"use client";
import React, { useState } from "react";

export default function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);

      // Create a preview URL for the image
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      alert("Please select an image first!");
      return;
    }

    // Example of sending the image to an API endpoint
    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      alert(`Image uploaded successfully: ${data.message}`);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload the image.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-100 via-green-50 to-green-200">
      <div className="w-1/4 p-6 bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
        <h1 className="text-2xl font-bold mb-4 text-center text-[#709965]">
          Upload Your Image
        </h1>
        <div className="flex flex-col items-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-4 cursor-pointer bg-[#f3f4f6] rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-500 shadow-md hover:bg-gray-200 transition"
          />
          {preview && (
            <div className="mb-4 animate-fade-in">
              <img
                src={preview}
                alt="Selected"
                className="w-32 h-32 object-cover rounded-md shadow-md hover:shadow-lg transition duration-300"
              />
            </div>
          )}
          <button
            onClick={handleUpload}
            className="px-6 py-2 bg-[#709965] text-white rounded-md shadow-md hover:bg-green-700 transition duration-300"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
