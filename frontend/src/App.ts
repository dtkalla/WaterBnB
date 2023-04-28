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
import FilteredMapContainer from "./components/FilteredListings/FilteredMapContainer";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import FilteredListings from "./components/FilteredListings/FilteredListings";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getListings } from "./store/listings";
import { fetchListings } from "./store/listings";
import './components/MapContainer/MapContainer.css'


function App() {
  const dispatch = useDispatch();
    const listings: any[] = useSelector(getListings)


    useEffect(() => {
        dispatch(fetchListings())
    }, [])
    const locations: any[] = []

    for (let i = 0; i < listings.length; i++) {
        locations.push({
            id: listings[i].id,
            title: listings[i].listerName+"'s " + listings[i].buildingType,
            rating: (parseFloat(listings[i].rating).toFixed(1)),
            place: listings[i].city + ', ' + listings[i].country,
            price: listings[i].price,
            location: {
                lat: parseFloat(listings[i].latitude),
                lng: parseFloat(listings[i].longitude)
            },
            typeOfWater: listings[i].typeOfWater,
            numberOfRatings: listings[i].numberOfRatings,
            petsAllowed: listings[i].petsAllowed
        })
    }

  return (
    <>
      <HeaderBar />
      {/* <Navigation id='session-Links' /> */}
        <Switch>
          <Route exact path="/">
            <div id='test-index-map-div'>
              <div id='the-listing-index'>
                <ListingIndex />
              </div>
              <div id='the-actual-map'>
                <MapContainer locations={locations} />
              </div>
            </div>
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
          <Route exact path="/:filter">
            <div id='test-index-map-div'>
              <div id='the-listing-index'>
                <FilteredListings />
              </div>
              <div id='the-actual-map'>
                <FilteredMapContainer locations={locations} />
              </div>
            </div>
          </Route>
        </Switch>
    </>
  );
}

export default App;