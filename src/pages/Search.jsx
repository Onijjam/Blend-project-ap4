import React, { useState } from 'react';
import Logo from './../assets/blend_logo.png';
import Slider from "../components/Slider/Slider.jsx";
import Card from "../components/Card/Card.jsx";
import {Link} from "react-router-dom";

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [cocktailsByName, setCocktailsByName] = useState({});
    const [cocktailsByIngredient, setCocktailsByIngredient] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    async function searchCocktail(cocktailName) {
        setSearchValue(cocktailName);
        setIsLoading(true);

        // Recherche par nom de cocktail
        try {
            const responseByName = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`,
            );
            const dataByName = await responseByName.json();
            if (dataByName.drinks) {
                setCocktailsByName({ drinks: dataByName.drinks.slice(0, 5) });
            } else {
                setCocktailsByName({ drinks: [] });
            }
        } catch (error) {
            setCocktailsByName({ drinks: [] });
        }

        // Recherche par ingrédient
        try {
            const responseByIngredient = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${cocktailName}`,
            );
            const dataByIngredient = await responseByIngredient.json();
            if (dataByIngredient.drinks) {
                setCocktailsByIngredient({ drinks: dataByIngredient.drinks.slice(0, 5) });
            } else {
                setCocktailsByIngredient({ drinks: [] });
            }
        } catch (error) {
            setCocktailsByIngredient({ drinks: [] });
        }

        setIsLoading(false);
    }

    async function handleSearch(e) {
        e.preventDefault();
        await searchCocktail(searchValue);
    }

    return (
        <div className="flex flex-col items-center bg-raisin-black min-h-screen overflow-x-hidden">
            <header className="bg-raisin-black mt10">
                <Link to="/">
                    <img src={Logo} alt="logo Blend" className="shadow-lg shadow-cinnabar rounded-full w-32 mt-10" />
                </Link>
            </header>
            <form onSubmit={handleSearch} className="mt-10 w-full max-w-md flex justify-center flex-col">
                <label htmlFor="search-input" className="text-white font-title text-xl">
                    <h1>Search</h1>
                </label>
                <input
                    id="search-input"
                    className="w-64 h-12 px-4 text-xl font-title text-gray-600 bg-white rounded focus:outline-none"
                    type="text"
                    placeholder="Type here"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </form>
            <hr className="w-4/5 mt-8 border-t border-white" />
            <div className="mt-8 gap-4 flex flex-col items-center">
                {isLoading ? (
                    <div className="text-white font-title text-lg">Loading...</div>
                ) : (!cocktailsByName.drinks || cocktailsByName.drinks.length === 0) && (!cocktailsByIngredient.drinks || cocktailsByIngredient.drinks.length === 0) ? (
                    <>
                        <h2
                            className="text-white font-title text-lg underline cursor-pointer"
                            onClick={() => searchCocktail("margarita")}
                        >
                            Margarita
                        </h2>
                        <h2
                            className="text-white font-title text-lg underline cursor-pointer"
                            onClick={() => searchCocktail("rum")}
                        >
                            Rum
                        </h2>
                        <h2
                            className="text-white font-title text-lg underline cursor-pointer"
                            onClick={() => searchCocktail("piece")}
                        >
                            A Piece of Ass
                        </h2>
                    </>
                ) : (
                    <>
                        {cocktailsByName.drinks && cocktailsByName.drinks.length > 0 && (
                            <>
                                <h2 className="font-title text-white font-bold text-2xl">Results by name:</h2>
                                {cocktailsByName.drinks.length > 2 ? (
                                    <Slider data={cocktailsByName} />
                                ) : (
                                    <div className="flex flex-col justify-center gap-4">
                                        {cocktailsByName.drinks.map((drink) => (
                                            <Card key={drink.idDrink} data={drink} />
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                        {cocktailsByIngredient.drinks && cocktailsByIngredient.drinks.length > 0 && (
                            <>
                                <h2 className="font-title text-white font-bold text-2xl">Results by ingredient:</h2>
                                {cocktailsByIngredient.drinks.length > 2 ? (
                                    <Slider data={cocktailsByIngredient} />
                                ) : (
                                    <div className="flex flex-col justify-center gap-4">
                                        {cocktailsByIngredient.drinks.map((drink) => (
                                            <Card key={drink.idDrink} data={drink} />
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}