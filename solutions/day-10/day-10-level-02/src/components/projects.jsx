import Container from './container';
import { Title, SmallTitle } from './title';
import { FaLayerGroup, FaCoffee, FaCode, FaUserFriends } from 'react-icons/fa';

const Item = ({ number, icon, text }) => {
  return (
    <Container className='projects-info'>
      <Container className='projects-icon'>{icon}</Container>
      <Container>
        <Title text={number} />
        <SmallTitle content={text} />
      </Container>
    </Container>
  );
};

const Projects = () => {
  return (
    <section className='projects'>
      <Item text={'Item completed'} number={'198'} icon={<FaLayerGroup />} />
      <Item text={'Cup of coffe'} number={'1100'} icon={<FaCoffee />} />
      <Item text={'Lines code'} number={'10.000'} icon={<FaCode />} />
      <Item text={'Satisfied clients'} number={'200'} icon={<FaUserFriends />} />
    </section>
  );
};


export default Projects;
