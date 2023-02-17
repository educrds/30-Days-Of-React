import { Title, SmallTitle } from './Title';
import Photo from './Photo';
import Button from './Button';
import Container from './Container';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProgressBar from './ProgressBar';
import { getTransformStyle } from '../utils';

const skillsPercentage = [
  {
    content: 'Front-End',
    percentage: 85,
  },
  {
    content: 'UX/UI Design',
    percentage: 45,
  },
  {
    content: 'Back-End',
    percentage: 35,
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <motion.section id='about-section' ref={ref} style={getTransformStyle(isInView, '-200px')}>
        <Title text='About me' />
        <Container className='about'>
          <Container className='photo'>
            <Photo />
          </Container>
          <Container className='summary'>
            <Container className='about-text'>
              <SmallTitle content='I am Bob Doe, web developer from Brazil, South America. I have rich experience in web site design and building and customization, also I am good at WordPress.' />

              <Button content='Download CV' />
            </Container>
            <Container className='skills'>
              {skillsPercentage.map(({ content, percentage }, i) => (
                <ProgressBar key={i} content={content} percentage={percentage} />
              ))}
            </Container>
          </Container>
        </Container>
      </motion.section>
    </>
  );
};

export default About;
