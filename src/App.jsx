import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Cities from "./pages/Cities";
import Main from "./components/Main";
import Details from "./pages/Details";
import Error404 from "./pages/Error404";
import SingIn from "./pages/SignIn";
import {setUser} from "../store/actions/authActions"
import { logInWithToken } from "./redux/actions/userActions";
import UnderConstruction from "./components/UnderConstruction";
import SignRoute from "./components/SingRouter";
import Register from "./pages/Register";

const ProtectedRoute = ({ children }) => {
  const isOnline = useSelector((store) => store.userSignUpReducer.isOnline);
  return isOnline ? <Navigate to="/" /> : children;
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
    element : <UnderConstruction />,
  },
  {
    path: "/sign-in",
    element : (
    <SignRoute>
      <SingIn></SingIn>
    </SignRoute>),
  },
  {
    path: "/register",
    element :<Register></Register>,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

const loginWithToken = async (token) => {
  try {
    console.log("Se ejecuto Login With Token");

    const response = await axios.get(
      "http://localhost:8080/api/auth/validateToken",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.response;
  } catch (error) {
    console.log("error", error);
  }
};

function App() {
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  if (token) {
    loginWithToken(token).then((user) => {
      dispatch(setUser({ user, token }));
    });
  }
  useEffect(() => {
    dispatch(logInWithToken());
  }, [dispatch]);



  return <RouterProvider router={router} />;
}

export default App;