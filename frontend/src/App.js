import React from "react";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
// import Navigation from "./components/Navigation";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { Header } from "./components/Header";
import ListingIndex from "./components/Listings/ListingIndex";
import ListingShow from "./components/Listings/ListingShowPage";
import './index.css'
import ReservationsIndex from "./components/Reservations/ReservationsShowPage";
import ReservationUpdatePage from "./components/Reservations/ReservationUpdatePage";
import MapContainer from "./components/MapContainer/MapContainer";

function App() {
  return (
    <>
      <Header />
      <Dropdown />
      
      {/* <Navigation id='session-Links' /> */}
        <Switch>
          <Route exact path="/">
            <ListingIndex />
            {/* <MapContainer /> */}
          </Route>
          <Route path="/listings/:listingId">
            <ListingShow />
          </Route>
          <Route exact path="/trips">
            <ReservationsIndex />
          </Route>
          <Route path="/trips/:reservationId">
            <ReservationUpdatePage />
          </Route>
        </Switch>
    </>
  );
}

export default App;