import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {Outlet, useLocation} from "react-router-dom";
import {useEffect} from "react";

function App() {

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0,0);
    }, [location]);

    return (
        <div className="flex flex-col min-h-screen justify-between bg-raisin-black">
            <div className="flex-1 laptop:flex laptop:justify-center">
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
