import React from "react";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
// import Navigation from "./components/Navigation";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { Header } from "./components/Header";
import ListingIndex from "./components/Listings/ListingIndex";
import ListingShow from "./components/Listings/ListingShowPage";
import './index.css'


function App() {
  return (
    <>
      <Header />
      <Dropdown />
      
      {/* <Navigation id='session-Links' /> */}
        <Switch>
          <Route exact path="/">
            <ListingIndex />
          </Route>
          <Route path="/listings/:listingId">
            <ListingShow />
          </Route>
        </Switch>
    </>
  );
}

export default App;