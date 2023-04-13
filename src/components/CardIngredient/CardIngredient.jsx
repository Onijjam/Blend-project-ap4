export default function CardIngredient(props) {
    let ingredient = props.data

    return (
        <div className="flex flex-col items-center">
            <img
                className="w-24 h-24 object-cover rounded-full mb-2"
                src={ingredient.strImage}
                alt={ingredient.strIngredient}
            />
            <p className="text-center font-title font-bold text-sm text-white">{ingredient.strIngredient}</p>
        </div>
    );
}
