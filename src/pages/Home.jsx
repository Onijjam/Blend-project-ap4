import Logo from "./../assets/blend_logo.png"
import data_pop from "../in/data_pop.json"
import data_col from "../in/data_col.json"
import data_ing from "../in/data_ing.json"
import Slider from "../components/Slider/Slider.jsx";
export default function Home() {
    return (
        <div className="flex flex-col items-center mt-10 overflow-x-hidden">
            <img src={Logo} className="shadow-lg shadow-pacific-cyan rounded-full w-32"/>
            <div className="p-10 flex flex-col items-center">
                <h1 className="font-title text-white font-bold text-2xl">Popular Cocktails</h1>
                <Slider data={data_pop} />
                <h1 className="font-title text-white font-bold text-2xl">Ingredients</h1>
                <Slider data={data_ing} cardType="ingredient"/>
                <h1 className="font-title text-white font-bold text-2xl">Collections</h1>
                <Slider data={data_col} cardType="collection"/>
            </div>
        </div>
    );
}