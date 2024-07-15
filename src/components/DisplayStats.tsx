import { useStore } from '../store';

export default function DisplayStats() {
	const bears = useStore.use.bears();
	const fishes = useStore.use.fishes();
	const getBoth = useStore.use.getBoth();

	return (
		<div className="stats">
			<h2>Bears: {bears}</h2>
			<h2>Fishes: {fishes}</h2>
			<h2>Total: {getBoth()}</h2>
		</div>
	);
}
