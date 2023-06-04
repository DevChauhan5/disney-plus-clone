import React from "react";
import GenreMovieList from "./components/GenreMovieList";
import Navbar from "./components/Navbar";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
}

export default App;
