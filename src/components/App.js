import React, { Component, useState } from "react";
import './styles/App.css';
import Heading from './components/Heading';
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
  );
}

export default App

