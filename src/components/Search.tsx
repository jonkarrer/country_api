import React, { useState } from "react";
import Glass from "../assets/glass";

export default function Search({ searchSwitch, filterSwitch, filter }: any) {
  const [hidden, setHidden] = useState(true);
  const [inputValue, setValue] = useState("");
  const handleChange = (event: any) => {
    let criteria =
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    if (event.target.value != "") {
      filterSwitch(true);
      searchSwitch(true);
      setValue(event.target.value);
      filter(criteria);
    } else {
      filterSwitch(false);
      searchSwitch(false);
      setValue(event.target.value);
    }
  };
  const handleClick = (item: string) => {
    filterSwitch(true);
    filter(item);
  };
  return (
    <div className="sticky top-0 z-20 h-32 flex sm:justify-between justify-around items-center">
      <form
        action="GET"
        className="bg-light-back text-xs px-2 sm:mx-16 sm:px-6 py-3 w-1/2 sm:w-1/3 rounded flex items-center shadow dark:bg-dark-elements"
      >
        <label htmlFor="input">
          <Glass width={15} />
        </label>
        <input
          type="text"
          placeholder="Search for a country..."
          className="bg-light-back dark:bg-dark-elements px-5 w-full outline-none"
          onChange={handleChange}
          value={inputValue}
        />
      </form>
      <div>
        <div
          onClick={() => setHidden(!hidden)}
          className=" relative text-xs sm:mx-16 px-6 py-3 rounded flex items-center shadow cursor-pointer bg-light-back dark:bg-dark-elements"
        >
          <p>Filter by Region</p>
          <span className="ml-5 text-m">&or;</span>
        </div>
        <ul
          className={`${
            hidden ? "hidden" : "block"
          } absolute font-light text-xs space-y-2.5 sm:mx-16 p-8 py-3 my-1 rounded items-center shadow cursor-pointer bg-light-back dark:bg-dark-elements`}
        >
          <li
            className="hover:text-regular-purple"
            onClick={() => handleClick("Africa")}
          >
            Africa
          </li>
          <li
            className="hover:text-regular-purple"
            onClick={() => handleClick("Americas")}
          >
            Americas
          </li>
          <li
            className="hover:text-regular-purple"
            onClick={() => handleClick("Asia")}
          >
            Asia
          </li>
          <li
            className="hover:text-regular-purple"
            onClick={() => handleClick("Europe")}
          >
            Europe
          </li>
          <li
            className="hover:text-regular-purple"
            onClick={() => handleClick("Oceania")}
          >
            Oceania
          </li>
        </ul>
      </div>
    </div>
  );
}
