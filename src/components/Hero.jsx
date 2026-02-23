import React, { useState, useEffect } from "react";

const Hero = () => {
  const slides = [
    { Image: "/pic 2 (1).jpg" },
    { Image: "/pic 3.jpg" },
    { Image: "/Rectangle 12.png" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      
     
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.Image}
            alt="hero"
            className="w-full h-full object-cover flex-shrink-0 px-5"
          />
        ))}
      </div>

      <div className="absolute top-1/2 left-10 -translate-y-1/2 text-white max-w-md">
        <h1 className="font-bold text-5xl tracking-wider mb-6">
          Love the <br /> Planet we <br /> walk on
        </h1>

        <p className="text-lg mb-5">
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
          Shop Now
        </button>
      </div>

    </section>
  );
};

export default Hero;