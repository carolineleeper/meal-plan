"use client";

import recipes from "./recipes.json";
import Day from "./components/day";

const getRecipe = () => {
	const recipe = recipes[Math.floor(Math.random() * recipes.length)];
	console.log(recipe);
	return recipe;
};

//work out today's date - request 28 days from today with correspoinding recipes from server

export default async function Home() {
	return (
		<>
			<h1 className="text-5xl text-emerald-600">Meal Plan</h1>
			<button onClick={getRecipe}>Get Recipe</button>
			<Day />
		</>
	);
}
