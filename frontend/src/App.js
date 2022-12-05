import React from "react";
// import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
// import Navigation from "./components/Navigation";
import { Dropdown } from "./components/Dropdown/Dropdown";

function App() {
  return (
    <>
      <Dropdown />
      {/* <Navigation id='session-Links' /> */}
        {/* <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch> */}
    </>
  );
}

export default App;