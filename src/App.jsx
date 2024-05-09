import React from "react";
import icons from "./data/icons.json";
import VerticalDock from "./components/VerticalDock";

const App = () => {
  return (
    <div id="app-container" className="h-full flex items-center">
      <VerticalDock icons={icons} />
    </div>
  );
};

export default App;
