//Style Imports
import './App.css';

//View Imports
import Home from './Views/Home';

function App() {
	return (
		<div className="App">
			<header>
				<div id="img-placeholder"/>
				<nav>
					<ul>
						<li>Home</li>
						<li>Projects</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</nav>
			</header>
			<Home />
		</div>
	);
}

export default App;