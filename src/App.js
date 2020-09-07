import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import MiniDrawer from "./components/Drawer";

function App() {
  return (
    <div>
      <MiniDrawer>
        <Cards />
      </MiniDrawer>
    </div>
  );
}

export default App;
