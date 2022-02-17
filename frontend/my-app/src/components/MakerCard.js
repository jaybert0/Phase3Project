import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ProblemForm from './ProblemForm'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

  
function MakerCard({difficulty, location, technique, grip_color, end_date, problem_description, id, problem}) {
  
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
        <Typography variant="body1" color="text.primary">
          Location: {location}{id}
            </Typography> 
          <Typography variant="body2" color="text.secondary">
            Difficulty: V{difficulty}<br />
            Grip Color: {grip_color}<br />
            Grip Hold Highlight: {technique}<br />
            End Date: {end_date}<br />
            {/* Favorites: console.log({climbproblems.favorite})<br />
            In-Progress: console.log({climbproblems.in_progress})<br />
            Completed: console.log({climbproblems.completed})<br /> */}
            Favorites: <br />
            In-Progress: <br />
            Completed: <br />
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit">
          <EditIcon />
          </IconButton>
      </CardActions>
    </Card>
  );
}

  export default MakerCard