import React, { useState } from "react";

const Card = ({ data }) => {
  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <img
        src={data.photo}
        alt="ui/ux review check" 
        className="w-full h-48 object-cover"
        ></img>
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60" >
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold mb-1">{data.city}</h3>
          <p className="flex items-center gap-1.5 text-base font-normal leading-relaxed text-blue-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="-mt-0.5 h-5 w-5 text-yellow-700">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
            </svg>
            5.0
          </p>
        </div>
        <h4 className="text-gray-500 mb-2">{data.country}</h4>
        <p className="text-gray-700">{data.description}</p>
      </div>
      <div className="p-6 pt-3">
        <button onClick={()=> Navigate("../pages/Details.jsx")} className="block w-full rounded-lg bg-gray-900 py-3.5 text-center text-sm font-bold uppercase text-white">
          Details
        </button>
      </div>
    </div>
  );
};

export default Card;


