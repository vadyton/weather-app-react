import React from "react";
import Navbar from "./components/Navbar";
import Forecast from "./components/Forecast";
import SavedCitiesList from "./components/SavedCitiesList";

function App() {
  return (
    <>
      <Navbar />
      <Forecast />
      <SavedCitiesList />
    </>
  );
}

export default App;
