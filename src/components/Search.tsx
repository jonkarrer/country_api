import React, { useState } from "react";
import Glass from "../assets/glass";
export default function Search() {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="h-1/6 flex justify-between items-center dark:bg-dark-background">
      <form
        action="GET"
        className="text-xs mx-16 px-6 py-3 w-1/3 rounded flex items-center shadow dark:bg-dark-elements"
      >
        <label htmlFor="input">
          <Glass width={15} />
        </label>
        <input
          type="text"
          placeholder="Search for a country..."
          className="dark:bg-dark-elements px-5 w-full outline-none"
        />
      </form>
      <div>
        <div
          onClick={() => setHidden(!hidden)}
          className=" relative text-xs mx-16 px-6 py-3 rounded flex items-center shadow cursor-pointer dark:bg-dark-elements"
        >
          <p>Filter by Region</p>
          <span className="ml-5 text-m">&or;</span>
        </div>
        <ul
          className={`${
            hidden ? "hidden" : "block"
          } absolute font-light text-xs space-y-2.5 mx-16 p-8 py-3 my-1 rounded items-center shadow cursor-pointer dark:bg-dark-elements`}
        >
          <li className="hover:text-regular-purple">Africa</li>
          <li className="hover:text-regular-purple">America</li>
          <li className="hover:text-regular-purple">Asia</li>
          <li className="hover:text-regular-purple">Europe</li>
          <li className="hover:text-regular-purple">Oceania</li>
        </ul>
      </div>
    </div>
  );
}
