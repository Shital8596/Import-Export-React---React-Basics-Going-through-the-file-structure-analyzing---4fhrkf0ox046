import React, { Component, useState } from "react";
import './styles/App.css';
import './Heading'
import './InputQuery'
import './SubHeading'
import './SubmitButton'

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

export default App

