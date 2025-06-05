import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

const Countries = () => {
  const [countryData, setCountryData] = useState([]);

  const getAllCountries = async () => {
    try {
      const response = await axios.get(
        "https://xcountries-backend.azurewebsites.net/all"
      );
      setCountryData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {countryData.map((curElem, index) => {
        return <CountryCard key={index} curElem={curElem} />;
      })}
    </ul>
  );
};

export default Countries;
