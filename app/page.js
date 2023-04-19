"use client";

import recipes from "./recipes.json";

const getRecipe = () => {
	const recipe = recipes[Math.floor(Math.random() * recipes.length)];
	console.log(recipe);
	return recipe;
};

export default async function Home() {
	return (
		<>
			<h1 className="text-5xl text-emerald-600">Meal Plan</h1>
			<button onClick={getRecipe}>Get Recipe</button>
		</>
	);
}
