"use client";

import Header from "./components/Header";
import WeekCarousel from "./components/WeekCarousel";
import ActionButtons from "./components/ActionButtons";
import supabase from "./utils/supabase";

export default async function Home() {
	const date = new Date();

	const now = date
		.toLocaleDateString("en-AU", { timeZone: "Australia/Melbourne" })
		.split("/")
		.reverse()
		.join("-");

	date.setDate(date.getDate() + 28);

	const later = date
		.toLocaleDateString("en-AU", { timeZone: "Australia/Melbourne" })
		.split("/")
		.reverse()
		.join("-");

	const { data: days } = await supabase.from("days").select().gte("date", now).lt("date", later);
	const { data: recipes } = await supabase.functions.invoke("get-all-recipes");

	return (
		<>
			<Header />
			<ActionButtons />
			<WeekCarousel />
		</>
	);
}
