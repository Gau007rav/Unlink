import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Dashboard from "./components/Dashboard";
import Rockets from "./components/Rockets";
import Navbar from "./components/Navbar";
import CV from "./components/Contactme";
import "./App.css";
const About = lazy(() => import("./components/About"));
function App() {
  return (
    <div>
      <div class="flex">
        <Navbar></Navbar>
        <div className="flex-grow  lg:pt-0  ">
          <Suspense fallback={<div>....loading</div>}>
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/Rockets" element={<Rockets />}></Route>

              <Route path="/About" element={<About />}></Route>

              <Route path="/Contactme" element={<CV />}></Route>
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
