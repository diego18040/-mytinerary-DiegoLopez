import React, { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchCard from "../components/SearchCard";
import { NavLink } from "react-router-dom";
import citiesData from "../data/cities"; // Importa tus datos locales de ciudades
import itinerariesData from "../data/itineraries"; // Importa tus datos locales de itinerarios

const Cities = () => {
  const [filteredCities, setFilteredCities] = useState(citiesData); // Utiliza los datos locales

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = citiesData.filter((city) =>
      city.city.toLowerCase().includes(searchTerm)
    );
    setFilteredCities(filtered);
  };

  return (
    <>
      <Header />
      <main className="py-8 text-center">
        <div className="mt-20">
          <SearchCard handleSearch={handleSearch} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCities.length === 0 ? (
            <section className="text-center">
              <h1 className="text-3xl font-bold mb-2">No cities found.</h1>
            </section>
          ) : (
            filteredCities.map((city) => {
              // Filtra los itinerarios locales que correspondan a la ciudad actual
              const cityItineraries = itinerariesData.filter(
                (itinerary) =>
                  itinerary.city.toLowerCase() === city.city.toLowerCase()
              );

              return (
                <Card
                  key={city.id} // Asegúrate de que los datos locales tengan un `id`
                  data={city}
                  itineraries={cityItineraries}
                />
              );
            })
          )}
        </div>

        <div className="mt-4">
          <NavLink
            className="bg-blue-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-600 hover:shadow-md transition duration-300 ease-in-out bg-center w-full md:w-auto"
            to="/"
          >
            Go Back to Main
          </NavLink>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cities;

