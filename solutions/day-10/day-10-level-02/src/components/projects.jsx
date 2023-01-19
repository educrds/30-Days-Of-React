import Container from './container';
import { FaLayerGroup, FaCoffee, FaCode, FaUserFriends } from 'react-icons/fa';

const Item = ({ number, icon, text }) => {
  return (
    <Container className={'element'}>
      <span>{icon}</span>
      <Container className={'text-container'}>
        <p className='text-title'>{number}</p>
        <p className='text-subtitle'>{text}</p>
      </Container>
    </Container>
  );
};

const Projects = () => {
  return (
    <Container className='container'>
      <Item text={'Item completed'} number={198} icon={<FaLayerGroup />} />
      <Item text={'Satisfied clients'} number={200} icon={<FaUserFriends />} />
      <Item text={'Cup of coffe'} number={1100} icon={<FaCoffee />} />
      <Item text={'Lines code'} number={10000} icon={<FaCode />} />
    </Container>
  );
};

export default Projects;

// colocar sass nesse projeto
// loop nas informaçoes que se repetem, por exemplo, redes sociais
