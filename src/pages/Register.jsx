import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgSingup from "../assets/signup.jpg";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    photoURL: "",
    country: "",
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      name: formData.firstName,
      lastname: formData.lastName || "Apellido no especificado",
      email: formData.email,
      password: formData.password,
      photo: formData.photoURL || "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png",
      country: formData.country,
    };

    try {
      await dispatch(signUp(formattedData)).unwrap();
      setIsSuccessModalOpen(true); // Mostrar modal de éxito
    } catch (error) {
      console.error("Error en el registro:", error);
      alert("Hubo un error en el registro, por favor intenta nuevamente.");
    }
  };

  const handleCloseModal = () => {
    setIsSuccessModalOpen(false);
    navigate("/"); // Redirige a la página principal tras cerrar el modal
  };

  const signUpWithGoogle = () => {
    window.location.href = "http://localhost:8080/api/auth/signin/google/";
  };

  return (
    <>
      <Header />
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgSingup})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
              Create Your Account
            </h1>
            {/* First Name */}
            <div className="mb-4">
              <label
                className="text-gray-800 font-semibold block mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </div>
            {/* Last Name */}
            <div className="mb-4">
              <label
                className="text-gray-800 font-semibold block mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label
                className="text-gray-800 font-semibold block mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Password */}
            <div className="mb-4">
              <label
                className="text-gray-800 font-semibold block mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            {/* Photo URL */}
            <div className="mb-4">
              <label
                className="text-gray-800 font-semibold block mb-2"
                htmlFor="photoURL"
              >
                Photo URL
              </label>
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="url"
                name="photoURL"
                id="photoURL"
                value={formData.photoURL}
                onChange={handleChange}
                placeholder="Enter the URL of your photo"
                required
              />
            </div>
            {/* Country */}
            <div className="mb-4">
              <label
                className="text-gray-800 font-semibold block mb-2"
                htmlFor="country"
              >
                Country
              </label>
              <select
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                name="country"
                id="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select your country
                </option>
                <option value="EUA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Mexico">Mexico</option>
                <option value="España">España</option>
                <option value="Argentina">Argentina</option>
                <option value="Chile">Chile</option>
                <option value="Colombia">Colombia</option>
                <option value="Peru">Peru</option>
                <option value="Brazil">Brazil</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* Register Button */}
            <button
              type="submit"
              className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold"
            >
              Register
            </button>
            {/* Register with Google */}
            <button
              onClick={signUpWithGoogle}
              className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                className="w-6 h-6"
                alt="Google Logo"
              />
              <span>Register with Google</span>
            </button>
          </form>
        </div>
      </div>
      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-600">Success!</h2>
            <p className="mt-4 text-gray-700">Your account has been successfully created.</p>
            <button
              onClick={handleCloseModal}
              className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
              Continue
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default SignUpForm;
