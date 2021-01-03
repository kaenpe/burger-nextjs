import styled from 'styled-components';
import React from 'react';

interface OrderElementProps {
  value: string | number;
  text: string;
}
const StyledListElement = styled.li``;
const OrderElement: React.FC<OrderElementProps> = ({ value, text }) => {
  return (
    <StyledListElement>
      {text}: {text === 'Price' ? <b>{value}$</b> : value}
    </StyledListElement>
  );
};
export default OrderElement;
