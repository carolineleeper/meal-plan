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
		<div className="flex flex-col p-2 mt-2 mx-2 border border-slate-200 shadow-md">
			<div className="flex flex-row">
				<h2 className="text-teal-500 font-bold p-1">{day.date}</h2>
				<p className="text-slate-600 font-bold p-1">
					{!day.id
						? "no recipe allocated"
						: !day.recipe.recipe_id
						? "not cooking today"
						: day.recipe.title}
				</p>
			</div>
			<div>
				<button onClick={shuffleRecipeForDay} className="text-orange-600">
					Shuffle Recipe
				</button>
				<button onClick={notCookingForDay} className="text-purple-600">
					Not cooking today
				</button>
				<input type="checkbox" id={day.date} name="shoppingList" value="onShoppingList" />
				<label htmlFor={day.date}>Add to shop list</label>
			</div>
		</div>
	);
};

export default Day;
