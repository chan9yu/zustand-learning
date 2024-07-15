import { useStore } from '../store';

export default function ResetStates() {
	const resetBear = useStore.use.resetBear();
	const resetBoth = useStore.use.resetBoth();
	const resetFish = useStore.use.resetFish();

	return (
		<div className="reset-states">
			<button onClick={resetBear}>Reset Bears</button>
			<button onClick={resetFish}>Reset Fish</button>
			<button onClick={resetBoth}>Reset All</button>
		</div>
	);
}
