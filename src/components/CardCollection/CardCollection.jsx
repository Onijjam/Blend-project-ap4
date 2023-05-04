import {Link} from "react-router-dom";
export default function CardCollection(props) {
    let collection = props.data;

    return (
        <Link to={`/category-show-collections/${collection.strCategory.replace('/', '-')}`} className="w-auto">
            <div className="relative max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full h-48 object-cover" src={collection.strDrinkThumb} alt={`Image ${collection.strCategory}`} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-3">
                    <div className="font-bold font-title text-2xl text-center text-white">{collection.strCategory}</div>
                </div>
            </div>
        </Link>
    );
}