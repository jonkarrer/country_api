import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Tile from "./components/CountryTile";
import Page from "./components/Page";
import { ITile } from "./components/CountryTile";
import Arrow from "./assets/arrow";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPage, setShowPage] = useState(true);
  const [page, setPage] = useState(<></>);
  useEffect(() => {
    async function getData() {
      let response = await fetch("https://restcountries.eu/rest/v2/all");
      let data = await response.json();
      setCountries(data);
      setLoading(false);
    }
    getData();
  }, []);
  const handleClick = (index: number) => {
    let {
      flag,
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      languages, //Array one object
      topLevelDomain, //Array[0]
      currencies, // Array one object
      borders, //Array
    } = countries[index];
    setShowPage(false);
    let newPage = (
      <div>
        <Page
          flag={flag}
          name={name}
          native={nativeName}
          population={population}
          region={region}
          sub={subregion}
          capital={capital}
          domain={topLevelDomain[0]}
          lang={"lang"}
          currencies={"money"}
          border={borders}
        />
      </div>
    );
    setPage(newPage);
  };
  return (
    <div className="font-custom dark:text-dark-text dark:bg-dark-background">
      {showPage ? (
        <Search />
      ) : (
        <div className="flex py-16">
          <div
            className="cursor-pointer bg-light-back text-xs mx-16 px-6 py-1.5 w-1/8 rounded flex items-center shadow dark:bg-dark-elements"
            onClick={() => setShowPage(true)}
          >
            <Arrow />
            <p className="ml-2">Back</p>
          </div>
        </div>
      )}
      {showPage ? (
        <div className="flex flex-wrap justify-center w-screen ">
          {loading ? (
            <div>....Loading</div>
          ) : (
            countries.map((item: ITile, index) => (
              <div onClick={() => handleClick(index)}>
                <Tile
                  key={index}
                  flag={item.flag}
                  name={item.name}
                  population={item.population}
                  region={item.region}
                  capital={item.capital}
                />
              </div>
            ))
          )}
        </div>
      ) : (
        <div>{page}</div>
      )}
    </div>
  );
}

export default App;
