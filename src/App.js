import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import MiniDrawer from "./components/Drawer";
import VideoSection from "./components/VideoSection";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <MiniDrawer>
        <Route exact path="/" component={Cards} />
        <Route path="/video/:slug" component={VideoSection} />
      </MiniDrawer>
    </div>
  );
}

export default App;
