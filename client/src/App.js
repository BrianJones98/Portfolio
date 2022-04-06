//Dependency Imports
import { Router, Link } from '@reach/router';

//Style Imports
import './App.css';

//View Imports
import Home from './Views/Home.jsx';
import Projects from './Views/Projects';
import Resume from './Views/Resume';

//Project View Imports
import SpeedySquare from './Views/ProjectPages/SpeedySquare';
import Schedualize from './Views/ProjectPages/Schedulize';
import RequestParser from './Views/ProjectPages/RequestParser';

function App() {
	return (
		<div className='App'>
			<header>
				<div id="img-placeholder"/>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                    </ul>
                </nav>
			</header>
			<Router className="App">
				<Home path="/" />
				<Projects path="/projects" />
				<Resume path="/resume" />

				<SpeedySquare path="/project/speedy-square" />
				<Schedualize path="/project/schedualize" />
				<RequestParser path="/project/request-parser" />
			</Router>
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