import './../css/App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NavBar from './NavBar';
import HomePage from './HomePage';
import GamesPage from './GamesPage';
import MusicPage from './MusicPage';
import ProjectsPage from './ProjectsPage';
import logo from "../image/logo.png"
import ContactPage from './ContactPage';


function App() {
  return (
    <Router>
      <div className="App">
        <img className="logo" src={logo}/>
        <NavBar />

        <Switch>

          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/projects">
            <ProjectsPage />
          </Route>

          <Route exact path="/contact">
            <ContactPage />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
