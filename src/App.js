import React from "react";
import "./App.css";
import Cards from "./components/HomeCards";
import MiniDrawer from "./components/Drawer";
import VideoSection from "./components/VideoSection";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <MiniDrawer>
        <Switch>
          <Route exact path="/" component={Cards} />
          <Route path="/video/:slug" component={VideoSection} />
          <Route component={Cards} />
        </Switch>
      </MiniDrawer>
    </div>
  );
}

export default App;
