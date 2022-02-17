import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function ProblemForm() {
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
          id="filled-required"
          label="Difficulty*"
          variant="filled"
        />
        <TextField
          required
          id="filled-required"
          label="Grip Color"
          variant="filled"
        />
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="grip-hold-highlight">Grip Hold Highlight</InputLabel>
        <Select
          labelId="grip-hold-highlight-required-label"
          id="grip-hold-highlight-required"
          value={technique}
          label="Grip Hold Highlight *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={Crimps}>Crimps</MenuItem>
          <MenuItem value={Jugs}>Jugs</MenuItem>
          <MenuItem value={Palming}>Palming</MenuItem>
          <MenuItem value={Pincher}>Pincher</MenuItem>
          <MenuItem value={Sidepull}>Sidepull</MenuItem>
          <MenuItem value={Slopers}>Slopers</MenuItem>
          <MenuItem value={Undercling}>Undercling</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>

      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="location">Location</InputLabel>
        <Select
          labelId="location-required-label"
          id="location-required"
          value={location}
          label="Location *"
          onChange={handleChange}
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
        />

<LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        
      </div>