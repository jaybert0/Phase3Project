import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Switch>
          <Route path="climber">
            <h1> climber home </h1>
          </Route>
          <Route path="maker">
            <h1> maker home </h1>
          </Route>
          <Route exact path="">
            <h1> login page </h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
