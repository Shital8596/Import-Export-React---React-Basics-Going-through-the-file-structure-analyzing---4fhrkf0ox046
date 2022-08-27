import React, { Component, useState } from "react";
import './styles/App.css';
import 'src/components/Heading.js'
import './components/InputQuery'
import './components/SubHeading'
import './components/SubmitButton'

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

