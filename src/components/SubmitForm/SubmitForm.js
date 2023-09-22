import { Formik } from 'formik';
import { object, string, date } from 'yup';
import { Button, Stack, Form, Container } from 'react-bootstrap';
import { useState } from 'react';
import Message from '../Message/Message';

export default function SubmitForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues = {
    name: '',
    address: '',
    email: '',
    dob: '',
    phone: '',
    hobby: '',
  };

  const schema = object().shape({
    name: string().required('Please enter your name'),
    address: string().required('Please enter your address'),
    email: string()
      .required('Please enter your email')
      .email('We need a valid email address'),
    dob: date()
      .required('Please enter your date of birth')
      .min(new Date(2005, 0, 1), 'You must be at least 18 years old')
      .max(new Date(2053, 0, 1), 'You cannot be older than 30 years old'),
    phone: string()
      .required('Please enter your phone number')
      .min(11, 'Phone number should have at least 11 characters')
      .max(13, 'Phone number should have at most 13 characters'),
    hobby: string().required('Please enter your hobby'),
  });

  function formSubmit(userDetails, actions) {
    setIsSubmitted(true);
    actions.resetForm();
  }

  return (
    <Container>
      {isSubmitted && (
        <Message success="Your details have beet submitted successfully" />
      )}
      <Formik
        initialValues={initialValues}
        onSubmit={formSubmit}
        validationSchema={schema}
      >
        {({ handleSubmit, handleChange, touched, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Stack gap={3} className="mb-5 p-5">
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={handleChange}
                  isValid={touched.name && !errors.name}
                  isInvalid={!!errors.name}
                ></Form.Control>
                <Form.Control.Feedback type={errors.name ? 'invalid' : 'valid'}>
                  {errors.name ? errors.name : 'Looks Good!'}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  autoComplete="address-line1"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  isValid={touched.address && !errors.address}
                  isInvalid={!!errors.address}
                ></Form.Control>
                <Form.Control.Feedback
                  type={errors.address ? 'invalid' : 'valid'}
                >
                  {errors.address ? errors.address : 'Looks Good!'}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  autoComplete="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                  isInvalid={!!errors.email}
                ></Form.Control>
                <Form.Control.Feedback
                  type={errors.email ? 'invalid' : 'valid'}
                >
                  {errors.email ? errors.email : 'Looks Good!'}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  value={values.dob}
                  onChange={handleChange}
                  isValid={touched.dob && !errors.dob}
                  isInvalid={!!errors.dob}
                ></Form.Control>
                <Form.Control.Feedback type={errors.dob ? 'invalid' : 'valid'}>
                  {errors.dob ? errors.dob : 'Looks Good!'}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={handleChange}
                  isValid={touched.phone && !errors.phone}
                  isInvalid={!!errors.phone}
                ></Form.Control>
                <Form.Control.Feedback
                  type={errors.phone ? 'invalid' : 'valid'}
                >
                  {errors.phone ? errors.phone : 'Looks Good!'}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Hobby</Form.Label>
                <Form.Control
                  type="text"
                  name="hobby"
                  value={values.hobby}
                  onChange={handleChange}
                  isValid={touched.hobby && !errors.hobby}
                  isInvalid={!!errors.hobby}
                ></Form.Control>
                <Form.Control.Feedback
                  type={errors.hobby ? 'invalid' : 'valid'}
                >
                  {errors.hobby ? errors.hobby : 'Looks Good!'}
                </Form.Control.Feedback>
              </Form.Group>
              <Button type="submit">Submit</Button>
              <hr />
            </Stack>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
