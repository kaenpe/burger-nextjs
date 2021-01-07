import React, { useContext } from 'react';
import { TextField } from 'formik-material-ui';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { IngredientsContext } from '../../contexts/IngredientsContext';
import { useFirestore } from '../hooks/useFirestore';
import { useRouter } from 'next/router';
import { AuthContext } from '../../contexts/AuthContext';
import uuid from 'react-uuid';
const FormWrapper = styled.div`
  grid-row: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2px solid #ccc;
  box-shadow: 2px 2px 1px #ccc;
  width: 400px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 100px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 50vw;
  align-items: center;
  .MuiButton-root,
  .MuiTextField-root {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 350px;
  }
`;
const Contact = () => {
  const {
    ingredientsOrder,
    ingredients,
    setIngredients,
    setIngredientsOrder,
  } = useContext(IngredientsContext);

  const { auth } = useContext(AuthContext);
  const router = useRouter();
  const order = (contact) => {
    const ingredientsList = {
      list: ingredientsOrder.map((ing) => {
        return { type: ing.type, id: ing.id };
      }),
      price: ingredients.reduce((acc, ing) => {
        return acc + ing.quantity * ing.price;
      }, 0),
    };
    useFirestore('orders', ingredientsList, contact);
  };

  let schema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    city: yup
      .string()
      .min(3, 'Too short')
      .max(50, 'Too long!')
      .required('Required'),
    street: yup
      .string()
      .min(3, 'Too short')
      .max(50, 'Too long!')
      .required('Required'),
    zipcode: yup
      .number()
      .required('Required')
      .typeError('Zip-code must be a number'),
    delivery: yup.string().required('Choose delivery method'),
  });
  return (
    <FormWrapper>
      <h1>Contact Data</h1>

      <Formik
        initialValues={{
          name: '',
          email: auth,
          city: '',
          street: '',
          zipcode: '',
          delivery: 'Fast',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          order(values);
          setIngredients([
            { type: 'Meat', price: 1.3, quantity: 1 },
            { type: 'Cheese', price: 0.4, quantity: 0 },
            { type: 'Salad', price: 0.5, quantity: 0 },
            { type: 'Bacon', price: 0.7, quantity: 0 },
          ]);
          setIngredientsOrder([{ type: 'Meat', id: uuid() }]);
          setTimeout(() => {
            setSubmitting(false);
            router.replace('/');
          }, 500);
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <Field
              component={TextField}
              type='Name'
              name='name'
              label=' Name'
            />
            <Field component={TextField} type='City' name='city' label='City' />

            <Field
              component={TextField}
              type='street'
              name='street'
              label='Street'
            />

            <Field
              component={TextField}
              type='zipcode'
              name='zipcode'
              label='Zipcode'
            />

            <Button variant='contained' type='submit' disabled={isSubmitting}>
              Submit
            </Button>
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  );
};

export default Contact;
