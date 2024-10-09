import { useNavigate } from "react-router-dom";
import bgImage from '../assets/nature-3719233.jpg';
import Note from "./Note"
function Hero() {
  const navigate = useNavigate();

  const exploreCities = () => {
    navigate("/cities");
  };

  return (
    <main className="bg-gray-800">
      <section className="sm:p-8 rounded-lg  text-white  bg-opacity-75 sm:px-10 lg:px-16"

            style={{
              display: "flex",
              flexDirection: "column",
              alignItems:"center",
              justifyContent: "center",
              justifyItems:"center",
              minHeight:"100vh",
              maxHeight:"100vh",
              paddingleft: "1.5rem",
              paddingright: "1.5rem",
              textAlign:"center",
              backgroundPosition:"center",
              backgroundRepeat:"no-repeat",
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
            }}>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 ">Find your perfect trip,</h1>
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
      <Note></Note>
    </main>
  );
}

export default Hero;

