import React, { useContext } from 'react';
import { TextField } from 'formik-material-ui';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { IngredientsContext } from '../../contexts/IngredientsContext';
import { useFirestore } from '../hooks/useFirestore';
import { useRouter } from 'next/router';
const FormWrapper = styled.div`
  grid-row: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 50vw;
`;
const Contact = () => {
  const { ingredientsOrder, ingredients } = useContext(IngredientsContext);
  const router = useRouter();
  const order = () => {
    const ingredientsList = {
      list: ingredientsOrder.map((ing) => {
        return { type: ing.type, id: ing.id };
      }),
      price: ingredients.reduce((acc, ing) => {
        return acc + ing.quantity * ing.price;
      }, 0),
    };
    useFirestore('orders', ingredientsList);
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
          email: '',
          city: '',
          street: '',
          zipcode: '',
          delivery: 'Fast',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          order();
          setTimeout(() => {
            setSubmitting(false);
            router.replace('/');
          }, 500);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <StyledForm>
            <Field
              component={TextField}
              type='Name'
              name='name'
              label=' Name'
            />
            <Field
              component={TextField}
              type='email'
              name='email'
              label='email'
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
