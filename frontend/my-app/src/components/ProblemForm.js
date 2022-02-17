import * as React from 'react';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker'


function ProblemForm({problem, climbproblem}) {


    const initholds = problem.map((prob) => prob.technique);
    const holds = [...new Set(initholds)];
    // console.log(holds)
    const [formProblem, setFormProblem] = useState({
        difficulty: "",
        grip_color: "",
        technique: "",
        location: "",
        end_date: "",
        problem_description: "",
        maker_id: 1,
    })
    console.log(formProblem)
    

    function handleSetProblem(att, input) {
        setFormProblem({...formProblem, [att]: input});
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
          // onChange={(input) => handleSetProblem('difficulty',input)}
          value={formProblem.difficulty}
          onChange={(e) => handleSetProblem('difficulty', e.target.value)}
          id="filled-required"
          label="Difficulty"
          variant="filled"
        />
        <TextField
          required
          onChange={(e) => handleSetProblem('grip_color', e.target.value)}
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
          onChange={(e) => handleSetProblem('technique',e.target.value)}
          // value={formProblem.technique}
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
          onChange={(e) => handleSetProblem('location',e.target.value)}
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
          onChange={(e) => handleSetProblem('problem_description',e.target.value)}
          value={formProblem.problem_description}
        />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="End Date"
          value={formProblem.end_date}
          format="dd-MM-yyyy"
          onChange={(e) => {
            handleSetProblem('end_date',e)}}
          renderInput={(params) => <TextField {...params} helperText={"*Required mm/dd/yyyy"}/>}
        />
      </LocalizationProvider>

      </div>
      <div>
      <Button variant='contained' id='submit' onClick={() => {
                
            }}>Submit!</Button>
      </div>
      </Box>
      
    )
    }
export default ProblemForm