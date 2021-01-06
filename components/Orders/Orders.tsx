import React, { useContext } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import OrderElement from './OrderElement';
import { AuthContext } from '../../contexts/AuthContext';

const StyledList = styled.ul`
  width: 100%;
  margin: auto;
  margin-top: 45px;
  padding: 5px;
  text-align: start;
  justify-content: center;
  font-size: 1.2rem;
  border: 1px solid #bdbdbd;
  list-style-type: none;
  box-shadow: 2px 2px 1px #ccc;
`;

const StyledLoginMessage = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  text-align: center;
  justify-content: center;
  grid-column: 2/4;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
`;

interface OrdersProps {
  orders: Array<{
    createdAt: number;
    price: string;
    contact: any;
  }>;
}
const Orders: React.FC<OrdersProps> = ({ orders }) => {
  const { auth } = useContext(AuthContext);
  return (
    <>
      {auth ? (
        orders
          .filter((order) => order.contact.email === auth)
          .map(
            ({ createdAt, price, contact: { name, email, city, street } }) => {
              return (
                <StyledList key={uuid()}>
                  <OrderElement value={name} text={'Name'} />
                  <OrderElement value={city} text={'City'} />
                  <OrderElement value={street} text={'Street'} />
                  <OrderElement value={price} text={`Price`} />
                  <OrderElement value={createdAt} text={'Ordered'} />
                </StyledList>
              );
            }
          )
      ) : (
        <StyledLoginMessage>
          You need to sign in to see your orders.
        </StyledLoginMessage>
      )}
    </>
  );
};

export default Orders;
