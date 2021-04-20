import React from "react";
import Glass from "../assets/glass";
export default function Search() {
  return (
    <div className="h-1/6 flex items-center dark:bg-dark-background">
      <form
        action="GET"
        className="text-xs mx-16 px-6 py-3 w-1/3 rounded dark:bg-dark-elements flex"
      >
        <label htmlFor="input">
          <Glass width={15} />
        </label>
        <input
          type="text"
          placeholder="Search for a country..."
          className="dark:bg-dark-elements px-5"
        />
      </form>
    </div>
  );
}
