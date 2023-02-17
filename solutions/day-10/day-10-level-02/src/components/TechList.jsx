import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SmallTitle, Title } from './TitleVariants';
import { DiNodejsSmall, DiJavascript, DiMysql, DiGithubBadge, DiReact, DiCss3, DiHtml5, DiBootstrap } from 'react-icons/di';
import Container from './Container';
import { getTransformStyle } from '../utils';

const techList = [
  { techName: 'Javascript', techIcon: <DiJavascript /> },
  { techName: 'CSS', techIcon: <DiCss3 /> },
  { techName: 'HTML', techIcon: <DiHtml5 /> },
  { techName: 'Bootstrap', techIcon: <DiBootstrap /> },
  { techName: 'NodeJS', techIcon: <DiNodejsSmall /> },
  { techName: 'Github', techIcon: <DiGithubBadge /> },
  { techName: 'MySQL', techIcon: <DiMysql /> },
  { techName: 'React', techIcon: <DiReact /> },
];

const TechSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section id='skills-section' ref={ref} style={getTransformStyle(isInView, '200px')}>
      <Title text='Tech Skills' />
      <TechList />
    </motion.section>
  );
};

const TechList = () => {
  return (
    <Container className='tech-list'>
      {techList.map(({ techName, techIcon }, i) => (
        <Container key={i} className={techName}>
          {techIcon}
          <SmallTitle content={techName} />
        </Container>
      ))}
    </Container>
  );
};

export default TechSkills;
