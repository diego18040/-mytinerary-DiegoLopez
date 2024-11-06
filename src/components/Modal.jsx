import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, itineraries }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 w-11/12 max-w-lg dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Itineraries</h2>
        {itineraries.length > 0 ? (
          <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:grid-cols-2">
            {itineraries.map((itinerary) => (
              <figure
                key={itinerary.admin_id}
                className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
              >
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 dark:text-gray-400">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {itinerary.name}
                  </h3>
                  <p className="my-4">Price: ${itinerary.price}</p>
                  <p>Time: {itinerary.time} hours</p>
                  <p>Likes: {itinerary.likes}</p>
                  <p>Hashtags: {itinerary.hashtags.join(", ")}</p>
                </blockquote>
                <figcaption className="flex items-center justify-center">
                  <img
                    className="rounded-full w-9 h-9"
                    src = {itinerary.myphoto}
                    alt="profile picture"
                  />
                  <div className="space-y-0.5 font-medium dark:text-white text-left ms-3">
                    <div>{itinerary.name || "Unknown Owner"}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {itinerary.ownerRole || "Role Not Provided"}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No itineraries yet for this city.</p>
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
