"use client";

import { useRouter } from "next/navigation";
import supabase from "../utils/supabase";

//TODO jon teach or learn about react context for global state

const Day = ({ day, recipes }) => {
	const router = useRouter();
	const generateRandomRecipe = () => recipes[Math.floor(Math.random() * recipes.length)];

	const getDayName = (date) => {
		const options = { weekday: "short" };
		const dateName = new Intl.DateTimeFormat(undefined, options).format(Date.parse(date));
		return dateName;
	};
	const getFormattedDate = (date) => {
		const options = { month: "numeric", day: "numeric" };
		const formattedDate = new Intl.DateTimeFormat(undefined, options).format(Date.parse(date));
		return formattedDate;
	};

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
		<div className="flex-1 flex flex-row align-top justify-between p-1 mb-2 mx-2 border border-slate-200 shadow-md">
			<div className="flex flex-row flex-1 justify-start items-center">
				<h2 className="text-sky-700 font-bold p-1">{getDayName(day.date)}</h2>
				<p className="text-slate-500 font-thin p-1">{getFormattedDate(day.date)}</p>
				<p className="text-slate-600 font-bold p-1">
					{!day.id
						? "no recipe allocated"
						: !day.recipe.recipe_id
						? "not cooking today"
						: day.recipe.title}
				</p>
			</div>
			<div className="flex flex-row flex-0 justify-center items-center">
				<button
					onClick={shuffleRecipeForDay}
					className="flex-grow p-2 font-bold text-cyan-700 text-xl"
				>
					{"\u{21BB}"}
				</button>
				<button
					onClick={notCookingForDay}
					className="flex-grow p-2 font-bold text-rose-700 text-xl"
				>
					{"\u{0058}"}
				</button>
				{/* <input type="checkbox" id={day.date} name="shoppingList" value="onShoppingList" />
				<label className="p-1" htmlFor={day.date}>
					{"\u{1F6D2}"}
				</label> */}
			</div>
		</div>
	);
};

export default Day;
