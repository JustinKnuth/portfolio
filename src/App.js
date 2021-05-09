import background from "./background.png";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Resume from "./components/Resume"
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Nav />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
    </div>
  );
}

export default App;
