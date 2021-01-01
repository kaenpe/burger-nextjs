import React from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components'

const StyledList = styled.ul`
  width: 100%;
  margin: auto;
  padding-top: 50px;
  height: ${({ isIndex }) => (isIndex ? '100%' : '300px')};
  text-align: start;
  font-size: 1.2rem;
  grid-column: ${({ isIndex }) => (isIndex ? '2' : 'initial')};
  grid-row: ${({ isIndex }) => (isIndex ? '2' : 'initial')};
  display: grid;
  grid-auto-rows: min-content;
  align-content: 'baseline';
  align-self: center;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  list-style-type:none;
  `
const StyledListElement = styled.li``
const Orders = ({ orders }) => {
  return (
    <>
      {orders.map((data) => {
        return <StyledList key={uuid()}>
          <StyledListElement>Name: {data.contact.name}</StyledListElement>
          <StyledListElement>Email: {data.contact.email}</StyledListElement>
          <StyledListElement>City: {data.contact.city}</StyledListElement>
          <StyledListElement>Street: {data.contact.street}</StyledListElement>
          <StyledListElement>Zipcode: {data.contact.zipcode}</StyledListElement>
          <StyledListElement>Order date: {data.createdAt}</StyledListElement>
          <StyledListElement>Price: {data.price}</StyledListElement>
        </StyledList>;
      })}
    </>
  );
};

export default Orders;
