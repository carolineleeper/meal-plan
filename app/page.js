import Header from "./components/Header";
import WeekCarousel from "./components/WeekCarousel";
import ActionButtons from "./components/ActionButtons";

//work out today's date - request 28 days from today with correspoinding recipes from server

export default async function Home() {
	return (
		<>
			<Header />
			<ActionButtons />
			<WeekCarousel />
		</>
	);
}
