import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <modal id='modal'>
        <button id="modalButton">
          <img id="modalButtonImage" src="https://cdn-icons-png.flaticon.com/512/3524/3524335.png"/>
        </button>
      </modal>
      <Navigation />

        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
    </>
  );
}

export default App;