import './../css/App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NavBar from './NavBar';
import HomePage from './HomePage';
import GamesPage from './GamesPage';
import MusicPage from './MusicPage';
import ProjectsPage from './ProjectsPage';
import logo from "../image/logo.png"
import ContactPage from './ContactPage';
import DocuMintDemoPage from './DocuMintDemoPage';
import SDUHelperDemoPage from './SDUHelperDemoPage';

function App() {
  const currentURL = (window.location.href + "");
  const currentEndpoint = currentURL.substring(currentURL.lastIndexOf("/"));
  return (
    <Router>
      <div className="App">

        {currentEndpoint != "/documintdemo" && currentEndpoint != "/sduhelperdemo" && 
        <span>
          <img className="logo" src={logo}/>
          <NavBar />
        </span>
        }

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

          <Route exact path="/documintdemo">
            <DocuMintDemoPage />
          </Route>

          <Route exact path="/sduhelperdemo">
            <SDUHelperDemoPage />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
