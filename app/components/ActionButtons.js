import FillRecipesButton from "./FillRecipesButton";
import AddToShoppingListButton from "./AddToShoppingListButton";

const ActionButtons = ({ mealPlan, recipes }) => {
	return (
		<>
			<FillRecipesButton mealPlan={mealPlan} recipes={recipes} />
			<AddToShoppingListButton />
		</>
	);
};

export default ActionButtons;
