import { useState } from "react";
import "./App.css";
import Experience from "./components/organisms/Experience";

function App() {
  const [Scroll, setScroll] = useState(0);

  return (
    <main className="w-screen h-screen overflow-hidden">
      <Experience></Experience>
    </main>
  );
}

export default App;
