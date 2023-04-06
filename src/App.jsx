import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";

function App() {


  return (
    <div className="h-screen flex justify-center bg-raisin-black">
        <div className="w-full flex fixed bottom-0 justify-center z-50">
            <Navbar />
        </div>
        <Outlet />
    </div>
  )
}

export default App
