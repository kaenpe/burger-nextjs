import React from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import OrderElement from './OrderElement';

const StyledList = styled.ul`
  width: 100%;
  margin: auto;
  margin-top: 50px;
  padding: 5px;
  text-align: start;
  justify-content: center;
  font-size: 1.2rem;
  border: 1px solid #bdbdbd;
  list-style-type: none;
  box-shadow: 2px 2px 1px #ccc;
`;

interface OrdersProps {
  orders: Array<{
    createdAt: number;
    price: string;
    contact: any;
  }>;
}
const Orders: React.FC<OrdersProps> = ({ orders }) => {
  return (
    <>
      {orders.map(
        ({ createdAt, price, contact: { name, email, city, street } }) => {
          return (
            <StyledList key={uuid()}>
              <OrderElement value={name} text={'Name'} />
              <OrderElement value={email} text={'Email'} />
              <OrderElement value={city} text={'City'} />
              <OrderElement value={street} text={'Street'} />
              <OrderElement value={price} text={`Price`} />
              <OrderElement value={createdAt} text={'Ordered'} />
            </StyledList>
          );
        }
      )}
    </>
  );
};

export default Orders;
