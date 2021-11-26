require('file-loader?name=[name].[ext]!./index.html');

import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))