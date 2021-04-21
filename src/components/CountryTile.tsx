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
    <div className=" m-6 w-60 bg-dark-elements shadow grid">
      <img src={image} alt="flag" />
      <div className="grid">
        <h2>{name}</h2>
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
  );
};

export default CountryTile;
