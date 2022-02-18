import * as React from 'react';
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@material-ui/core/Grid";
import TextField from '@mui/material/TextField';
import ReactStars from 'react-stars';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import PendingIcon from '@mui/icons-material/Pending';
import '../styles/ProblemCard.css'
  
  function ProblemCard({id, difficulty, location, technique, grip_color, end_date, problem_description, climbproblem}) {
    const [routeRating, setRouteRatingState] = useState(2.5)
    const label = { inputProps: { 'aria-label': 'Favorite/InProgress/Completed' } };
    const CPF = `http://localhost:9292/climbproblems/${id}`

    function setRouteRating(e){
      setRouteRatingState(e)
    }

  //   const [submitter, setSubmitter] = useState({
  //         in_progress: true,
  //         favorite: false,
  //         completed: false,
  //         climber_feedback: "",
  //         route_rating: 2.5
  // })
  // useEffect(() => {
  //   postFeedback()
  //   console.log(submitter)
  // },[submitter])
  
  // function handleSetProblem(att, input) {
  //   setSubmitter({...submitter, [att]: input});
  // };


  //   function postFeedback(){
  //     const config = {
  //       headers: {"Content-Type": "application/json"},
  //       method: "PATCH",
  //       body: JSON.stringify(submitter)
  //     }
  //     // fetch(CPF, config)
  //     // .then(r => r.json())
  //     // .then((data) => console.log(data))
  //   };

    const [climberFeedback, setClimberFeedbackState] = useState("")
    function setClimberFeedback(e){
      setClimberFeedbackState(e.target.value)
    }
    const [fav, setFavState] = useState(false)
    function setFavorite(){
      setFavState(!fav)
      console.log(fav)
    }
    const [inProg, setInProgressState] = useState(true)
    function setInProgress(){
      setInProgressState(!inProg)
      console.log(inProg)
    }
    const [complete, setCompletedState] = useState(false)
    function setCompleted(){
      setCompletedState(!complete)
      console.log(complete)
    }
    
    const [canRun, setCanRun]= useState(false)
    climbproblem.map((climbproblem) => {
      if(climbproblem.problem_id === id){
        if(canRun === false){
          setFavState(climbproblem.favorite)
          // handleSetProblem("favorite", climbproblem.favorite)
          // handleSetProblem("climber_feedback", climbproblem.climber_feedback)
          // handleSetProblem("in_progress", climbproblem.in_progress)
          // handleSetProblem("completed", climbproblem.completed)
          // handleSetProblem("route_rating", climbproblem.route_rating)
          setClimberFeedbackState(climbproblem.climber_feedback)
          setInProgressState(climbproblem.in_progress)
          setCompletedState(climbproblem.completed)
          setRouteRatingState(climbproblem.route_rating)
          setCanRun(true)
        }else{
          console.log("already mounted")
        }
        // console.log(climbproblem.problem_id)
        // console.log(climbproblem.favorite)
        // console.log(climbproblem.in_progress)
        // console.log(climbproblem.completed)
        // console.log(climbproblem.route_rating)
      }else{
        console.log("not the droid you are looking for")
      }
    })
    
    

    return (
      <Box class="box" sx={{ 
          minWidth: 275,
          backgroundColor: '#2A9CBF',
        }}>
        <Card variant="outlined">
        <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
        {problem_description}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Difficulty: V{difficulty}
        </Typography>
        <Typography variant="body2">
        Location {location}<br />
        Grip Color: {grip_color}<br />
        Grip Hold Highlight: {technique}<br />
        End Date: {end_date}
        </Typography>
      </CardContent>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '75ch' },
        justifyContent: 'center',
        alignItems: "center"
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      value={climberFeedback}
      sx={{zIndex: 0}}
      onChange={(e) => {
        setClimberFeedback(e)
        // handleSetProblem("climber_feedback", e.target.value)
        // postFeedback()
      }}
      // value={feedback}  
      // onChange={(e) => submitFeedback(e.target.value)}
      id="filled-basic" 
      label="Please add comments about the route" 
      variant="filled" />
      {/* <Button onSubmit={submitFeedback} size="small" variant="contained" color="primary" type="submit">
        Submit
    </Button> */}
    </Box>
    <Typography variant="body2">
    Please rate the route (⭐️Unsatisfactory | ⭐️⭐️⭐️⭐️⭐️ - Great)
        </Typography>
    <Grid container justifyContent="center">
      <ReactStars 
        count={5}
        value={routeRating}
        onChange={(e) => setRouteRating(e)}
        size={24}
        color2={'#ffd700'} />
        </Grid>
    <Grid container justifyContent="center">
      <Typography variant="body2">
        Favorite:
        <Checkbox onClick={setFavorite} {...label} checked={fav} icon={<FavoriteBorder />} checkedIcon={<Favorite />} label="Favorite" sx={{transform: 'scale(1.5'}}/>
        In progress:
        <Checkbox onClick={setInProgress} {...label}  checked={inProg} icon={<PendingOutlinedIcon />} checkedIcon={<PendingIcon />} label="In Progress"/>
        Completed:
        <Checkbox onClick={setCompleted} {...label}  checked={complete} icon={<AssignmentTurnedInOutlinedIcon />} checkedIcon={<AssignmentTurnedInIcon />} label="Completed"/>
        </Typography>
      </Grid>
    </React.Fragment>
        </Card>
      </Box>
    );
  }


export default ProblemCard

















