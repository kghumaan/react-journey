require('file-loader?name=[name].[ext]!./index.html');

import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

// import StaticPage from "./StaticPage"
// ReactDOM.render(<StaticPage />, document.getElementById("root"))

import DigitalBusinessCard from "./DigitalBusinessCard"
ReactDOM.render(<DigitalBusinessCard />, document.getElementById("root"))