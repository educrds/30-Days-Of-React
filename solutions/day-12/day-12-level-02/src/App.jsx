import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import validator from 'validator';

const FormExample = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setFormErrors({ ...formErrors, [event.target.name]: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = ['firstName', 'lastName', 'email'];
    const errors = {};
    fields.forEach((field) => {
      if (validator.isEmpty(formData[field])) {
        errors[field] = `O campo não pode estar em branco!`;
      }
      if (field === 'email' && !validator.isEmail(formData[field])) {
        errors[field] = 'O campo email é inválido!';
      }
    });
    setFormErrors(errors);
  };

  return (
    <Form className='text-center' onSubmit={handleSubmit}>
      <Form.Group className='m-auto my-3 w-50 text-start'>
        <Form.Label htmlFor='firstName'>Nome</Form.Label>
        <Form.Control
          type='text'
          name='firstName'
          id='firstName'
          onChange={handleChange}
        />
        {formErrors.firstName && <div>{formErrors.firstName}</div>}
      </Form.Group>
      <Form.Group className='m-auto my-3 w-50 text-start'>
        <Form.Label htmlFor='lastName'>Sobrenome</Form.Label>
        <Form.Control
          type='text'
          name='lastName'
          id='lastName'
          onChange={handleChange}
        />
        {formErrors.lastName && <div>{formErrors.lastName}</div>}
      </Form.Group>
      <Form.Group className='m-auto my-3 w-50 text-start'>
        <Form.Label htmlFor='email'>Email</Form.Label>
        <Form.Control type='email' name='email' id='email' onChange={handleChange} />
        {formErrors.email && <div>{formErrors.email}</div>}
      </Form.Group>
      <Button className='w-50' type='submit' color='primary'>
        Enviar
      </Button>
    </Form>
  );
};

export default FormExample;
