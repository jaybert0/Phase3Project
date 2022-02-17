import * as React from 'react';
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import DateAdapter from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';


function ProblemForm() {


    const holds = [
        'Crimps',
        'Jugs',
        'Palming',
        'Pincher',
        'Side-pull',
        'Slopers',
        'Undercling',];
    const [problem, setProblem] = useState({
        difficulty: "",
        grip_color: "",
        technique: "",
        location: "",
        end_date: "",
        problem_description: "",
        maker_id: 1,
    })
    

    function handleSetProblem(attribute, input) {
        setProblem({...problem, [attribute]: input});
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
          value={problem.difficulty}
          id="filled-required"
          label="Difficulty*"
          variant="filled"
        />
        <TextField
          required
          onChange={(input) => handleSetProblem('grip_color',input)}
          value={problem.grip_color}
          id="filled-required"
          label="Grip Color"
          variant="filled"
        />
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="grip-hold-highlight">Grip Hold Highlight</InputLabel>
        <Select
          labelId="grip-hold-highlight-required-label"
          id="grip-hold-highlight-required"
          label="Grip Hold Highlight *"
          onChange={(input) => handleSetProblem('technique',input)}
          value={problem.technique}
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
          value={problem.location}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>3</MenuItem>
          <MenuItem value={5}>3</MenuItem>
          <MenuItem value={6}>3</MenuItem>
          <MenuItem value={7}>3</MenuItem>
          <MenuItem value={8}>3</MenuItem>
          <MenuItem value={9}>3</MenuItem>
          <MenuItem value={10}>3</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>

        <TextField
          required
          id="filled-required"
          label="Route Description"
          variant="filled"
          onChange={(input) => handleSetProblem('problem_description',input)}
          value={problem.problem_description}
        />

    {/* <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          onChange={(input) => handleSetProblem('end_date',input)}
          value={problem.end_date}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider> */}

      </div>
      </Box>
    )
    }
export default ProblemForm