import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import axios from "axios";
import Cities from "./pages/Cities";
import Main from "./components/Main";
import Details from "./pages/Details";
import Error404 from "./pages/Error404";
import SingIn from "./pages/SignIn";
import { setUser } from "../store/actions/authActions";
import UnderConstruction from "./components/UnderConstruction";
import SignRoute from "./components/SingRouter";
import Register from "./pages/Register";

const ProtectedRoute = ({ children }) => {
  const isOnline = useSelector((store) => store.userSignUpReducer.isOnline);
  return isOnline ? children : <Navigate to="/sign-in"/>;
};

// Set up the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/cities",
    element: <Cities />,
  },
  {
    path: "/data/cities/:id", // Use a parameterized route for the city details
    element: <Details />,
  },
  {
    path: "/components/UnderContruction.jsx",
    element: <UnderConstruction />,
  },
  {
    path: "/sign-in",
    element: (
      <SignRoute>
        <SingIn />
      </SignRoute>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

// Function to validate the token
const loginWithToken = async (token) => {
  try {
    console.log("Se ejecutó Login With Token");

    const response = await axios.get(
      "http://localhost:8080/api/users/name/:name",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.response;
  } catch (error) {
    console.error("Error al validar token:", error);
    return null;
  }
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Captura el token de la URL si viene desde Google
    const queryParams = new URLSearchParams(window.location.search);
    const tokenFromURL = queryParams.get("token");

    if (tokenFromURL) {
      localStorage.setItem("token", tokenFromURL);
      window.history.replaceState({}, document.title, "/"); // Elimina el token de la URL
    }

    // Valida el token desde localStorage
    const token = localStorage.getItem("token");
    if (token) {
      loginWithToken(token).then((user) => {
        if (user) {
          dispatch(setUser({ user, token }));
        } else {
          localStorage.removeItem("token"); // Elimina el token si no es válido
        }
      });
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
