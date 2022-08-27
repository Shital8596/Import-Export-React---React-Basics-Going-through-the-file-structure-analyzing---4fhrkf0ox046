import React, { Component, useState } from "react";
import '../styles/App.css';
import '../components/Heading'
import '../components/InputQuery'
import '../components/SubHeading'
import '../components/SubmitButton'

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

