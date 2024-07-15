import AddAnimals from './components/AddAnimals';
import DisplayStats from './components/DisplayStats';
import EatFish from './components/EatFish';
import ResetStates from './components/ResetStates';
import './styles/index.css';

export default function App() {
	return (
		<div className="container">
			<h1>📚 Zustand Learning</h1>
			<DisplayStats />
			<AddAnimals />
			<EatFish />
			<ResetStates />
		</div>
	);
}
