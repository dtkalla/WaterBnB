import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <div id='modalContent'>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>
            See if this is visible.
          </p>
        </div>
      </div>
      </div>
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