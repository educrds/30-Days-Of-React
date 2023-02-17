import { FaLinkedin, FaGithubAlt } from 'react-icons/fa';
import { Title, SmallTitle } from './TitleVariants';
import Container from './Container';
import Photo from './Photo';
import List from './List';
import { motion } from 'framer-motion';
import { mainCardVariants } from '../utils';

const socialNetworks = [
  { link: 'https://github.com/educrds', icon: <FaGithubAlt /> },
  { link: 'https://www.linkedin.com/in/eduardocrds', icon: <FaLinkedin /> },
];

const Main = () => {
  return (
    <section>
      <motion.div
        className='mainCard'
        variants={mainCardVariants}
        initial='initial'
        animate='animate'
        transition='transition'
      >
        <Container>
          <Photo />
          <Title text='Bob Doe' />
          <SmallTitle content="I'm a Web Development" />
          <SocialIcons />
        </Container>
      </motion.div>
    </section>
  );
};

const SocialIcons = () => {
  return (
    <ul>
      {socialNetworks.map(({ link, icon }, i) => (
        <List key={i} content={icon} href={link} target='_blank' />
      ))}
    </ul>
  );
};

export default Main;
