import Day from "./Day";

const MealPlan = ({ mealPlan, recipes }) => {
	const week1 = mealPlan.slice(0, 7);
	const week2 = mealPlan.slice(7, 14);
	// const week3 = mealPlan.slice(14, 21);
	// const week4 = mealPlan.slice(21);

	return (
		<div className="flex-grow grid grid-col-2 grid-flow-col w-screen overflow-x-auto overflow-y-hidden snap-x">
			<div className="grid grid-rows-7 w-screen snap-center">
				{week1.map((day) => (
					<Day day={day} recipes={recipes} />
				))}
			</div>
			<div className="grid grid-rows-7 w-screen snap-center">
				{week2.map((day) => (
					<Day day={day} recipes={recipes} />
				))}
			</div>
			{/* <div className="w-screen snap-center">
				{week3.map((day) => (
					<div className="border border-cyan-800">
						<Day day={day} recipes={recipes} />
					</div>
				))}
			</div>
			<div className="w-screen snap-center">
				{week4.map((day) => (
					<div className="border border-cyan-800">
						<Day day={day} recipes={recipes} />
					</div>
				))}
			</div> */}
		</div>
	);
};

export default MealPlan;
