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
    <div className="flex justify-start align-middle mx-16 h-screen">
      <div className="w-1/3">
        <div
          className="h-80 w-full"
          style={{
            background: `url(${flag})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="w-1/3 ml-48 h-80">
        <h1 className="text-3xl font-semibold my-5">{name}</h1>
        <div className="text-sm grid grid-cols-2 gap-3 my-8">
          <div>
            Native Name: <a className="font-light">{native}</a>
          </div>
          <div>
            Population: <a className="font-light">{population}</a>
          </div>
          <div>
            Region: <a className="font-light">{region}</a>
          </div>
          <div>
            Sub Region: <a className="font-light">{sub}</a>
          </div>
          <div>
            Capital: <a className="font-light">{capital}</a>
          </div>
          <div>
            Top Level: <a className="font-light">{domain}</a>
          </div>
          <div>
            Currencies: <a className="font-light">{currencies}</a>
          </div>
          <div>
            Languages: <a className="font-light">{lang}</a>
          </div>
        </div>
        <nav>
          Border Countries:{" "}
          {border.map((item, index) => (
            <a
              key={index}
              className="font-light text-sm py-2 px-4 bg-light-back mx-1 dark:bg-dark-elements"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Page;
