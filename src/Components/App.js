import '../style/App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> {/* Always render Header */}

        <Switch>
          <Route exact path="/search">
            <SearchPage />
          </Route>

          <Route exact path="/"> {/* Always have home be last so that if can't find any, will default to hone*/}
            <Home />
          </Route>

        </Switch>

        <Footer /> {/* Always render Footer */}
      </Router>
    </div>
  );
}

export default App;
