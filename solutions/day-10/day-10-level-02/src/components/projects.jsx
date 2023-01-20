import { FaLayerGroup, FaCoffee, FaCode, FaUserFriends } from 'react-icons/fa';
import Container from './Container';

const data = [
  { text: 'Item completed', number: 198, icon: <FaLayerGroup /> },
  { text: 'Satisfied clients', number: 200, icon: <FaUserFriends /> },
  { text: 'Cup of coffe', number: 1100, icon: <FaCoffee /> },
  { text: 'Lines code', number: 10000, icon: <FaCode /> },
];

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
      {data.map(({ text, icon, number }) => (
        <Item key={text} text={text} number={number} icon={icon} />
      ))}
    </Container>
  );
};

export default Projects;
