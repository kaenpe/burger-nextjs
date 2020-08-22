import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import BurgerIngredients from './BurgerIngredients';
const StyledIngredient = styled.div`
  width: 100%;
  margin: auto;
  height: 90%;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  grid-area: burger;
  display: grid;
  grid-auto-rows: min-content;
  align-content: baseline;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  .BreadTop {
    height: 10vh;
    width: 80%;
    background: linear-gradient(#9d4410, #ad5214);
    border-radius: 50% 50% 0 0;
    box-shadow: inset -15px 0 #79370b;
    margin: 2% auto;
    position: relative;
  }
  .BreadBottom {
    height: 7vh;
    width: 80%;
    background: linear-gradient(#9d4410, #ad5214);
    border-radius: 0 0 30px 30px;
    box-shadow: inset -15px 0 #79370b;
    margin: 2% auto;
  }
  .Meat {
    width: 80%;
    height: 3vh;
    background: linear-gradient(#7f3608, #702e05);
    margin: 2% auto;
    border-radius: 15px;
  }

  .Cheese {
    width: 90%;
    height: 1vh;
    margin: 1% auto;
    background: linear-gradient(#f4d004, #d6bb22);
    border-radius: 20px;
  }

  .Salad {
    width: 85%;
    height: 2vh;
    margin: 1% auto;
    background: linear-gradient(#228c1d, #91ce50);
    border-radius: 20px;
  }

  .Bacon {
    width: 80%;
    height: 1vh;
    background: linear-gradient(#bf3813, #c45e38);
    margin: 1% auto;
  }
  @media (min-width: 800px) {
    width: 500px;
  }

  @media (max-width: 750px) {
    width: 300px;
  }
`;

const Burger = ({ ing }) => {
  return (
    <StyledIngredient className='burger'>
      <div className='BreadTop'></div>
      <AnimatePresence>
        {ing.map(({ type, id }) => (
          <motion.div
            transition={{ duration: 0.5 }}
            key={id}
            initial={{ x: '-110vw', height: 0 }}
            animate={{ x: 0, height: 'auto' }}
            exit={{ x: '-110vw', height: 0 }}
          >
            <BurgerIngredients type={type}></BurgerIngredients>
          </motion.div>
        ))}
      </AnimatePresence>
      <div className='BreadBottom'></div>
    </StyledIngredient>
  );
};

export default Burger;
