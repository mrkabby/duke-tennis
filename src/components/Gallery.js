import React, { useState, useEffect } from "react";
import img1 from "../images/group.jpg";
import img2 from "../images/girls.jpg";
import img3 from "../images/cardio.jpg";
import img4 from "../images/Kid.jpg";
import img5 from "../images/One.jpg";
import img6 from "../images/logo.png";
import img7 from "../images/another guy.jpg";
import img8 from "../images/guy.jpg";
import img9 from "../images/dukeback.jpg";
import img10 from "../images/another lady.png";
import img11 from "../images/pink.jpg";
import img12 from "../images/lady.jpg";
import img13 from "../images/lowcut.jpg";
import img14 from "../images/people.jpg";


import Navbar from "./Navbar";
import Footer from "./Footer";

const Gallery = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const imageList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,img12,img13,img14];

  // Simulate loading delay (for demonstration purposes)
  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 1500); // 1.5 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      
{/* Hero Section */}
<div
  className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url(${img9})` }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

  {/* Text content */}
  <div className="relative z-10 text-center px-4 max-w-2xl">
    <h1 className="text-4xl md:text-5xl font-extrabold text-white">Gallery</h1>
    <p className="mt-4 text-lg md:text-xl text-gray-200">
      Explore our tennis facilities, players, and events
    </p>
  </div>
</div>


        {/* Gallery Section */}
        <div className="px-6 py-12 md:px-20">
          {imagesLoaded ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {imageList.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image}
                    alt={`Gallery item ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-lg font-semibold">Image {index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-[50vh]">
              <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-green-500 rounded-full"></div>
            </div>
          )}
        </div>
      
      <Footer />
    </>
  );
};

export default Gallery;
