import { NavLink } from "react-router-dom";
import bgimagen from "../assets/underConstruction.jpg";

const UnderConstruction = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <section className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
          Page Under Construction
        </h1>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">
          We're working on bringing you new content
        </h3>
        <p className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">
          Check back later for updates!
        </p>
        <NavLink to="/" className="mt-4 text-gray-600">
          <button className="mt-4 py-2 px-4 border border-gray-600 rounded cursor-pointer hover:bg-gray-200 transition duration-300">
            Back to Home
          </button>
        </NavLink>
      </section>
      <aside className="w-full max-w-md h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden">
        <div
          className="w-full h-full flex flex-col items-center justify-center text-white bg-opacity-75"
          style={{
            backgroundImage: `url(${bgimagen})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
        </div>
      </aside>
    </main>
  );
};

export default UnderConstruction;
