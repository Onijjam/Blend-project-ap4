import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="flex flex-col min-h-screen justify-between bg-raisin-black">
            <div className="flex-1">
                <div className="w-full flex fixed -bottom-1 justify-center z-50">
                    <Navbar />
                </div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default App
