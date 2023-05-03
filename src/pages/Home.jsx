import React, { useState, useEffect } from 'react';
import Logo from './../assets/blend_logo.png';
import data_ing from '../in/data_ing.json';
import data_col from '../in/data_col.json';
import Slider from '../components/Slider/Slider.jsx';

export default function Home() {
    const [popularCocktails, setPopularCocktails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchPopularCocktails() {
            setIsLoading(true);
            try {
                const response = await fetch(
                    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita',
                );
                const data = await response.json();
                setPopularCocktails(data.drinks.slice(0, 6));
            } catch (error) {
                setPopularCocktails([]);
            }
            setIsLoading(false);
        }
        fetchPopularCocktails();
    }, []);

    return (
        <div className="flex flex-col items-center mt-10 overflow-x-hidden">
            <img
                src={Logo}
                className="shadow-lg shadow-pacific-cyan rounded-full w-32"
            />
            <div className="p-10 flex flex-col items-center">
                <h1 className="font-title text-white font-bold text-2xl">
                    Popular Cocktails
                </h1>
                {isLoading ? (
                    <div className="text-white font-title text-lg">Loading...</div>
                ) : (
                    <>
                        <Slider data={{ drinks: popularCocktails }} />
                        <h1 className="font-title text-white font-bold text-2xl">Ingredients</h1>
                        <Slider data={data_ing} cardType="ingredient" />
                        <h1 className="font-title text-white font-bold text-2xl">Categories</h1>
                        <Slider data={data_col} cardType="collection" />
                    </>
                )}
            </div>
        </div>
    );
}
