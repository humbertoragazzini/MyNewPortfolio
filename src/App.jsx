import { useState } from "react";
import "./App.css";
import Experience from "./components/organisms/Experience";
import { AppProvider } from "./context/AppContext";
import OverlayMenu from "./components/molecules/menu/OverlayMenu";

function App() {
  const [Scroll, setScroll] = useState(0);

  return (
    <main className="w-screen h-screen overflow-hidden">

      <AppProvider>
        <OverlayMenu></OverlayMenu>
        <Experience></Experience>
      </AppProvider>
    </main>
  );
}

export default App;
