import React, { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import cities from "../data/cities";

import { NavLink } from "react-router-dom";
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
      <main className=" py-8 text-center">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search By City"
            onChange={handleSearch}
             className="border rounded p-2 w-full md:w-1/2 mx-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
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
        <li className="text-white"></li>
        <NavLink
          className="bg-blue-500 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-600 hover:shadow-md transition duration-300 ease-in-out bg-center w-full md:w-auto"
        to="/"
        >
          Go Back to Main
        </NavLink>
      </main>
      <Footer />
    </>
  );
};

export default Cities;
