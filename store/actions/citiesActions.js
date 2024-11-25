import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpZWcwMC5sb3BlejAwQGhvdG1haWwuY29tIiwiaWF0IjoxNzMyMTU5OTA1LCJleHAiOjE3MzIyNDYzMDV9.zDpt5TWsnOQuOlmW7h4-_l-P2v5jm8Ko2PbkgCbHafs";
const getCities = createAsyncThunk("getCities", async () => {
    console.log("Entramos al getCities");
    
    // Realiza la solicitud con el token en el encabezado
    const response = await axios.get("http://localhost:8080/api/cities/all", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    
    console.log("Response", response);
    console.log("Se esta ejecutando dentro de asyncThunk getCities");
    console.log(response.data);

    return response.data.response;  
});

const getCitiesByName = createAsyncThunk("getCitieByName", async (name) => {
    console.log("Entramos al get Cities By Name");
    const response = await axios.get(`http://localhost:8080/api/cities/city?name=${name}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    );
    console.log("Se esta ejecutando dentro de asyncthunk getCitieByName");
    console.log(response.data.response);

    return response.data.response;
});

export { getCities, getCitiesByName };