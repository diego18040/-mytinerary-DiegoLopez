import {configureStore} from "@reduxjs/toolkit";
import {userSignUpReducer} from "./reducers/userReducers.js";
import {createCityReducer, createAllCitiesReducer, createItinerariesByCityReducer} from "./reducers/cityReducers.js";
import citiesReducer from "../../store/reducer/citiesReducer.js";
import authReducer from "../../store/reducer/authReducer"

const store = configureStore({
  reducer: {
    createCityReducer,
    createAllCitiesReducer,
    createItinerariesByCityReducer,
    userSignUpReducer,
    citiesStore: citiesReducer,
    authStore: authReducer
  },
});

export default store;