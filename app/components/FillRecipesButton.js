"use client";

const writeStuff = () => {
	console.log("Recipes added!");
};

const FillRecipesButton = () => {
	return <button onClick={writeStuff}>Fill Recipes</button>;
};

export default FillRecipesButton;
