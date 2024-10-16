import { useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import Footer from "./components/Footer";
import NavDrawer from "./components/NavDrawer";
function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <BrowserRouter>
      <NavBar toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
      <NavDrawer toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
      <Router />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
