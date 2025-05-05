import { useState } from "react";
import "./App.css";
import Experience from "./components/organisms/Experience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="h-screen w-screen">
      <Experience></Experience>
    </main>
  );
}

export default App;
