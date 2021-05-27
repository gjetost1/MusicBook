import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Map from "./components/Map";
import GrabVenues from "./components/GrabVenues"
import AllVenues from "./components/AllVenues"
import NewVenue from "./components/NewVenue"
import GrabRatings from "./components/GrabRatings"
import AllRatings from "./components/AllRatings"
import NewRating from "./components/NewRating"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
             <Map />
          </Route>
          {/* <Route path="/signup">
            <SignupFormPage />
          </Route> */}
          <Route path="/venues/new">
            <NewVenue/>
          </Route>
          <Route path="/venues">
            <AllVenues/>
          </Route>
          <Route path="/venues/:id">
            <GrabVenues/>
          </Route>
          <Route path="/ratings/:id">
            <GrabRatings/>
          </Route>
          <Route path="/ratings">
            <AllRatings/>
          </Route>
          <Route path="/ratings/new">
            <NewRating/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
