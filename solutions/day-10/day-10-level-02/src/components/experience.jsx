import Container from './Container';
import { SmallTitle, Title } from './TitleVariants';
import { SiUdemy, SiUdacity, SiCoursera } from 'react-icons/si';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { getTransformStyle } from '../utils';
import { Technologies } from './Projects';

const experienceList = [
  {
    period: 'Janeiro - 2023',
    title: 'The Complete Node.js Developer Course',
    resources: ['Node', 'MongoDB', 'SocketIO', 'Express', 'REST API'],
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
    resources: ['MySQL', 'React', 'MongoDB', 'Node', 'Bootstrap', 'Express'],
    brand: <SiUdemy />,
  },
  {
    period: 'Outubro - 2022',
    title: 'The Complete SQL Bootcamp 2022: Go from Zero to Hero',
    resources: ['MySQL', 'PostgreSQL'],
    brand: <SiUdemy />,
  },
  {
    period: 'Outubro - 2022',
    title: 'Google UX Design',
    resources: ['UI/UX designer', 'Interaction designer', 'Visual designer', 'Product designer'],
    brand: <SiCoursera />,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section id='experience-section' ref={ref} style={getTransformStyle(isInView, '-200px')}>
      <Title text='Experience' />
      <Container className='experience'>
        <ExperienceList />
      </Container>
    </motion.section>
  );
};

const ExperienceList = () => {
  return (
    <>
      <div className='square'>
        {experienceList.slice(0, 3).map((experience, i) => (
          <ExpInfo key={i} {...experience} />
        ))}
      </div>
      <div className='square'>
        {experienceList.slice(-2).map((experience, i) => (
          <ExpInfo key={i} {...experience} />
        ))}
      </div>
    </>
  );
};

const ExpInfo = ({ period, title, resources, brand }) => {
  return (
    <div className='column'>
      <div className='icon'>
        {brand}
        <div className='line'></div>
      </div>
      <div className='infos'>
        <SmallTitle content={period} />
        <Title text={title} />
        <Technologies techList={resources} />
      </div>
    </div>
  );
};

export default Experience;
