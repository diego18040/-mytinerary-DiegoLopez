import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ data }) => {
  console.log(data); // Debugging line

  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <img
          src={data.photo}
          alt="City view"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-60" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{data.city}</h3>
        <h4 className="text-gray-500 mb-2">{data.country}</h4>
        <p className="text-gray-700">{data.description}</p>
      </div>
      <div className="p-6 pt-3">
        <NavLink
          to={`../data/cities/${data.id}`} // Ensure data.id is defined
          className="block w-full rounded-lg bg-gray-900 py-3.5 text-center text-sm font-bold uppercase text-white"
       
       >
          Details
        </NavLink>
      </div>
    </div>
  );
};

export default Card;


