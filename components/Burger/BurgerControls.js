import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const IngredientControlsWrapper = styled.div`
  padding: 5px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.label`
  margin: 5px;
  font-weight: bold;
  width: 4rem;
  text-align: center;
`;

const BurgerControls = ({
  addIng,
  removeIng,
  ing: { type, quantity, price },
}) => {
  return (
    <IngredientControlsWrapper>
      <Label>
        {type}
        <br />x{quantity}
      </Label>
      <Button
        variant='contained'
        color='primary'
        style={{ width: '5rem', margin: '10px' }}
        onClick={() => addIng(type)}
        className='add-button'
      >
        +
      </Button>
      <Button
        color='secondary'
        variant='contained'
        disabled={quantity === 0}
        onClick={() => removeIng(type)}
        className='remove-button'
        style={{ width: '5rem', margin: '10px' }}
      >
        -
      </Button>
      <Label>{price}$</Label>
    </IngredientControlsWrapper>
  );
};

export default BurgerControls;
