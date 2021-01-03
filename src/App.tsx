import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import CreateBoard from "./pages/CreateBoard";
import MainPage from "./pages/MainPage";
import "./App.css";

const App: React.FunctionComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/create">
            <CreateBoard />
          </Route>
          <Route>
            <div>Not Found</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
