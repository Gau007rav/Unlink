
import {Routes,Route} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import Rockets from "./components/Rockets";
import Navbar from "./components/Navbar";
import './App.css';
function App() {
  return (
    <div>
    <div class='flex'>
    <Navbar></Navbar>
     <div className="flex-grow  lg:pt-0  ">
      <Routes>
      <Route path="/"  element={<Dashboard/>}></Route>
      <Route path="/Rockets"  element={<Rockets/>}></Route>
      </Routes>
    </div>
    </div>
    </div>

  );
}

export default App;
