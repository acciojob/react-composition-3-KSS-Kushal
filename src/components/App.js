import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Tooltip text={"This is a tooltip"}>
        <h2 className="tooltip">
          <div>
          <div className="text">This is a tooltip</div>
          </div>
        </h2>
      </Tooltip>
      <Tooltip text={"This is another tooltip"}>
        <p className="tooltip">
          <div className="text">This is another tooltip</div>
        </p>
      </Tooltip>
    </div>
  );
};

export default App;
