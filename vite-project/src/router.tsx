import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import AboutMe from "./routes/AboutMe";
import Experience from "./routes/Experience";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
}

export default Router;
