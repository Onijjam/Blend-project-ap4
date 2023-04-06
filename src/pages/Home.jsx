import Logo from "./../assets/blend_logo.png"
import data from "./../in/data.json"
import Card from "../components/Card/Card.jsx";
import Slider from "../components/Slider/Slider.jsx";
export default function Home() {
    return (
        <div className="flex flex-col items-center p-5">
            <img src={Logo} className="shadow-lg shadow-pacific-cyan rounded-full w-32"/>
            <div className="p-10">
                <Slider data={data} />
            </div>
        </div>
    );
}