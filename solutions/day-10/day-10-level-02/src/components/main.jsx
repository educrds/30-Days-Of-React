import { FaLinkedin, FaGithubAlt } from 'react-icons/fa';
import { Title, SmallTitle } from './Title';
import Container from './Container';
import Photo from './Photo';
import List from './List';
import Button from './Button';
import { motion } from 'framer-motion';

const socialNetworks = [<FaGithubAlt />, <FaLinkedin />];

const Main = () => {
  return (
    <section>
      <motion.div
        className='mainCard'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale: {
            type: 'spring',
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <Container>
          <Photo />
          <Title text='Bob Doe' />
          <SmallTitle content="I'm a Web Development" />
          <SocialIcons />
          <Button content='Hire me' />
        </Container>
      </motion.div>
    </section>
  );
};

const SocialIcons = () => {
  return (
    <ul>
      {socialNetworks.map((icon, index) => (
        <List key={index} content={icon} />
      ))}
    </ul>
  );
};

export default Main;
