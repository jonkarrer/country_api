import React from "react";

interface Tile {
  image: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}
const CountryTile = ({ image, name, population, region, capital }: Tile) => {
  return (
    <div className=" m-6 h-64 w-52 dark:bg-dark-elements shadow font-normal">
      <div className="h-32">
        <img src={image} alt="flag" className="h-full object-cover" />
      </div>
      <div className="grid">
        <h2 className="mx-5 my-2.5 text-base">
          <strong>{name}</strong>
        </h2>
        <div className="space-y-1 mx-5 text-xs">
          <p>
            <strong>Population:</strong>
            {population}
          </p>
          <p>
            <strong>Region:</strong>
            {region}
          </p>
          <p>
            <strong>Capital:</strong>
            {capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryTile;
