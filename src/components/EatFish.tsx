import { useStore } from '../store';

export default function EatFish() {
	const eatFish = useStore.use.eatFish();

	return (
		<div className="eat-fish">
			<button onClick={eatFish}>Eat Fish</button>
		</div>
	);
}
