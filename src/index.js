require('file-loader?name=[name].[ext]!./index.html');

import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

// import StaticPage from "./components/digital_business_card/StaticPage"
// ReactDOM.render(<StaticPage />, document.getElementById("root"))

// import DigitalBusinessCard from "./components/digital_business_card/DigitalBusinessCard"
// ReactDOM.render(<DigitalBusinessCard />, document.getElementById("root"))

// import Airbnb from "./components/airbnb/Airbnb"
// ReactDOM.render(<Airbnb />, document.getElementById("root"))

import App from "./components/form/App"
ReactDOM.render(<App />, document.getElementById("root"))