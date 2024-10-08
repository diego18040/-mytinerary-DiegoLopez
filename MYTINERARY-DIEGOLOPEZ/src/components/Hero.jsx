import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import bgImage from '../assets/nature-3719233.jpg';

function Hero() {
  const navigate = useNavigate();

  const exploreCities = () => {
    navigate("/cities");
  };

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-10 lg:px-16 text-center bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="p-6 sm:p-8 rounded-lg mb-6 max-w-xl lg:max-w-2xl bg-opacity-75">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">Find your perfect trip,</h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">
          Designed by insiders who know and love their cities!
        </h2>
        <button
          onClick={exploreCities}
          className="bg-blue-500 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full mt-4 hover:bg-blue-600 hover:shadow-md transition duration-300 ease-in-out"
        >
          Explore Cities
        </button>
      </section>
      <Carousel />
    </main>
  );
}

export default Hero;

