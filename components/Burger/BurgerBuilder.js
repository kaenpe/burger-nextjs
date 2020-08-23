import { Button, Typography } from '@material-ui/core';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import { IngredientsContext } from '../../contexts/IngredientsContext';
import { ModalContext } from '../../contexts/ModalContext';
import Modal from '../Modal/Modal';
import Burger from './Burger';
import BurgerControls, { StyledLabel } from './BurgerControls';
const ControlsWrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-area: controls;
  padding: 15px;
`;

const StyledModalButtons = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`;
const StyledPriceLabel = styled(StyledLabel)`
  width: max-content;
  margin-bottom: 10px;
`;

const BurgerBuilder = () => {
  const [totalPrice, setTotalPrice] = useState(1.3);
  const { showModal, setShowModal } = useContext(ModalContext);
  const {
    ingredients,
    setIngredients,
    ingredientsOrder,
    setIngredientsOrder,
  } = useContext(IngredientsContext);
  useEffect(() => {
    return () => {
      setShowModal(false);
    };
  }, []);

  useEffect(() => {
    setTotalPrice(
      ingredients
        .reduce((sum, ingredient) => {
          return (sum += ingredient.price * ingredient.quantity);
        }, 0)
        .toFixed(2)
    );
  }, [ingredients]);
  const addIngredientHandler = (ing) => {
    setIngredients((prevState) =>
      prevState.map((ingredient) =>
        ing === ingredient.type
          ? { ...ingredient, quantity: (ingredient.quantity += 1) }
          : ingredient
      )
    );
    setIngredientsOrder((prevState) => [
      { type: ing, id: uuid() },
      ...prevState,
    ]);
  };
  const removeIngredientHandler = (ing) => {
    setIngredients((prevState) =>
      prevState.map((ingredient) =>
        ing === ingredient.type && ingredient.quantity > 0
          ? { ...ingredient, quantity: (ingredient.quantity -= 1) }
          : ingredient
      )
    );

    setIngredientsOrder((prevState) => {
      const firstMatch = ingredientsOrder.findIndex(
        (ingredient) => ing === ingredient.type
      );
      return prevState.filter((ingredient, index) => index !== firstMatch);
    });
  };

  return (
    <>
      <Modal>
        <Typography variant='h4'>Your Order</Typography>
        <Typography>
          You have ordered a burger with the following ingredients:
        </Typography>
        <ul>
          {ingredients.map(({ type, quantity }, index) => (
            <li key={index}>
              <Typography>
                {type}: {quantity}
              </Typography>
            </li>
          ))}
        </ul>
        <Typography
          gutterBottom={true}
          align='center'
          style={{ fontWeight: 'bold' }}
        >
          Total price is: {totalPrice}$
        </Typography>
        <StyledModalButtons>
          <Button
            style={{ minWidth: '120px', margin: '10px' }}
            variant='contained'
            onClick={() => setShowModal(false)}
            color='secondary'
          >
            Cancel
          </Button>
          <Link href='/checkout/'>
            <Button
              style={{ minWidth: '120px', margin: '10px' }}
              variant='contained'
              color='primary'
            >
              Confirm
            </Button>
          </Link>
        </StyledModalButtons>
      </Modal>

      <Burger ing={ingredientsOrder}></Burger>
      <ControlsWrapper>
        {ingredients.map((ing) => (
          <BurgerControls
            showModal={showModal}
            key={uuid()}
            addIng={addIngredientHandler}
            removeIng={removeIngredientHandler}
            ing={ing}
          ></BurgerControls>
        ))}
        <StyledPriceLabel>
          <Typography style={{ fontWeight: 'bold' }}>
            Total price: {totalPrice}$
          </Typography>
        </StyledPriceLabel>
        <Button
          color='primary'
          variant='contained'
          disabled={totalPrice === '0.00'}
          onClick={() => setShowModal((prevState) => !prevState)}
        >
          ORDER NOW
        </Button>
      </ControlsWrapper>
    </>
  );
};

export default BurgerBuilder;
