//Dependency imports
import './App.css';
import {Router, Link} from '@reach/router';

//View imports
import Home from './views/Home';
import About from './views/About';

//Reference 1: https://www.sophiebritt.com/

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h1>Brian Jones</h1>
          <h3>Full-Stack Developer</h3>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="#">Projects</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Router>
        <Home default/>
        <About path="/about"/>
      </Router>
      <footer>
        <h4>Contact</h4>
        <div>
          <a href="https://www.linkedin.com/in/brian-jones-dev/">LinkedIn</a>
          <a href="https://github.com/BrianJones98">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default App;