import Container from './Container';
import { SmallTitle, Title } from './Title';
import { SiUdemy, SiUdacity, SiCoursera } from 'react-icons/si';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experienceList = [
  {
    period: 'Janeiro - 2023',
    title: 'The Complete Node.js Developer Course',
    resources: ['Node', 'Express', 'Mongoose', 'Socket.IO', 'REST API'],
    brand: <SiUdemy />,
  },
  {
    period: 'Novembro - 2022',
    title: 'Orange Tech +',
    resources: ['React', 'Typescript'],
    brand: <SiUdacity />,
  },
  {
    period: 'Outubro - 2022',
    title: 'The Complete 2022 Web Development Bootcamp',
    resources: ['React', 'Node', 'Express', 'SQL', 'Mongoose', 'Bootstrap'],
    brand: <SiUdemy />,
  },
  {
    period: 'Outubro - 2022',
    title: 'Google UX Design',
    resources: ['UI/UX designer', 'Interaction designer', 'Visual designer', 'Product designer'],
    brand: <SiCoursera />,
  },
  {
    period: 'Outubro - 2022',
    title: 'The Complete SQL Bootcamp 2022: Go from Zero to Hero',
    resources: ['SQL', 'PostgreSQL'],
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

const ExpInfo = ({ period, title, resources, brand }) => {
  return (
    <div className='exp-container'>
      <div className='exp-icon'>
        {brand}
        <div className='exp-line'></div>
      </div>
      <div>
        <SmallTitle content={period} />
        <Title text={title} />
        <div className='technologies'>
          {resources.map((resource, i) => {
            return (
              <div className='item' key={i}>
                <SmallTitle content={resource} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
