import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import {Link} from "react-router-dom";
import Logo from "../assets/blend_logo.png";

export default function ErrorPage() {
    return(<div className="flex flex-col min-h-screen justify-between bg-raisin-black">
        <div className="flex-1">
            <div className="w-full flex fixed -bottom-1 justify-center z-50">
                <Navbar />
            </div>
            <div className="min-h-screen bg-raisin-black text-white flex flex-col items-center">
                <header className="bg-raisin-black mt10">
                    <Link to="/">
                        <img src={Logo} alt="logo" className="shadow-lg shadow-pacific-cyan rounded-full w-32 mt-10" />
                    </Link>
                </header>
                <div className="flex flex-col text-white font-title items-center mt-28">
                    <h1 className="text-8xl">404</h1>
                    <h2 className="text-4xl">Page not Found</h2>
                </div>
            </div>
        </div>
        <Footer />
    </div>);
}