import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal"; // Asegúrate de importar el Modal

const Card = ({ data, itineraries }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white text-gray-700 shadow-lg">
      <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500">
        <img
          src={data.photo}
          alt={data.city}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-60" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{data.city}</h3>
        <h4 className="text-gray-500 mb-2">{data.country}</h4>
        <p className="text-gray-700">{data.description}</p>
      </div>
      <div className="p-6 pt-3 flex flex-col gap-2">
      <NavLink
          to={`/components/UnderContruction.jsx`} // Cambia esto a la ruta deseada
          className="block rounded-lg bg-gray-900 py-3.5 text-center text-sm font-bold uppercase text-white"
        >
          View more
        </NavLink>
        <button
          onClick={handleOpenModal}
          className="block w-full rounded-lg bg-gray-900 py-3.5 text-center text-sm font-bold uppercase text-white"
        >
          Open Itinerary Details
        </button>
        
        <Modal
          isOpen={isOpen}
          onClose={handleCloseModal}
          itineraries={itineraries}
        />
      </div>
    </div>
  );
};

export default Card;


