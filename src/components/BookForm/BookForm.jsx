import React from "react";
import * as Yup from 'yup';
import { Formik, ErrorMessage } from "formik";
import { Field, Form, FormField, SubmitButton } from "./BookForm.style";

const BookSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    number: Yup.string().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, 'Phone number is not valid')
    .required("Required"),
  });

export const BookForm = () => {
    return  <Formik
    initialValues={{
      name: '',
      number: '',
    }}
    validationSchema={BookSchema}
    onSubmit={values => {
      console.log(values);
    }}
    >

    <Form>
      <FormField>
        Name
        <Field name="name" placeholder="Contact name"/>
        <ErrorMessage name="name" component="div"/>
      </FormField>
      <FormField>
        Number
        <Field name="number" placeholder="Phone number" type="tel"/>
        <ErrorMessage name="number" component="div"/>
      </FormField>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  </Formik>
}