import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Tile from "./components/CountryTile";
import flag from "./assets/flag.svg";
function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      let response = await fetch("https://restcountries.eu/rest/v2/all");
      let data = await response.json();
      setCountries(data);
      setLoading(false);
    }
    getData();
  }, []);
  return (
    <div className="font-custom dark:text-dark-text dark:bg-dark-background">
      <Search />
      <div className="flex flex-wrap justify-center w-screen ">
        {loading ? (
          <div>....Loading</div>
        ) : (
          countries.map((item: any) => (
            <Tile
              image={item.flag}
              name={item.name}
              population={item.population}
              region={item.region}
              capital={item.capital}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
