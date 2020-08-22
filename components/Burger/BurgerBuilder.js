import { Button, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
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

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState([
    { type: 'Meat', price: 1.3, quantity: 1 },
    { type: 'Cheese', price: 0.4, quantity: 0 },
    { type: 'Salad', price: 0.5, quantity: 0 },
    { type: 'Bacon', price: 0.7, quantity: 0 },
  ]);

  const [ingredientsOrder, setIngredientsOrder] = useState([
    { type: 'Meat', id: 0 },
  ]);

  const [totalPrice, setTotalPrice] = useState(1.3);

  const addIngredientHandler = (ing) => {
    setIngredients((prevState) =>
      prevState.map((ingredient) =>
        ing === ingredient.type
          ? { ...ingredient, quantity: (ingredient.quantity += 1) }
          : ingredient
      )
    );
    setIngredientsOrder((prevState) => [
      { type: ing, id: prevState.length + 1 },
      ...prevState,
    ]);
    setTotalPrice(
      ingredients
        .reduce((sum, ingredient) => {
          return (sum += ingredient.price * ingredient.quantity);
        }, 0)
        .toFixed(2)
    );
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
    setTotalPrice(
      ingredients
        .reduce((sum, ingredient) => {
          return (sum += ingredient.price * ingredient.quantity);
        }, 0)
        .toFixed(2)
    );
  };

  const { showModal, setShowModal } = useContext(ModalContext);

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
        <StyledModalButtons className='modal-buttons'>
          <Button
            style={{ minWidth: '120px', margin: '10px' }}
            variant='contained'
            onClick={() => setShowModal(false)}
            color='secondary'
          >
            Cancel
          </Button>
          <Button
            style={{ minWidth: '120px', margin: '10px' }}
            variant='contained'
            color='primary'
          >
            Confirm
          </Button>
        </StyledModalButtons>
      </Modal>

      <Burger key={uuid()} ing={ingredientsOrder}></Burger>
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
        <StyledLabel style={{ width: 'max-content', marginBottom: '10px' }}>
          <Typography style={{ fontWeight: 'bold' }}>
            Total price: {totalPrice}$
          </Typography>
        </StyledLabel>
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
