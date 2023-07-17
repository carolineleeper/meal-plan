import FillRecipesButton from "./FillRecipesButton";
import AddToShoppingListButton from "./AddToShoppingListButton";

const ActionButtons = ({ mealPlan, recipes }) => {
	return (
		<div>
			<FillRecipesButton mealPlan={mealPlan} recipes={recipes} />
			<AddToShoppingListButton />
		</div>
	);
};

export default ActionButtons;
