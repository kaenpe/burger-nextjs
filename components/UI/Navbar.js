import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Link from 'next/link';
import { useEffect } from 'react';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    justifyContent: 'flex-end',
  },
  colorPrimary: {
    backgroundColor: theme.palette.primary.main,
    gridRow: '1',
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

const Navbar = ({ val }) => {
  const matches = useMediaQuery('(max-width:600px)');
  const classes = useStyles();
  const [value, setValue] = React.useState(val === 1 ? 0 : 1);
  useEffect(() => {
    setValue(val);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position='fixed' classes={{ colorPrimary: classes.colorPrimary }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='simple tabs example'
        classes={{ flexContainer: classes.flexContainer }}
        variant={matches ? 'fullWidth' : 'standard'}
      >
        <Link href='/' passHref>
          <Tab
            label='Builder'
            {...a11yProps(0)}
            classes={{ textColorInherit: classes.textColorInherit }}
          />
        </Link>
        <Link href='/orders/' passHref>
          <Tab
            label='Orders'
            {...a11yProps(1)}
            classes={{ textColorInherit: classes.textColorInherit }}
          />
        </Link>
      </Tabs>
    </AppBar>
  );
};
export default Navbar;
