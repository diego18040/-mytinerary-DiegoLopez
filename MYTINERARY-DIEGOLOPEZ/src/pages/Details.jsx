import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createCity, createItinerariesByCity } from "../redux/actions/cityActions";

const Details = () => {
  const params = useParams();
  const dispatch = useDispatch();
  
  // Get city data and itineraries from Redux store
  const city = useSelector((store) => store.createCityReducer.city);
  const itineraries = useSelector(
    (store) => store.createItinerariesByCityReducer.itineraries
    
  );
  console.log(itineraries)
 
  useEffect(() => {
    if (params.id) {
      dispatch(createCity(params.id));
      dispatch(createItinerariesByCity(params.id));
    }
  }, [dispatch, params.id]); // Ensure ID is a dependency
  useEffect(() => {
    
    if (city && city.city) {
      document.title = `${city.city} - MyTinerary`;
    }
  }, [city]);


  // Loading state handling
  if (!city || city === "loading") {
    return (
      <main>
        <span>LOADING...</span>
      </main>
    );
  }

  // Fallback if city data or itineraries are not available
  if (!itineraries) {
    return <div className="text-center text-8xl mt-8">LOADING...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div
        style={{ backgroundImage: `url(${city.photo})` }}
        className="h-60 bg-cover bg-center"
      >
        <h1 className="text-4xl font-semibold text-white py-10 px-64">
          <span className="bg-black bg-opacity-70 border-l-4 border-violet-800">
            {city.city}
          </span>
        </h1>
        <h2 className="text-2xl font-semibold text-white px-64">
          <span className="bg-black bg-opacity-70 border-l-4 border-pink-800">
            {city.country}
          </span>
        </h2>
      </div>
      <div className="container mx-auto py-6 px-4">
        <span className="text-xl">
          <p>Country: {city.country}</p>
          <p>Population: {city.population}</p>
          <p>Foundation: {city.foundation}</p>
        </span>
        <p className="mt-4">{city.description}</p>
        <div className="rounded-md text-center p-4 mt-4">
          <NavLink
            to="/cities" // Absolute path to cities
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 hover:shadow-md transition duration-300 ease-in-out"
          >
            Go Back to Cities
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Details;

