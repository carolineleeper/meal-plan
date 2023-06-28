"use client";

import { useRouter } from "next/navigation";
import supabase from "../utils/supabase";

//TODO jon teach or learn about react context for global state

const Day = ({ day, recipes }) => {
	const router = useRouter();
	const generateRandomRecipe = () => recipes[Math.floor(Math.random() * recipes.length)];

	const shuffleRecipeForDay = async () => {
		const newRecipe = generateRandomRecipe();

		await supabase.from("days").upsert({
			id: day.id,
			date: day.date,
			recipe_id: newRecipe.id,
		});

		router.refresh();
	};

	const notCookingForDay = async () => {
		await supabase.from("days").upsert({
			id: day.id,
			date: day.date,
			recipe_id: null,
		});

		router.refresh();
	};

	// state 1: no recipe allocated - id undefined - no record in supabase - create record
	// state 2: chosen not to make a meal - will need to upsert record - recipe id = null
	// state 3: has a recipe - is in supabase

	return (
		<>
			<h2>{day.date}</h2>
			<p>
				{!day.id
					? "no recipe allocated"
					: !day.recipe.recipe_id
					? "not cooking today"
					: day.recipe.title}
			</p>
			<button onClick={shuffleRecipeForDay} className="text-orange-600">
				Shuffle Recipe
			</button>
			<button onClick={notCookingForDay} className="text-purple-600">
				Not cooking today
			</button>
			<input type="checkbox" id={day.date} name="shoppingList" value="onShoppingList" />
			<label htmlFor={day.date}>Add to shop list</label>
		</>
	);
};

export default Day;
