import Container from './container';
import { FaLayerGroup, FaCoffee, FaCode, FaUserFriends } from 'react-icons/fa';

const Item = ({ number, icon, text }) => {
  return (
    <Container className='projects-info'>
      <div>{icon}</div>
      <h1>
        {number}
        <p>{text}</p>
      </h1>
    </Container>
  );
};

const Projects = () => {
  return (
    <Container className='projects'>
      <Item text={'Item completed'} number={198} icon={<FaLayerGroup />} />
      <Item text={'Cup of coffe'} number={1100} icon={<FaCoffee />} />
      <Item text={'Lines code'} number={10.0} icon={<FaCode />} />
      <Item text={'Satisfied clients'} number={200} icon={<FaUserFriends />} />
    </Container>
  );
};

export default Projects;
