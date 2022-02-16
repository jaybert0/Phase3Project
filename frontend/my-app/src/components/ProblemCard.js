import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

  
//   function card({key, difficulty, location, technique, grip_color, end_date, problem_description})  {
//     <React.Fragment>
//       <CardContent>
//         <Typography variant="h5" component="div">
//         Problem Description: {problem_description}
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         Difficulty: {difficulty}
//         </Typography>
//         <Typography variant="body2">
//         Location {location}<br />
//         Grip Color: {grip_color}<br />
//         Grip Hold Highlight: {technique}<br />
//         End Date: {end_date}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Favorite</Button>
//         <Button size="small">In Progress</Button>
//         <Button size="small">Completed</Button>
//       </CardActions>
//     </React.Fragment>
//   };
  
  function ProblemCard({key, difficulty, location, technique, grip_color, end_date, problem_description}) {
    return (
      <Box sx={{ 
          minWidth: 275,
          backgroundColor: '#2A9CBF',
        '&:hover': {
          backgroundColor: '#2A9CBF',
          opacity: [0.9, 0.8, 0.7],  }
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
      <CardActions>
        <Button size="small">Favorite</Button>
        <Button size="small">In Progress</Button>
        <Button size="small">Completed</Button>
      </CardActions>
    </React.Fragment>
        </Card>
      </Box>
    );
  }
// function ProblemCard({key, difficulty, location, technique, grip_color, end_date, problem_description}){
//     return(
//         <div key = {key}>
//             <h1>Difficulty: {difficulty}</h1>
//             <h1>Location {location}</h1>
//             <h1>Technique: {technique}</h1>
//             <h1>Grip Color: {grip_color}</h1>
//             <h1>End Date: {end_date}</h1>
//             <h1>Problem Description: {problem_description}</h1>
//             <button>Fav Button</button> <button>In Progress</button> <button>Completed</button>
//             <br></br>
//             <input type="text"></input> <button>Submit</button>
//         </div>
//     );
// }

export default ProblemCard