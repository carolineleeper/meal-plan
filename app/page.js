import Header from "./components/Header";
import MealPlan from "./components/MealPlan";
import ActionButtons from "./components/ActionButtons";
import supabase from "./utils/supabase";

export const revalidate = 0;

const formatDate = (date) =>
	date
		.toLocaleDateString("en-AU", { timeZone: "Australia/Melbourne" })
		.split("/")
		.reverse()
		.join("-");

export default async function Home() {
	// get supabase data
	const date = new Date();

	const now = formatDate(date);

	date.setDate(date.getDate() + 14);

	const later = formatDate(date);

	const { data: days } = await supabase
		.from("days")
		.select()
		.gte("date", now)
		.lt("date", later)
		.order("date");
	const { data: recipes } = await supabase.from("recipes").select("title, url");
	// const { data: recipes } = await supabase.from("recipes").select(); /// gets all columns from recipes table

	// create dates array
	const getDatesBetween = (startDate, endDate) => {
		let dates = [];
		let currentDate = new Date(startDate);
		while (currentDate < endDate) {
			dates.push(formatDate(new Date(currentDate)));
			currentDate.setDate(currentDate.getDate() + 1);
		}
		return dates;
	};

	const datesArray = getDatesBetween(new Date(now), new Date(later));

	// create meal plan array
	const mealPlan = datesArray.map((date) => {
		const day = days?.find((day) => day.date === date);
		const recipe = recipes?.find((recipe) => recipe.id === day?.recipe_id);

		return {
			date: date,
			id: day?.id,
			recipe: {
				recipe_id: day?.recipe_id,
				url: recipe?.url,
				title: recipe?.title,
			},
			has_been_added_to_shopping_list: day?.has_been_added_to_shopping_list,
		};
	});

	return (
		<div>
			<Header />
			<ActionButtons mealPlan={mealPlan} recipes={recipes} />
			<MealPlan mealPlan={mealPlan} recipes={recipes} />
		</div>
	);
}
