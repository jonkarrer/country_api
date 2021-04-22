import React from "react";

interface IPage {
  flag: string;
  name: string;
  native: string;
  population: number;
  region: string;
  sub: string;
  capital: string;
  domain: string;
  currencies: string;
  lang: string;
  border: [];
}

const Page = ({
  flag,
  name,
  native,
  population,
  region,
  sub,
  capital,
  domain,
  currencies,
  lang,
  border,
}: IPage) => {
  return (
    <div>
      <div>
        <img src={flag} alt="" />
      </div>
      <div>
        <h1>{name}</h1>
        <div>
          <div>Native Name: {native}</div>
          <div>Population: {population}</div>
          <div>Region: {region}</div>
          <div>Sub Region: {sub}</div>
          <div>Capital: {capital}</div>
          <div>Top Level: {domain}</div>
          <div>Currencies: {currencies}</div>
          <div>Languages: {lang}</div>
        </div>
        <span>
          Border Countries:{" "}
          {border.map((item) => (
            <div>{item}</div>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Page;
