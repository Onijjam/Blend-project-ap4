import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from "../components/Card/Card.jsx";

export function CategoryCollection(){
	const [cocktails, setCocktails] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const category = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchCocktailsByCategory() {
			setIsLoading(true);
			try {
				const response = await fetch(
					`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.nameCategory.replace('-', '/')}`,
				);
				const data = await response.json();
				if (data.drinks) {
					setCocktails(data.drinks.slice(0, 5));
				} else {
					setCocktails([]);
				}
			} catch (error) {
				setCocktails([]);
			}
			setIsLoading(false);
		}
		fetchCocktailsByCategory();
	}, [category]);

	return (
		<div className="flex flex-col items-center bg-raisin-black min-h-screen overflow-x-hidden">
			<div className="w-full mt-4 flex justify-between items-center">
				<button
					className="ml-4 text-white font-title text-xl"
					onClick={() => navigate(-1)}
				>
					&larr;
				</button>
				<h1 className="text-white font-title text-xl">{category.nameCategory.replace('-', '/')}</h1>
				<div className="mr-4"></div>
			</div>
			<div className="mt-8 gap-4 flex flex-col items-center">
				{isLoading ? (
					<div className="text-white font-title text-lg">Loading...</div>
				) : cocktails.length === 0 ? (
					<div className="text-white font-title text-lg">No results found</div>
				) : (
					cocktails.map((cocktail) => (
						<Card key={cocktail.idDrink} data={cocktail} />
					))
				)}
			</div>
		</div>
	);
};
