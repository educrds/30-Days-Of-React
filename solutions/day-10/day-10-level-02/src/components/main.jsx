import { FaPinterestP, FaInstagram, FaBehance, FaLinkedin } from 'react-icons/fa';
import { Title, SmallTitle } from './Title';
import Container from './Container';
import Photo from './Photo';
import List from './List';
import Button from './Button';

const socialNetworks = [
  { icon: <FaInstagram /> },
  { icon: <FaBehance /> },
  { icon: <FaPinterestP /> },
  { icon: <FaLinkedin /> },
];

const Main = () => {
  return (
    <section>
      <Container className='main'>
        <Container className='avatar'>
          <Photo className='profile-photo' href='/src/assets/imgs/peeps-avatar.png' />
          <Title text='Bob Doe' />
          <SmallTitle content="I'm a Web Development" />
          <ul className='social-icons'>
            {socialNetworks.map(({ icon }) => <List content={icon} /> )}
          </ul>
          <Button className='button' content='Hire me' />
        </Container>
      </Container>
    </section>
  );
};
export default Main;
