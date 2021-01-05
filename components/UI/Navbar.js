import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useRouter } from 'next/router';
import { AuthContext } from '../../contexts/AuthContext';
import { IngredientsContext } from '../../contexts/IngredientsContext';
import { useEffect, useState, useContext } from 'react';
import { projectAuth } from '../../firebase/config';
import uuid from 'react-uuid';

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

const Navbar = () => {
  const matches = useMediaQuery('(max-width:600px)');
  const classes = useStyles();
  const { auth } = useContext(AuthContext);
  const {
    ingredients,
    setIngredients,
    ingredientsOrder,
    setIngredientsOrder,
  } = useContext(IngredientsContext);
  const router = useRouter();
  const [value, setValue] = useState(
    router.pathname === '/' ? 0 : router.pathname === '/orders' ? 1 : 2
  );
  useEffect(() => {
    setValue(
      router.pathname === '/' ? 0 : router.pathname === '/orders' ? 1 : 2
    );
  }, [router.pathname]);
  const handleChange = (e, newValue) => {
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
        <Tab
          onClick={() => router.replace('/')}
          label='Builder'
          {...a11yProps(0)}
          classes={{ textColorInherit: classes.textColorInherit }}
        />

        <Tab
          onClick={() => router.replace('/orders')}
          label='Orders'
          {...a11yProps(1)}
          classes={{ textColorInherit: classes.textColorInherit }}
        />

        <Tab
          onClick={() => {
            if (auth) {
              projectAuth.signOut();
              setIngredients([
                { type: 'Meat', price: 1.3, quantity: 1 },
                { type: 'Cheese', price: 0.4, quantity: 0 },
                { type: 'Salad', price: 0.5, quantity: 0 },
                { type: 'Bacon', price: 0.7, quantity: 0 },
              ]);
              setIngredientsOrder([{ type: 'Meat', id: uuid() }]);
              router.replace('/login');
            } else {
              router.replace('/login');
            }
          }}
          label={auth ? 'Logout' : 'Login'}
          {...a11yProps(2)}
          classes={{ textColorInherit: classes.textColorInherit }}
        />
      </Tabs>
    </AppBar>
  );
};
export default Navbar;
