import Week from "./components/Week";
import FillRecipesButton from "./components/FillRecipesButton";
import AddToShoppingListButton from "./components/AddToShoppingListButton";

//work out today's date - request 28 days from today with correspoinding recipes from server

export default async function Home() {
	return (
		<>
			<h1 className="text-5xl text-emerald-600">Meal Plan</h1>
			<FillRecipesButton />
			<AddToShoppingListButton />
			<Week />
			<Week />
			<Week />
			<Week />
		</>
	);
}
