"use client";

const writeStuff = () => {
	console.log("Shopping list created!");
};

const AddToShoppingListButton = () => {
	return (
		<button className="bg-ctd-green text-white font-bold uppercase p-2" onClick={writeStuff}>
			Generate shopping list
		</button>
	);
};

export default AddToShoppingListButton;
