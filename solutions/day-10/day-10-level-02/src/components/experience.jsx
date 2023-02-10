import Container from './Container';
import { SmallTitle, Title } from './Title';
import { SiUdemy, SiUdacity, SiCoursera } from 'react-icons/si';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experienceList = [
  {
    period: 'Janeiro - 2023',
    title: 'The Complete Node.js Developer Course',
    description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    brand: <SiUdemy />,
  },
  {
    period: 'Novembro - 2022',
    title: 'Orange Tech +',
    description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    brand: <SiUdacity />,
  },
  {
    period: 'Outubro - 2022',
    title: 'The Complete 2022 Web Development Bootcamp',
    description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    brand: <SiUdemy />,
  },
  {
    period: 'Outubro - 2022',
    title: 'Google UX Design',
    description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    brand: <SiCoursera />,
  },
  {
    period: 'Outubro - 2022',
    title: 'The Complete SQL Bootcamp 2022: Go from Zero to Hero',
    description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    brand: <SiUdemy />,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
      }}
    >
      <Title text='Experience' />
      <Container className='experience'>
        <div className='square'>
          {experienceList.slice(0, 3).map(({ ...experience }, index) => (
            <ExpInfo key={index} {...experience} />
          ))}
        </div>
        <div className='square'>
          {experienceList.slice(-2).map(({ ...experience }, index) => (
            <ExpInfo key={index} {...experience} />
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

const ExpInfo = ({ period, title, description, brand }) => {
  return (
    <div className='exp-container'>
      <div className='exp-icon'>
        {brand}
        <div className='exp-line'></div>
      </div>
      <div>
        <SmallTitle content={period} />
        <Title text={title} />
        <SmallTitle content={description} />
      </div>
    </div>
  );
};

export default Experience;
