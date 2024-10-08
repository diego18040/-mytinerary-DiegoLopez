import React, { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import cities from "../data/cities"; // Importa el archivo

const Cities = () => {
  const [filteredCities, setFilteredCities] = useState(cities);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = cities.filter((city) =>
      city.city.toLowerCase().includes(searchTerm)
    );
    setFilteredCities(filtered);
  };

  return (
    <>
      <Header />
      <main className="px-4 py-8 text-center">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search By City"
            onChange={handleSearch}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCities.length === 0 ? (
            <section className="text-center">
              <h1 className="text-3xl font-bold mb-2">
                No cities found.
              </h1>
            </section>
          ) : (
            filteredCities.map((data, index) => (
              <Card key={index} data={data} />
            ))
          )}
        </div>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-600 hover:shadow-md transition duration-300 ease-in-out bg-center"
        >
          Go Back to Main
        </button>
      </main>
      <Footer />
    </>
  );
};

export default Cities;
