import FillRecipesButton from "./FillRecipesButton";
import AddToShoppingListButton from "./AddToShoppingListButton";

const ActionButtons = ({ mealPlan, recipes }) => {
	return (
		<div className="flex flex-row flex-grow-0 justify-evenly p-4">
			<FillRecipesButton mealPlan={mealPlan} recipes={recipes} />
			<AddToShoppingListButton />
		</div>
	);
};

export default ActionButtons;
