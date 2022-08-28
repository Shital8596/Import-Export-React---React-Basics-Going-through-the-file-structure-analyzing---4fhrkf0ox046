import React, { Component, useState } from "react";
import './styles/App.css';
import './Heading.js';
import './InputQuery.js';
import './SubHeading.js';
import './SubmitButton.js';

const App = () => {
  return ReactDOM.render(
    <div id="main">
      <Heading />
      <InputQuery />
      <SubHeading />
      <SubmitButton />
    </div>
  )
}
<div id="app"></div> 
ReactDOM.render(<App />, document.querySelector("#app"));

export default App

