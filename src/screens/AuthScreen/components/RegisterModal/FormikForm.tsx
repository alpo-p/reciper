import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormView } from "./FormView";
import { IRegister } from '../../../../types';

const initialValues = {
  username: '',
  password: '',
  confirmation: ''
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validationSchema: yup.ObjectSchema<any> = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .test('len', 'Username must be between 1 and 30 characters', x => x
      ? (x.length < 31) : false),
  password: yup
    .string()
    .required('Password is required')
    .test('len', 'Password must be between 5 and 50 characters', x => x
      ? (x.length > 4 && x.length < 51) : false),
  confirmation: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password'), null], `Passwords don't match!`)
});

export const FormikForm = ({ onSubmit }: { onSubmit: (values: IRegister) => void; }) => (
  <Formik
    initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {({ handleSubmit }) => <FormView onSubmit={handleSubmit} />}
  </Formik>
);
