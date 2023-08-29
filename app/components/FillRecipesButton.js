"use client";

import { useRouter } from "next/navigation";
import supabase from "../utils/supabase";

const FillRecipesButton = ({ mealPlan, recipes }) => {
	const router = useRouter();
	const generateRandomRecipe = () => recipes[Math.floor(Math.random() * recipes.length)];

	const shuffleRecipeForDay = async (day) => {
		const newRecipe = generateRandomRecipe();

		await supabase.from("days").upsert({
			id: day.id,
			date: day.date,
			recipe_id: newRecipe.id,
		});
	};

	const shuffleAllRecipes = () => {
		mealPlan.map((day) => {
			if (day.recipe.recipe_id) {
				shuffleRecipeForDay(day);
			}
		});

		router.refresh();
	};

	return (
		<button className="bg-ctd-blue text-white font-bold uppercase p-2" onClick={shuffleAllRecipes}>
			Fill Recipes
		</button>
	);
};

export default FillRecipesButton;
