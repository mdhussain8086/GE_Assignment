import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Add from './containers/Add/index';
import Visualize from './containers/Visualize/index';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/add" exact component={Add} />
        <Route exact path="/">
          <Redirect to="/add" />
        </Route>
        <Route path="/visualize" component={Visualize} />
      </Switch>
    </Router>
  );
}

export default App;
