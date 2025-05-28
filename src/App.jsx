import { useState } from "react";
import "./App.css";
import Experience from "./components/organisms/Experience";

function App() {
  const [Scroll, setScroll] = useState(0);

  return (
    <main className="w-screen h-screen overflow-hidden">

      <AppProvider>
        <Experience></Experience>
      </AppProvider>
    </main>
  );
}

export default App;
