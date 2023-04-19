"use client";

const writeStuff = () => {
	console.log("Shopping list created!");
};

const AddToShoppingListButton = () => {
	return <button onClick={writeStuff}>Generate shopping list</button>;
};

export default AddToShoppingListButton;
