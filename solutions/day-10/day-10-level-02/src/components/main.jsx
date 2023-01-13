import { FaPinterestP, FaInstagram, FaBehance, FaLinkedin } from 'react-icons/fa';
import { Title, SmallTitle } from './title';
import Container from './container';
import Photo from './photo';
import List from './list';
import Button from './button';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Main = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <Container className='main'>
        <Container className='avatar'>
          <Photo
            className={'profile-photo'}
            href={'/src/assets/imgs/peeps-avatar.png'}
          />
          <Title text={'Bob Doe'} />
          <SmallTitle content={"I'm a Web Development"} />
          <ul className='social-icons'>
            <List href={'...'} content={<FaInstagram />} />
            <List href={'...'} content={<FaBehance />} />
            <List href={'...'} content={<FaPinterestP />} />
            <List href={'...'} content={<FaLinkedin />} />
          </ul>
          <Button content={'Hire me'} />
        </Container>
      </Container>
    </section>
  );
};
export default Main;
