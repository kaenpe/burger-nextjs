import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React from 'react';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    gridColumn: 'span header-start/header-end',
    height: 'max-content',
  },
  flexContainer: {
    justifyContent: 'flex-end',
  },
  colorPrimary: {
    backgroundColor: '#20272F',
  },
  textColorInherit: {
    '&:hover': {
      '&::after': {
        position: 'absolute',
        content: '""',
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        opacity: '0.2',
      },
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position='sticky'
        classes={{ colorPrimary: classes.colorPrimary, root: classes.root }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
          classes={{ flexContainer: classes.flexContainer }}
        >
          <Tab
            label='Builder'
            {...a11yProps(0)}
            classes={{ textColorInherit: classes.textColorInherit }}
          />
          <Tab
            label='Orders'
            {...a11yProps(1)}
            classes={{ textColorInherit: classes.textColorInherit }}
          />
        </Tabs>
      </AppBar>
    </div>
  );
};
export default Navbar;
