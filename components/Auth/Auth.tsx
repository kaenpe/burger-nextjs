import React from 'react';
import { TextField } from 'formik-material-ui';
import Link from 'next/link';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';
interface AuthProps {}

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2px solid #ccc;
  box-shadow: 2px 2px 1px #ccc;
  width: 300px;
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
    width: 250px;
  }
`;
const Auth: React.FC<AuthProps> = () => {
  const router = useRouter();
  let schema = yup.object().shape({
    login: yup
      .string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
    password: yup
      .string()
      .min(8, 'Too short!')
      .max(20, 'Too long!')
      .required('Required'),
  });
  return (
    <FormWrapper>
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
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
              type={router.pathname === '/login' ? 'login' : 'signup'}
              name={router.pathname === '/login' ? 'login' : 'signup'}
              label={router.pathname === '/login' ? 'Login' : 'Signup'}
            />
            <Field
              component={TextField}
              type='password'
              name='password'
              label='Password'
            />
            <Button variant='contained' type='submit' disabled={isSubmitting}>
              {router.pathname === '/login' ? 'Login' : 'Sign up'}
            </Button>
          </StyledForm>
        )}
      </Formik>
      <Link href='/'>
        <a>Create an account</a>
      </Link>
    </FormWrapper>
  );
};

export default Auth;