
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip text={"This is a tooltip"}>
          <div className="text">Hover over me</div>
        </Tooltip>
        <Tooltip text={"This is another tooltip"}>
          <div className="text">Hover over me to see another tooltip</div>
        </Tooltip>
    </div>
  )
}

export default App
