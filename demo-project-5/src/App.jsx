import { useState } from "react";

import "./App.css";
import Hero from "./Hero/hero.jsx";
import "./Hero/hero.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Hero />
    </div>
  );
}

export default App;
