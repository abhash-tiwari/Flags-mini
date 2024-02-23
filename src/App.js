import { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error Fetching Data", error));
  }, []);

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    // justifyContent: "space-around",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #ccc",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    width: "200px",
  };

  const flagStyle = {
    height: "100px",
    width: "100px",
  };

  return (
    <div style={containerStyle}>
      {countries.map((ele) => {
        return (
          <div key={ele.cca3} style={cardStyle}>
            <img
              src={ele.flags.png}
              alt={`Flag of ${ele.flags.png}`}
              style={flagStyle}
            />
            <h2>{ele.name.common}</h2>
          </div>
        );
      })}
    </div>
  );
}