import { useState } from 'react';
import ProblemCard from './ProblemCard'
import WallMap from './WallMap'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function ClimberHome({setSearch, problem, getProblems, climbproblem}){
    // console.log(problem[0].difficulty)
    // console.log(climbproblem[0])

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
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Climbing Technique</InputLabel>
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
                    <MenuItem value={"Pinchers"}>Pincher</MenuItem>
                    <MenuItem value={"Slopers"}>Sloper</MenuItem>
                    <MenuItem value={"Undercling"}>Undercling</MenuItem>
                    <MenuItem value={"Sidepull"}>Sidepull</MenuItem>
                    <MenuItem value={"Palming"}>Palming</MenuItem>
                    </Select>
                </FormControl>
            </Box>
                {/* <button onClick={() => setSearch("favorites")}>search favorite</button>
                <button onClick={() => setSearch("in progress")}>search in progress</button>
                <button onClick={() => setSearch("completed")}>search completed</button> */}
                <button onClick={() => {
                    setSearch("easy");
                    setTechnique("")
                }}>search easy</button>
                 <button onClick={() => {
                    setSearch("hard");
                    setTechnique("")
                }}>search hard</button>
            {problem.map(problem => (
                <ProblemCard alignItems="center" justifyContent="center" id="problemcard"
                key={problem.id} 
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