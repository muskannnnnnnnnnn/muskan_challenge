import React,{useState,useEffect} from 'react';
import {Route,BrowserRouter as Router} from "react-router-dom";
import Header from './Header';
import FoodApp from './FoodApp';
import Footer from './Footer';
import Login from './Login'
import FoodItems from './FoodItems'
import ThankYou from './ThankYou'
function App(props) {
  return (
    <div>

  <Router>
    <Route strict exact component={Header} path="/header" history={props.history}></Route>
    <Route strict exact component={Footer} path="/footer" history={props.history}></Route>
    <Route strict exact component={FoodApp} path="/foodapp" history={props.history}></Route>
    <Route strict exact component={Login} path="/" history={props.history}></Route>
    <Route strict exact component={FoodItems} path="/fooditems" history={props.history}></Route>
    <Route strict exact component={ThankYou} path="/thankyou" history={props.history}></Route>
  </Router>

   </div>
 )
}

export default App;
