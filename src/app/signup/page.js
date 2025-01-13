"use client"
import React from "react";
import Image from "next/image";



const signup = () => {
  return (
    <>
    
    <div className="flex items-center justify-center min-h-screen bg-[#B1ECC4]">
     
      <div className="bg-[#fff] p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-xl font-bold text-center mb-4">Signup</h1>

  
        <form>
          <div className="mb-4">
            <input
              type="name"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#709965]"
              required
            />
          </div>
         
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#709965]"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#709965]"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#709965]"
              required
            />
          </div>
       
          <button
            type="submit"
            className="w-full bg-[#709965] text-white font-bold py-2 px-4 rounded-md hover:bg-[#618358]"
          >
            Sign Up
          </button>
        
        </form>

        <div className="text-center text-sm mt-4 ">
          <p>
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#709965] font-bold hover:underline"
            >
              Login
            </a>
          </p>
          <p className="text-[#709965] mt-3 hover:underline">
            <a href="/">

            Back to Homepage
            </a>
          </p>
        </div>
      </div>
    </div>
    </>

  );
};

export default signup;
