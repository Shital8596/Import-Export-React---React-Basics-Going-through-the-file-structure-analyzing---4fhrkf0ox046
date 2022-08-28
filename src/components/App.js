import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import './styles/App.css';
import './Heading.js';
import './InputQuery.js';
import './SubHeading.js';
import './SubmitButton.js';

const App = () => {
  return (
    <div id="main">
      <Heading />
      <InputQuery />
      <SubHeading />
      <SubmitButton />
    </div>
  )
}
ReactDOM.render(App(), document.getElementById("root1"));

export default App

