import React, { useState } from 'react';
import './App.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log(name, value);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({});
    let hasErrors = false;
    const fields = [
      { name: 'name', message: 'Nome é obrigatório' },
      { name: 'lastName', message: 'Sobrenome é obrigatório' },
      { name: 'email', message: 'E-mail é obrigatório' },
    ];
    fields.forEach((field) => {
      if (!formData[field.name]) {
        setErrors((prevState) => ({
          ...prevState,
          [field.name]: field.message,
        }));
        hasErrors = true;
      }
    });

    if (!hasErrors && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: 'E-mail inválido',
      }));
      hasErrors = true;
    }

    if (!hasErrors) {
      // Enviar o formulário aqui
      alert('Formulário enviado com sucesso!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Nome:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor='lastName'>Sobrenome:</label>
        <input
          type='text'
          id='lastName'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p>{errors.lastName}</p>}
      </div>
      <div>
        <label htmlFor='email'>E-mail:</label>
        <input
          type='text'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button type='submit'>Enviar</button>
    </form>
  );
}

export default Form;
