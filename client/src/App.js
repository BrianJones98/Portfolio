//Style Imports
import './App.css';

//View Imports
import Main from './Views/Main';

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
					</ul>
				</nav>
			</header>
			<Main />
			<footer>
				<a href="mailto:BrianJones.JST@gmail.com">BrianJones.JST@gmail.com</a>
				<div>
					<div id="sm-icon-placeholder" />
					<div id="sm-icon-placeholder" />
				</div>
				<p>&copy; 2022 Brian Jones</p>
			</footer>
		</div>
	);
}

export default App;