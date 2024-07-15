import { useStore } from '../store';

export default function AddAnimals() {
	const addBear = useStore.use.addBear();
	const addFish = useStore.use.addFish();
	const addBoth = useStore.use.addBoth();

	return (
		<div className="add-animals">
			<button onClick={addBear}>Add Bear</button>
			<button onClick={addFish}>Add Fish</button>
			<button onClick={addBoth}>Add All</button>
		</div>
	);
}
