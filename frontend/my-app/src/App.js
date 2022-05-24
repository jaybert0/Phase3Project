import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ClimberHome from './components/ClimberHome';
import MakerHome from './components/MakerHome';
import LoginPage from './components/LoginPage';
import NavBar from './components/NavBar'
import SplashCard from './components/SplashCard'
import About from './components/About'
function App() {
  const MAKER = "http://localhost:9292/problems-climb"
  const CLIMBPROBLEM ="http://localhost:9292/climbproblems"
  const PROBLEM ="http://localhost:9292/problems"
  const USER="http://localhost:9292/users"

  const EASYPROBLEM ="http://localhost:9292/problems-difficulty/easy"
  const HARDPROBLEM ="http://localhost:9292/problems-difficulty/hard"

  const techniqueTest = "http://localhost:9292/problems-technique/"

  const [climbproblem, setClimbproblem] = useState([])
  const [maker, setMaker] = useState([])
  const [problem, setProblem] = useState([])
  // problem sets for all cards
  const [user, setUser] = useState([])
  const [search, setSearch] = useState("problem")

  useEffect(getClimbproblems, [])
  useEffect(getMaker, [])
  useEffect(getProblems, [])
  useEffect(getUser, [])
  useEffect(() => {
    if (search === "problem"){
      getProblems()
    }else if(search === "easy"){
      getEasyProblems()
    }else if(search === "hard"){
      getHardProblems()
    }
    // else if(search === "favorites"){
    //   getFavorites()
    // }else if(search === "in progress"){
    //   getInProgress()
    // }else if(search === "completed"){
    //   getCompleted()
    // }
    else{
      getTechnique(search)
      // console.log(search)
    }
  },[search])
  function getTechnique(technique){
    fetch(`http://localhost:9292/problems-technique/${technique}`)
    .then((r) => r.json())
    // .then((data) => console.log(data))
    .then((data) => setProblem(data))
  }

  function getEasyProblems(){
    fetch(EASYPROBLEM)
    .then((r) => r.json())
    // r
    .then((data) => setProblem(data))
  }

  function getHardProblems(){
    fetch(HARDPROBLEM)
    .then((r) => r.json())
    // .then((data) => console.log(data))
    .then((data) => setProblem(data))
  }

  // function getInProgress(){
  //   // console.log("progress")
  //   // fetch(PROBLEM)
  //   // .then((r) => r.json())
  //   // .then((data) => console.log(data))
  //   // .then((data) => setProblem(data))
  // }

  // function getCompleted(){
  //   console.log("never completed")
  //   // fetch(COMPLETED)
  //   // .then((r) => r.json())
  //   // // .then((data) => console.log(data))
  //   // .then((data) => setProblem(data))
  // }
  // function getFavorites(){
  //   console.log("fixing you is my favorite")
  //   // fetch(FAVORITE)
  //   // .then((r) => r.json())
  //   // // .then((data) => console.log(data))
  //   // .then((data) => setProblem(data))
  // }

  function getProblems(){
    fetch(PROBLEM)
    .then((r) => r.json())
    // .then((data) => console.log(data))
    .then((data) => setProblem(data))
  }

  function getClimbproblems(){
    fetch(CLIMBPROBLEM)
    .then((r) => r.json())
    // .then((data) => console.log(data))
    .then((data) => setClimbproblem(data))
  }

  function getMaker(){
    fetch(MAKER)
    .then((r) => r.json())
    // .then((data) => console.log(data))
    .then((data) => setMaker(data))
  }

  function getUser(){
    fetch(USER)
    .then((r) => r.json())
    // .then((data) => console.log(data))
    // .then((data) => setUser(data))
  }

  return (
    <div className="App">
      <div className="App-container">
        <NavBar />
        <SplashCard />
        <Switch>
          <Route exact path="/climberlogin">
            <ClimberHome getProblems={getProblems} setSearch={setSearch} problem={problem} climbproblem={climbproblem}/>
          </Route>
          <Route exact path="/boltmonkey">
            <MakerHome problem={maker} climbproblem={climbproblem} getClimbproblems={getClimbproblems}/>
          </Route>
          <Route exact path="/about">
            <About />
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