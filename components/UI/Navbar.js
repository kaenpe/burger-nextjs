import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
  },
  flexContainer: {
    justifyContent: 'flex-end',
  },
  colorPrimary: {
    backgroundColor: theme.palette.primary.main,
    gridColumn: 'span header-start/header-end',
    height: 'max-content',
    zIndex: '98',
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
  const matches = useMediaQuery('(max-width:600px)');
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='fixed' classes={{ colorPrimary: classes.colorPrimary }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
          classes={{ flexContainer: classes.flexContainer }}
          variant={matches && 'fullWidth'}
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
