import React from "react";
import Search from "./components/Search";
import Tile from "./components/CountryTile";
import flag from "./assets/flag.svg";
function App() {
  return (
    <div className="font-custom dark:text-dark-text dark:bg-dark-background">
      <Search />
      <div className="flex flex-wrap justify-center w-screen ">
        <Tile
          image={flag}
          name="Merica"
          population={323_947_000}
          region="Americas"
          capital="Washingtion, D.C."
        />
        <Tile
          image={flag}
          name="Merica"
          population={323_947_000}
          region="Americas"
          capital="Washingtion, D.C."
        />
        <Tile
          image={flag}
          name="Merica"
          population={323_947_000}
          region="Americas"
          capital="Washingtion, D.C."
        />
        <Tile
          image={flag}
          name="Merica"
          population={323_947_000}
          region="Americas"
          capital="Washingtion, D.C."
        />
        <Tile
          image={flag}
          name="Merica"
          population={323_947_000}
          region="Americas"
          capital="Washingtion, D.C."
        />
        <Tile
          image={flag}
          name="Merica"
          population={323_947_000}
          region="Americas"
          capital="Washingtion, D.C."
        />
        <Tile
          image={flag}
          name="Merica"
          population={323_947_000}
          region="Americas"
          capital="Washingtion, D.C."
        />
      </div>
    </div>
  );
}

export default App;
