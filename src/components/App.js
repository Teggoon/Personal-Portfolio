import './../css/App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NavBar from './NavBar';
import HomePage from './HomePage';
import GamesPage from './GamesPage';
import MusicPage from './MusicPage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import DocuMintDemoPage from './DocuMintDemoPage';
import SDUHelperDemoPage from './SDUHelperDemoPage';
import TemplateCrunchDemoPage from './TemplateCrunchDemoPage';

function App() {
  const currentURL = (window.location.href + "");
  const currentEndpoint = currentURL.substring(currentURL.lastIndexOf("/"));
  return (
    <Router>
      <div className="App">

        {currentEndpoint != "/documintdemo" && 
        currentEndpoint != "/sduhelperdemo" && 
        currentEndpoint != "/templatecrunchdemo" &&
        <span>
          
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

          <Route exact path="/templatecrunchdemo">
            <TemplateCrunchDemoPage />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
