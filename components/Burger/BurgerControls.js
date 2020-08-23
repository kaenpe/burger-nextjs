import { Button, Typography } from '@material-ui/core';
import styled from 'styled-components';

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
        disabled={quantity === 0 || showModal}
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
        disabled={showModal}
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
