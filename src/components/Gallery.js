import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Gallery = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const imageList = [
    "https://images.unsplash.com/photo-1530915534664-4ac6423816b7?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tpbmclMjB0ZW5uaXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1530915534664-4ac6423816b7?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tpbmclMjB0ZW5uaXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1530915534664-4ac6423816b7?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tpbmclMjB0ZW5uaXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1530915534664-4ac6423816b7?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tpbmclMjB0ZW5uaXN8ZW58MHx8MHx8fDA%3D",
   "https://images.unsplash.com/photo-1530915534664-4ac6423816b7?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tpbmclMjB0ZW5uaXN8ZW58MHx8MHx8fDA%3D",
   "https://images.unsplash.com/photo-1530915534664-4ac6423816b7?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tpbmclMjB0ZW5uaXN8ZW58MHx8MHx8fDA%3D",
  ];

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
      <div className="bg-gray-50 min-h-screen text-gray-700">
        {/* Header */}
        <div className="bg-green-500 text-white text-center py-24">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <p className="mt-2">Explore our tennis facilities, players, and events</p>
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
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
