import { Suspense, useState } from "react";
import "./App.css";
import Experience from "./components/organisms/Experience";
import { AppProvider } from "./context/AppContext";
import OverlayMenu from "./components/molecules/menu/OverlayMenu";
import IntroMenu from "./components/molecules/menu/IntroMenu";

function App() {
  const [Scroll, setScroll] = useState(0);

  return (
    <main className="w-screen h-screen overflow-hidden">

      <AppProvider>
        <IntroMenu></IntroMenu>
        <OverlayMenu></OverlayMenu>
        {/* <Suspense fallback={<div>Cargando</div>}> */}
        <Experience></Experience>
        {/* </Suspense> */}
      </AppProvider>
    </main>
  );
}

export default App;
