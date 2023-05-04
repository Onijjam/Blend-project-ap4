import {Link} from "react-router-dom";

export default function Card(props) {
    let drink = props.data

    return (
        <Link to={`/details/${drink.idDrink}`} className="w-full">
            <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={drink.strDrinkThumb} alt={`Image ${drink.idDrink}`} />
                    <div className="flex justify-evenly items-center pt-1 pb-2">
                        <div className="font-bold font-title text-xl mb-1">{drink.strDrink}</div>
                        <span
                            className="inline-flex items-center gap-0.5 rounded-full bg-black px-2 py-1 text-xs font-semibold text-white"
                        >
                          4.5
                          <svg
                              className="h-4 w-4 text-yellow-300"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                        </span>
                    </div>
                    <div className="px-3.5 pb-1">
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold font-body text-gray-700 mr-2 mb-2">{drink.strAlcoholic}</span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold font-body text-gray-700 mr-2 mb-2">{drink.strCategory}</span>
                    </div>
            </div>
        </Link>
    );
}