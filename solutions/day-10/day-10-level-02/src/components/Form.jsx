import Button from './Button';
import Container from './Container';
import { SmallTitle, Title } from './Title';

const Form = () => {
  return (
    <section>
      <Title text='Get In Touch' />
      <Container className='contact-container'>
        <Container className='form-info-container'>
          <h3>Let's talk about everything?</h3>
          <p>Don't like forms? Send me an <span>email</span>.</p>
        </Container>
        <Container className='form-container'>
          <form action=''>
            <Container className='form-row'>
              <Input type='text' placeholder='Your name' />
              <Input type='text' placeholder='Email address' />
            </Container>
            <Container>
              <Input type='text' placeholder='Subject' />
            </Container>
            <Container>
              <textarea rows='4' type='text' placeholder='Message'></textarea>
            </Container>
            <Button content='Send message' />
          </form>
        </Container>
      </Container>
    </section>
  )
};

export default Form;

const Input = ({ placeholder, type, ...others }) => {
  return <input type={type} placeholder={placeholder} {...others} />;
};
