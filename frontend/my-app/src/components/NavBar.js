import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="NavBar" centered>
          <Tab label="Login" {...a11yProps(0)} component={Link} to="/"/>
        <Tab label="Climber" {...a11yProps(1)} component={Link} to="/climberlogin" />
        <Tab label="Route Setter" {...a11yProps(2)} component={Link} to="/boltmonkey"/>
        <Tab label="About" {...a11yProps(3)} component={Link} to="/about"/>
        </Tabs>
      </Box>
    </Box>
  );
  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Login" {...a11yProps(0)} component={Link} to="/"/>
        <Tab label="Climber" {...a11yProps(1)} component={Link} to="/climberlogin" />
        <Tab label="Route Setter" {...a11yProps(2)} component={Link} to="/boltmonkey"/>
        <Tab label="About" {...a11yProps(3)} component={Link} to="/about"/>
      </Tabs>
     
    </Box>
  );
}

export default NavBar;