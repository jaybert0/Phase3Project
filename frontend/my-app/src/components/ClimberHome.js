import { useState } from 'react';
import ProblemCard from './ProblemCard'
import WallMap from './WallMap'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { render } from 'react-dom';

// have to fetch for all problems and then filter. do not set up separate fetches on backend for difficulty. buttons filter to sort rather than fetch.

function ClimberHome({setSearch, problem, getProblems, climbproblem, getClimbproblems}){
    // console.log(problem[0].difficulty)
    // console.log(problem[0])
    // console.log(climbproblem)

    

    const delay = ms => new Promise(res => setTimeout(res, ms))
    const [technique, setTechnique] = useState('');

    const handleChange = async (e) => {
        setTechnique(e.target.value);
        getProblems();
        await delay(500);
        setSearch(e.target.value)
        // console.log(e.target.value)
    };
    return(
        
        <div>
            <WallMap id="wallmap" />
            <br></br>
            {/* <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel sx={{zIndex: -1}} id="demo-simple-select-label">Climbing Technique</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={technique}
                        label="Climbing Technique"
                        onChange={handleChange}
                                    >
                    <MenuItem value={"problem"}>All</MenuItem>
                    <MenuItem value={"Jugs"}>Jugs</MenuItem>
                    <MenuItem value={"Crimps"}>Crimps</MenuItem>
                    <MenuItem value={"Pincher"}>Pincher</MenuItem>
                    <MenuItem value={"Slopers"}>Sloper</MenuItem>
                    <MenuItem value={"Undercling"}>Undercling</MenuItem>
                    <MenuItem value={"Sidepull"}>Sidepull</MenuItem>
                    <MenuItem value={"Palming"}>Palming</MenuItem>
                    </Select>
                </FormControl>
            </Box> */}
                {/* <button onClick={() => setSearch("favorites")}>search favorite</button>
                <button onClick={() => setSearch("in progress")}>search in progress</button>
                <button onClick={() => setSearch("completed")}>search completed</button> */}
                {/* <Button variant='contained' onClick={() => {
                    setSearch("easy");
                    setTechnique("")
                }}>Sort Ascending Difficulty</Button>
                 <Button variant='contained' onClick={() => {
                    setSearch("hard");
                    setTechnique("")
                }}>Sort Ascending Difficulty</Button> */}
            {problem.map(problem => (
                <ProblemCard climbproblem={climbproblem} alignItems="center" justifyContent="center" id="problemcard"
                id={problem.id} 
                difficulty={problem.difficulty}
                location={problem.location}
                technique={problem.technique}
                grip_color={problem.grip_color}
                end_date={problem.end_date}
                problem_description={problem.problem_description}
                />
            ))}
        </div>
        
    );
}

export default ClimberHome