import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Images from './images';
import Videos from './videos';

function TabPanel1(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}    
    >
      <Images/>
    </div>
  );
}
function TabPanel2(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      >
        <Videos/>
      </div>
    );
  }

TabPanel1.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

TabPanel2.propTypes = {
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Images" {...a11yProps(0)} />
          <Tab label="Videos" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel1 value={value} index={0}>
 
      </TabPanel1>
      <TabPanel2 value={value} index={1}>
 
      </TabPanel2>
    </Box>
  );
}