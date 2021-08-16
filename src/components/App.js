import './../css/App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NavBar from './NavBar';
import HomePage from './HomePage';
import GamesPage from './GamesPage';
import MusicPage from './MusicPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>

          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/games">
            <GamesPage />
          </Route>

          <Route exact path="/music">
            <MusicPage />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
