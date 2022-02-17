import * as React from 'react';
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function ProblemForm({problem, climbproblem}) {


    const holds = problem.map((prob) => prob.technique);
    console.log(holds)
    const [formProblem, setFormProblem] = useState({
        difficulty: "",
        grip_color: "",
        technique: "",
        location: "",
        end_date: "",
        problem_description: "",
        maker_id: 1,
    })
    

    function handleSetProblem(attribute, input) {
        setFormProblem({...formProblem, [attribute]: input});
      };
      
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
        <TextField
          required
          onChange={(input) => handleSetProblem('difficulty',input)}
          value={formProblem.difficulty}
          id="filled-required"
          label="Difficulty"
          variant="filled"
        />
        <TextField
          required
          onChange={(input) => handleSetProblem('grip_color',input)}
          value={formProblem.grip_color}
          id="filled-required"
          label="Grip Color"
          variant="filled"
        />
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="grip-hold-highlight">Grip Hold Highlight</InputLabel>
        <Select
          labelId="grip-hold-highlight-required-label"
          id="grip-hold-highlight-required"
          label="Grip Hold Highlight"
          onChange={(input) => handleSetProblem('technique',input)}
          value={formProblem.technique}
        >
          {holds.map((hold) => (
          <MenuItem 
            key={hold}
            value={hold}
          >
            {hold}
          </MenuItem>
          ))}
        
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>

      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="location">Location</InputLabel>
        <Select
          labelId="location-required-label"
          id="location-required"
          label="Location *"
          onChange={(input) => handleSetProblem('location',input)}
          value={formProblem.location}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>

        <TextField
          required
          id="filled-required"
          label="Route Description"
          variant="filled"
          onChange={(input) => handleSetProblem('problem_description',input)}
          value={formProblem.problem_description}
        />

    

      </div>
      </Box>
    )
    }
export default ProblemForm