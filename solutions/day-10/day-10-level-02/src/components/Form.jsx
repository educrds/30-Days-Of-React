import { motion, useInView } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import { useRef } from 'react';
import { Title } from './Title';
import Button from './Button';
import Container from './Container';
import emailjs from '@emailjs/browser';

const apiKey = import.meta.env.VITE_API_KEY;

const Form = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [email, setEmail] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isShown, setIsShown] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.send('service_tmp127n', 'template_xtuqxuo', email, apiKey).then(
      () => {
        setIsShown(true);
        setEmail({ name: '',email: '',subject: '',message: '' });
        setTimeout(() => {
          setIsShown(false);
        }, 5000);
      },
      () => setIsShown(false)
    );
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  return (
    <motion.section
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
      }}
    >
      <Title text='Get In Touch' />
      <Container className='contact-container'>
        <Container className='form-info-container'>
          <h3>Let's talk about everything?</h3>
          <p>
            Don't like forms? Send me an <a href='mailto:eduardocardoso1039@gmail.com'>email</a>.
          </p>
        </Container>
        <Container className='form-container'>
          {isShown && (
            <Container className='send-message'>
              <FaCheckCircle />
              <p>Email enviado com sucesso!</p>
            </Container>
          )}
          <form onSubmit={handleSubmit}>
            <Container className='form-row'>
              <Input name='name' placeholder='Your name' onChange={handleChange} value={email.name} />
              <Input name='email' placeholder='Email address' onChange={handleChange} value={email.email} />
            </Container>
            <Container>
              <Input name='subject' placeholder='Subject' onChange={handleChange} value={email.subject} />
            </Container>
            <Container>
              <textarea rows='3' name='message' placeholder='Message' onChange={handleChange} value={email.message}
              ></textarea>
            </Container>
            <Button content='Send message' />
          </form>
        </Container>
      </Container>
    </motion.section>
  );
};

const Input = ({ placeholder, type, ...others }) => (
  <input type='text' placeholder={placeholder} {...others} />
);

export default Form;
