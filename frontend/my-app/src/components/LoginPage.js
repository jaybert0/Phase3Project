import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from 'react';
import Grid from "@material-ui/core/Grid";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function LoginPage(){
    return(
        <div>
        <Grid container justifyContent="center">
            <h1>Welcome! Are you a:</h1>
        </Grid>
        <Grid container justifyContent="center">
            <Stack spacing={2} direction="row">
                <Button variant="contained" component={Link} to="/boltmonkey">Route Setter</Button>
                <Button variant="contained" component={Link} to="/climberlogin">Climber</Button>
           </Stack>
        </Grid>
            
            
        </div>
        
    );
        
}

export default LoginPage
