import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ClimberHome from './components/ClimberHome';
import MakerHome from './components/MakerHome';
import LoginPage from './components/LoginPage';

function App() {
  const MAKER = "http://localhost:9292"
  const CLIMBPROBLEM ="http://localhost:9292"
  const PROBLEM ="http://localhost:9292"
  const USER="http://localhost:9292"

  const [climbproblem, setClimbproblem] = useState([])
  const [maker, setMaker] = useState([])
  const [problem, setProblem] = useState([])
  const [user, setUser] = useState([])

  useEffect(getClimbproblems, [])
  useEffect(getMaker, [])
  useEffect(getProblems, [])
  useEffect(getUser, [])

  function getClimbproblems(){
    fetch(CLIMBPROBLEM)
    .then((r) => r.json())
    .then((data) => console.log(data))
    // .then((data) => setClimbproblem(data))
  }

  function getMaker(){
    fetch(MAKER)
    .then((r) => r.json())
    .then((data) => console.log(data))
    // .then((data) => setMaker(data))
  }

  function getProblems(){
    fetch(PROBLEM)
    .then((r) => r.json())
    .then((data) => console.log(data))
    // .then((data) => setProblem(data))
  }

  function getUser(){
    fetch(USER)
    .then((r) => r.json())
    .then((data) => console.log(data))
    // .then((data) => setUser(data))
  }

  return (
    <div className="App">
      <div className="App-container">
        <Switch>
          <Route exact path="/climberlogin">
            <ClimberHome/>
          </Route>
          <Route exact path="/boltmonkey">
            <MakerHome/>
          </Route>
          <Route exact path="">
            <LoginPage/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
