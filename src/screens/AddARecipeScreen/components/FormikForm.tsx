import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormView } from "./FormView";
import { IRecipeForm } from '../../../types';

const initialValues = {
  name: '' ,
  pictureUrl: '',
  preparationTimeInMinutes: '',
  numberOfServings: '',
  longDescription: '',
  tags: '',
  ingredients: '',
  stepByStepDirections: ''
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validationSchema: yup.ObjectSchema<any> = yup.object().shape({
  name: yup
    .string()
    .required('Please type in name of the recipe'),
  preparationTimeInMinutes: yup
    .string()
    .required('Please type in the prep time of the recipe'),
  numberOfServings: yup
    .string()
    .required('Please type in number of servings'),
  longDescription: yup
    .string()
    .required('Please type in description of the recipe'),
  tags: yup
    .string()
    .required('Please type in the tags'),
  ingredients: yup
    .string()
    .required('Please type in ingredients'),
  stepByStepDirections: yup
    .string()
    .required('Please type in the instructions'),
});

interface I {
  onSubmit: (values: IRecipeForm) => void
  addPicture: () => void
}

export const FormikForm = ({ onSubmit, addPicture }: I) => (
  <Formik
    initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {({ handleSubmit }) => <FormView onSubmit={handleSubmit} addPicture={addPicture} />}
  </Formik>
);
