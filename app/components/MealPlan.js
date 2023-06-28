import Day from "./Day";

const MealPlan = ({ mealPlan, recipes }) => {
	return (
		<div>
			{mealPlan.map((day) => (
				<div className="border border-cyan-800 m-2 p-1">
					<Day day={day} recipes={recipes} />
				</div>
			))}
		</div>
	);
};

export default MealPlan;
