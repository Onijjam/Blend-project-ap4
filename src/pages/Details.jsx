import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
export default function Details() {
    const [openTab, setOpenTab] = useState(0);
    const [cocktailDetails, setCocktailDetails] = useState(null);
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.idCocktail}`
                );
                const data = await response.json();
                setCocktailDetails(data.drinks[0]);
            } catch (error) {
                console.error("Error fetching cocktail details:", error);
            }
        };

        fetchData();
    }, [params.idCocktail]);

    if (!cocktailDetails) {
        return <div>Loading...</div>;
    }

    const handleClick = (index) => {
        if (openTab === index) {
            setOpenTab(0);
        } else {
            setOpenTab(index);
        }
    };

    const renderDots = (filledDots, totalDots) => {
        let dots = [];
        for (let i = 0; i < totalDots; i++) {
            dots.push(
                <span key={i} className={`inline-block w-4 h-4 rounded-full mr-1 ${i < filledDots ? 'bg-white' : 'bg-gray-500'}`}></span>
            );
        }
        return dots;
    };

    const renderIngredients = () => {
        let ingredients = [];
        for (let i = 1; i <= 15; i++) {
            if (cocktailDetails[`strIngredient${i}`] && cocktailDetails[`strMeasure${i}`]) {
                ingredients.push(
                    <li key={i}>
                        <span className="mr-2">•</span>{cocktailDetails[`strIngredient${i}`]} - {cocktailDetails[`strMeasure${i}`]}
                    </li>
                );
            }
            else if (cocktailDetails[`strIngredient${i}`] && !cocktailDetails[`strMeasure${i}`]) {
                ingredients.push(
                    <li key={i}>
                        <span className="mr-2">•</span>{cocktailDetails[`strIngredient${i}`]}
                    </li>
                );
            }
        }
        return ingredients;
    };

    const renderPreparation = () => {
        const instructions = cocktailDetails.strInstructions.split('.');
        const steps = instructions
            .filter((instruction) => instruction.trim().length > 0)
            .map((instruction, index) => (
                <div key={index} className="flex items-start mb-2">
                    <div className="w-10 h-6 flex justify-center items-center bg-white text-black rounded-full mr-3">
                        {index + 1}
                    </div>
                    <p>{instruction.trim()}.</p>
                </div>
            ));
        return <div>{steps}</div>;
    };

    const tabContent = [
        { title: "Ingrédients", content: <ul>{renderIngredients()}</ul> },
        { title: "Ustensiles", content: <p><span className="mr-2">•</span>{cocktailDetails.strGlass}</p> },
        { title: "Préparation", content: renderPreparation()},
    ];

    return (
        <div className="flex flex-col items-center mt-10 bg-raisin-black min-h-screen text-white font-body">
            <h1 className="text-4xl mb-4 font-title text-center">{cocktailDetails.strDrink}</h1>
            <img className="w-1/2 h-1/2 mb-4" src={cocktailDetails.strDrinkThumb} alt={cocktailDetails.strDrink} />
            <div className="flex items-center mb-4">
                <div className="text-yellow-400">★★★★☆</div>
                <span className="ml-2">(120 votes)</span>
            </div>
            <div className="flex mb-8 font-title">
                <div className="mr-4 flex flex-col items-center">
                    <span>Coût moyen</span>
                    <div>
                    {renderDots(2, 3)}
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <span>Difficulté</span>
                    <div>
                    {renderDots(1, 3)}
                    </div>
                </div>
            </div>
            <div className="w-full max-w-md">
                {tabContent.map((tab, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-center px-4 py-2 border-t border-gray-200">
                            <h2 className="text-xl font-title">{tab.title}</h2>
                            <button onClick={() => handleClick(index + 1)}>
                                {openTab === index + 1 ? '▲' : '▼'}
                            </button>
                        </div>
                        {openTab === index + 1 && (
                            <div className="px-4 pb-2 mr-2 font-body ml-3">
                                {tab.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}