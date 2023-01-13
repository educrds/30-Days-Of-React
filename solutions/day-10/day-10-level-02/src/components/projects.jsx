import Container from './container';
import { SmallTitle, Title } from './title';
import { FaLayerGroup, FaCoffee, FaCode, FaUserFriends } from 'react-icons/fa';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Item = ({ number, icon, text }) => {
  return (
    <Container className='projects-info'>
      <div>{icon}</div>
      <Container>
        <Title text={number} />
        <SmallTitle content={text} />
      </Container>
    </Container>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container
      className='projects'
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-300px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) .3s',
      }}
    >
      <Item text={'Item completed'} number={198} icon={<FaLayerGroup />} />
      <Item text={'Cup of coffe'} number={1100} icon={<FaCoffee />} />
      <Item text={'Lines code'} number={10.0} icon={<FaCode />} />
      <Item text={'Satisfied clients'} number={200} icon={<FaUserFriends />} />
    </Container>
  );
};

export default Projects;
