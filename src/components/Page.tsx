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
  currencies: any;
  lang: any;
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
  let language = lang[0].name;
  let money = currencies[0].name;
  return (
    <div className="flex justify-start align-middle mx-16">
      <div>
        <div
          className="h-72 w-100"
          style={{
            background: `url(${flag})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="w-100 ml-44 h-80">
        <h1 className="text-3xl font-semibold my-5">{name}</h1>
        <div className="text-sm grid grid-cols-2 gap-2 my-8">
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
            Currencies: <a className="font-light">{money}</a>
          </div>
          <div>
            Language: <a className="font-light">{language}</a>
          </div>
        </div>
        <nav className="text-sm my-2">
          Border Countries:{" "}
          {border.map((item, index) => (
            <a
              key={index}
              className="font-light text-sm py-1 px-2 bg-light-back mx-1 dark:bg-dark-elements"
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
