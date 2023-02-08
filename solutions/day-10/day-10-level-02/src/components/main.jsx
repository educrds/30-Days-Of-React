import { FaBehance, FaLinkedin, FaGithubAlt } from 'react-icons/fa';
import { Title, SmallTitle } from './Title';
import Container from './Container';
import Photo from './Photo';
import List from './List';
import Button from './Button';

const socialNetworks = [<FaGithubAlt />, <FaLinkedin />];

const Main = () => {
  return (
    <section>
      <Container className='main'>
        <Container className='avatar'>
          <Photo className='profile-photo' href='/src/assets/imgs/peeps-avatar.png' />
          <Title text='Bob Doe' />
          <SmallTitle content="I'm a Web Development" />
          <SocialIcons />
          <Button className='button' content='Hire me' />
        </Container>
      </Container>
    </section>
  );
};

const SocialIcons = () => {
  return (
    <ul className='social-icons'>
      {socialNetworks.map((icon, index) => <List key={index} content={icon} /> )}
    </ul>
  );
};

export default Main;