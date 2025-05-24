import { Field, Form, Formik } from 'formik';
import css from './ContactForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';


const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
  number: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
});

const ContactForm = () => {
    const nameId = useId();
    const numberId = useId();
    const dispatch = useDispatch();


    const handleSumbit = (values, actions) => {
        const contact = { ...values, id: nanoid(10) }      
        dispatch(addContact(contact));
        actions.resetForm();
    };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSumbit}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <div className={css.inputGroup}>
            <label htmlFor={nameId}>Name</label>
            <Field
              name='name'
              id={nameId}
            />
            <p className={css.validationMessage}>
              {touched.name && errors.name}
            </p>
          </div>

          <div className={css.inputGroup}>
            <label htmlFor={numberId}>Number</label>
            <Field
              name='number'
              id={numberId}
            />
            <p className={css.validationMessage}>
              {touched.number && errors.number}
            </p>
          </div>

          <button type='submit'>Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;