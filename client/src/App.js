//Dependency Imports
import { Router } from '@reach/router';

//Style Imports
import './App.css';

//View Imports
import Main from './Views/Main';
import SpeedySquare from './Views/ProjectPages/SpeedySquare';
import Schedualize from './Views/ProjectPages/Schedualize';
import RequestParser from './Views/ProjectPages/RequestParser';

function App() {
	return (
		<Router>
			<Main path="/" />
			<SpeedySquare path="/project/speedy-square" />
			<Schedualize path="/project/schedualize" />
			<RequestParser path="/project/request-parser" />
		</Router>
	);
}

export default App;