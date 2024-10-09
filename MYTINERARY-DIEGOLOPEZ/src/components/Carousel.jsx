import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import cities from "../data/cities";
import "../index.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ordenar las ciudades por población y tomar las 5 más pobladas
  const topCities = cities
    .sort((a, b) => b.population - a.population)
    .slice(0, 5);

  const previous = () => {
    setCurrentIndex((actualIndex) =>
      actualIndex > 0 ? actualIndex - 1 : topCities.length - 1
    );
  };

  const next = () => {
    setCurrentIndex((actualIndex) =>
      actualIndex < topCities.length - 1 ? actualIndex + 1 : 0
    );
  };

  return (
    <div className="relative w-full" id="default-carousel" data-carousel="slide">
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {/* Carrusel de imágenes */}
        {topCities.map((city, index) => (
          <div
            key={city.city}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            <img
              src={city.photo}
              alt={city.city}
              className="absolute block w-full h-56 md:h-96 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-opacity-70 bg-gray-800 text-white w-full">
              <p className="text-lg font-semibold">{city.city}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores de imágenes */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {topCities.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-current={index === currentIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
            type="button"
          ></button>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={previous}
        type="button"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <FaArrowLeft className="text-white" />
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={next}
        type="button"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <FaArrowRight className="text-white" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
