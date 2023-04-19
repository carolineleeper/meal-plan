"use client";

const Day = () => {
	const shuffleRecipe = () => {
		console.log("recipe shuffled");
	};
	const notCooking = () => {
		console.log("not cooking");
	};

	return (
		<>
			<h2>Today</h2>
			<h3>19/4/23</h3>
			<p>Roast Chicken</p>
			<button onClick={shuffleRecipe}>Shuffle Recipe</button>
			<button onClick={notCooking}>Not cooking today</button>
			<input type="checkbox" id="shoppingList" name="shoppingList" value="onShoppingList" />
			<label htmlFor="shoppingList">Add to shopping list</label>
		</>
	);
};

export default Day;
