import React from "react";

function CountryCard({ curElem }) {
  const { flag, name, abbr } = curElem;
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        border: "1px solid grey",
        borderRadius: "4px",
        height: "200px",
        width: "200px",
        gap: "4px",
      }}
    >
      <img
        src={flag}
        alt={`flag of ${abbr}`}
        style={{
          height: "100px",
          width: "100px",
          textAlign: "center",
        }}
      />
      <h2>{name}</h2>
    </li>
  );
}

export default CountryCard;
