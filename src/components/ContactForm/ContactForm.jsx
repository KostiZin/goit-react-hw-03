import { Field, Form, Formik } from "formik";
import React from "react";
import css from "./ContactForm.module.css";

const ContactForm = (value) => {
  return (
    <Formik initialValues={{ value }} onSubmit={() => {}}>
      <Form className={css.form}>
        <Field className={css.field} type="text" name="name" />
        <Field className={css.field} type="number" name="number" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
        {/* <label>
            <input type="text" />
            Name
          </label>
          <label>
            <input type="number" />
            Number
          </label>
          <button type="submit">Add contact</button> */}
      </Form>
    </Formik>
  );
};

export default ContactForm;
