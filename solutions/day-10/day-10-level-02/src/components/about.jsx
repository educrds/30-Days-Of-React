import { Title, SmallTitle } from './Title';
import Photo from './Photo';
import Button from './Button';
import Container from './Container';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ProgressBar = ({ content, percentage, width }) => {
  return (
    <Container>
      <Container className='skills-description'>
        <h4> {content}</h4>
        <h4>{percentage}</h4>
      </Container>
      <Container className='progress-bar'>
        <div className='bar' style={{ width }}></div>
      </Container>
    </Container>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <motion.section
        ref={ref}
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
        }}
      >
        <Title text='About me' />
        <Container className='about'>
          <Container className='about-photo'>
            <Photo className='profile-photo' />
          </Container>
          <Container className='info-card'>
            <Container className='info-text'>
              <SmallTitle content='I am Bob Doe, web developer from Brazil, South America. I have rich experience in web site design and building and customization, also I am good at WordPress.' />

              <Button className='button' content='Download CV' />
            </Container>
            <Container className='skills'>
              <ProgressBar content='Front-End' percentage='85%' width='85%' />
              <ProgressBar content='UX/UI Design' percentage='55%' width='55%' />
              <ProgressBar content='Back-End' percentage='35%' width='35%' />
            </Container>
          </Container>
        </Container>
      </motion.section>
    </>
  );
};

export default About;
