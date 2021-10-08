import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Tile from "./components/CountryTile";
import Page from "./components/Page";
import { ITile } from "./components/CountryTile";
import Arrow from "./assets/arrow";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [homePage, showHomePage] = useState(true);
  const [flag, setFlag] = useState(<></>);
  const [filter, setFilter] = useState("Africa");
  const [filterSwitch, turnOnFilter] = useState(false);
  const [searchSwitch, turnOnSearch] = useState(false);
  function filterByRegion(item: any) {
    if (filterSwitch === false) {
      return item;
    } else if (filterSwitch) {
      if (searchSwitch) {
        if (item.name === filter) {
          return item;
        }
      }
      if (item.region === filter) {
        return item;
      }
    }
  }
  useEffect(() => {
    //Fetch API
    async function getData() {
      let response = await fetch("https://restcountries.com/v2/all");
      let data = await response.json();
      setCountries(data);
      setLoading(false);
    }
    getData();
  }, []);

  const openCountry = (index: number) => {
    let filteredCountries = countries.filter((item: ITile) =>
      filterByRegion(item)
    );
    let {
      //Destructure API Data
      flag,
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      languages,
      topLevelDomain,
      currencies,
      borders,
    } = filteredCountries[index];

    showHomePage(false); //Hide home page

    let renderSelectedCountry = (
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
          lang={languages}
          currencies={currencies}
          border={borders}
        />
      </div>
    );
    setFlag(renderSelectedCountry);
  };
  return (
    <div className="font-custom dark:text-dark-text dark:bg-dark-background overflow-hidden ">
      {homePage ? (
        <Search
          searchSwitch={turnOnSearch}
          filterSwitch={turnOnFilter}
          filter={setFilter}
        />
      ) : (
        <div className="flex py-16">
          <div
            className="cursor-pointer bg-light-back text-xs mx-5 sm:mx-16 px-6 py-1.5 w-1/8 rounded flex items-center shadow dark:bg-dark-elements"
            onClick={() => showHomePage(true)}
          >
            <Arrow />
            <p className="ml-2">Back</p>
          </div>
        </div>
      )}
      {homePage ? (
        <div className="flex flex-wrap justify-center w-screen ">
          {loading ? (
            <div>....Loading</div>
          ) : (
            countries
              .filter((item: ITile) => filterByRegion(item))
              .map((item: ITile, index) => (
                <div onClick={() => openCountry(index)}>
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
        <div>{flag}</div>
      )}
    </div>
  );
}

export default App;
