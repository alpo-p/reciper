import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormView } from "./FormView";
import { RegisterAndLoginFormValues } from '../../../types';

const initialValues = {
  username: '',
  password: '',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validationSchema: yup.ObjectSchema<any> = yup.object().shape({
  username: yup
    .string()
    .required('Please type in your username'),
  password: yup
    .string()
    .required('Please type in your password')
});

export const FormikForm = ({ onSubmit }: { onSubmit: (values: RegisterAndLoginFormValues) => void; }) => (
  <Formik
    initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {({ handleSubmit }) => <FormView onSubmit={handleSubmit} />}
  </Formik>
);
