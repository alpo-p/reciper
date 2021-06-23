import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormView } from "./FormView";
import { IRecipeForm } from '../../types';

const initialValues = {
  name: '' ,
  pictureUrl: '',
  preparationTimeInMinutes: 0,
  numberOfServings: 0,
  longDescription: '',
  tags: [],
  ingredients: [],
  stepByStepDirections: []
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validationSchema: yup.ObjectSchema<any> = yup.object().shape({
  name: yup
    .string()
    .required('Please type in name of the recipe'),
  preparationTimeInMinutes: yup
    .number()
    .required(),
  numberOfServings: yup
    .number()
    .required(),
  longDescription: yup
    .string()
    .required('Please type in description of the recipe'),
  tags: yup
    .array()
    .required(),
  ingredients: yup
    .array()
    .required(),
  stepByStepDirections: yup
    .array()
    .required(),
});

export const FormikForm = ({ onSubmit }: { onSubmit: (values: IRecipeForm) => void; }) => (
  <Formik
    initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {({ handleSubmit }) => <FormView onSubmit={handleSubmit} />}
  </Formik>
);
