import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@material-ui/core/Grid";
import TextField from '@mui/material/TextField';
// import ReactStars from 'react-stars';
import Checkbox from '@mui/material/Checkbox';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
// import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
// import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
// import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
// import PendingIcon from '@mui/icons-material/Pending';
import '../styles/ProblemCard.css'
  
  function ProblemCard({key, difficulty, location, technique, grip_color, end_date, problem_description}) {
    // const ratingChanged = (newRating) => {
    //     console.log(newRating)
    //   }
    //   const label = { inputProps: { 'aria-label': 'Favorite/InProgress/Completed' } };

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
        '& > :not(style)': { m: 1, width: '35ch' },
        justifyContent: 'center',
        alignItems: "center"
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Please add comments about the route" variant="filled" />
      <Button size="small" variant="contained" color="primary" type="submit">
        Submit
    </Button>
    </Box>
    <Typography variant="body2">
    Please rate the route (⭐️Unsatisfactory | ⭐️⭐️⭐️⭐️⭐️ - Great)
        </Typography>
    <Grid container justifyContent="center">
      {/* <ReactStars 
        count={5}
        onChange={ratingChanged}
        size={24}
        color2={'#ffd700'} /> */}
        </Grid>
      {/* <Grid container justifyContent="center">
      <Typography variant="body2">
          Favorite:
        <Checkbox {...label}  icon={<FavoriteBorder />} checkedIcon={<Favorite />} label="Favorite" sx={{transform: 'scale(1.5'}}/>
        In progress:
        <Checkbox {...label}  icon={<PendingOutlinedIcon />} checkedIcon={<PendingIcon />} label="In Progress"/>
        Completed:
        <Checkbox {...label}  icon={<AssignmentTurnedInOutlinedIcon />} checkedIcon={<AssignmentTurnedInIcon />} label="Completed"/>
        </Typography>
      </Grid> */}
    </React.Fragment>
        </Card>
      </Box>
    );
  }


export default ProblemCard