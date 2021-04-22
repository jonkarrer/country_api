import React from "react";

export interface ITile {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

const CountryTile = ({ flag, name, population, region, capital }: ITile) => {
  return (
    <div className="m-6 h-64 w-52 dark:bg-dark-elements shadow font-normal cursor-pointer">
      <div
        className="h-32"
        style={{
          background: `url(${flag})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="grid">
        <h2 className="mx-3 my-3 text-sm">
          <strong>{name}</strong>
        </h2>
        <div className="space-y-1 mx-3 text-xs">
          <p>
            <strong>Population: </strong>
            {population}
          </p>
          <p>
            <strong>Region: </strong>
            {region}
          </p>
          <p>
            <strong>Capital: </strong>
            {capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryTile;
