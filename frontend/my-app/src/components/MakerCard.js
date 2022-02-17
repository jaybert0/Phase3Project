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


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
function MakerCard({key, difficulty, location, technique, grip_color, end_date, problem_description, problem_id}) {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue }} aria-label="Route">
              {problem_id}
            </Avatar>
          }
          title= "Route: ${problem_id}"
          subheader= "Location: ${location}"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Difficulty: V{difficulty}<br />
            Location: {location}<br />
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
          <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <EditIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Edit:</Typography>
          <ProblemForm></ProblemForm>
        </CardContent>
      </Collapse>
    </Card>
  );
}

  export default MakerCard