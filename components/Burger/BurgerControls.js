import { Button, Typography } from '@material-ui/core';
import { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../contexts/AuthContext';

const StyledControls = styled.div`
  padding: 5px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 3;
`;
export const StyledLabel = styled.label`
  margin: 5px;
  font-weight: bold;
  width: 4rem;
  text-align: center;
`;

const BurgerControls = ({
  addIng,
  removeIng,
  ing: { type, quantity, price },
  showModal,
}) => {
  const { auth } = useContext(AuthContext);
  return (
    <StyledControls>
      <StyledLabel>
        <Typography style={{ fontWeight: 'bold' }}>
          {type}
          <br />x{quantity}
        </Typography>
      </StyledLabel>
      <Button
        color='secondary'
        variant='contained'
        disabled={quantity === 0 || showModal || !auth}
        onClick={() => removeIng(type)}
        className='remove-button'
        style={{ width: '5rem', margin: '10px' }}
      >
        <Typography style={{ fontWeight: 'bold' }}> -</Typography>
      </Button>
      <Button
        variant='contained'
        color='primary'
        style={{ width: '5rem', margin: '10px' }}
        onClick={() => addIng(type)}
        className='add-button'
        disabled={showModal || !auth}
      >
        <Typography style={{ fontWeight: 'bold' }}> +</Typography>
      </Button>

      <StyledLabel>
        <Typography style={{ fontWeight: 'bold' }}>{price}$</Typography>
      </StyledLabel>
    </StyledControls>
  );
};

export default BurgerControls;
