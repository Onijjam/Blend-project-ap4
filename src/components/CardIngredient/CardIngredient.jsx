import {Link} from "react-router-dom";
export default function CardIngredient(props) {
    let ingredient = props.data

    return (
        <Link to={`/ingredient-show-collections/${ingredient.strIngredient}`} className="flex flex-col items-center">
            <img
                className="w-24 h-24 object-cover rounded-full mb-2"
                src={ingredient.strImage}
                alt={ingredient.strIngredient}
            />
            <p className="text-center font-title font-bold text-sm text-white">{ingredient.strIngredient}</p>
        </Link>
    );
}
