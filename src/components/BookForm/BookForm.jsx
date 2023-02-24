import React from "react";
import * as Yup from 'yup';
import { Field, Form, Formik, ErrorMessage } from "formik";

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
      <label>
        Name
        <Field name="name" placeholder="Contact name" />
        <ErrorMessage name="name"/>
      </label>
      <br />
      <label>
        Number
        <Field name="number" placeholder="Phone number" type="tel"/>
        <ErrorMessage name="number"/>
      </label>
      <button type="submit">Add contact</button>
    </Form>
  </Formik>
}