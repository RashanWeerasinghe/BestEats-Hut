import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
    </div>
  );
}

export default App;
