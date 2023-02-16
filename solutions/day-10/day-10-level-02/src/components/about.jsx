import { Title, SmallTitle } from './Title';
import Photo from './Photo';
import Button from './Button';
import Container from './Container';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProgressBar from './ProgressBar';

const skillsPercentage = [
  {
    content: 'Front-End',
    percentage: '85%',
  },
  {
    content: 'UX/UI Design',
    percentage: '45%',
  },
  {
    content: 'Back-End',
    percentage: '35%',
  },
];

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
                <ProgressBar key={i} content={content} percentage={percentage} width={percentage} />
              ))}
            </Container>
          </Container>
        </Container>
      </motion.section>
    </>
  );
};

export default About;
