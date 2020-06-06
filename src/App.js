import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import Dashboard from './Component/Dashboard/Dashboard';
import LocationView from './Component/LocationView/LocationView';
import LocationNavbar from './Component/LocationNavbar/LocationNavbar';
import RoomDetails from './Component/RoomDetails/RoomDetails';
import ReviewHouseRules from './Component/ReviewHouseRules/ReviewHouseRules';
import WhoComing from './Component/WhoComing/WhoComing';
import ConfirmAndPay from './Component/ConfirmAndPay/ConfirmAndPay';
import Login from './Component/Auth/Login';
import SignUp from './Component/SignUp/SignUp';

function App() {
  return (
    <div className="App">
	  <Router>
      <Switch>
		  <Route exact path="/">
            <Navbar></Navbar>
			      <Dashboard></Dashboard>
          </Route>
		  
		  <Route path="/location">
            <LocationNavbar></LocationNavbar>
            <LocationView></LocationView>
          </Route>
		  
          <Route path="/room-details">
		        <Navbar></Navbar>
            <RoomDetails></RoomDetails>
          </Route>

          <Route path="/review-house-rules">
            <ReviewHouseRules></ReviewHouseRules>
          </Route>

          <Route path="/who-coming">
            <WhoComing></WhoComing>
          </Route>

          <Route path="/confirm-and-pay">
            <ConfirmAndPay></ConfirmAndPay>
          </Route>

          <Route path="/login">
            <Navbar></Navbar>
            <Login></Login>
          </Route>

          <Route path="/sign-up">
            <Navbar></Navbar>
            <SignUp></SignUp>
          </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
