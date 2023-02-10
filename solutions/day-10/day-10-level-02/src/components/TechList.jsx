import React from 'react';
import { Title } from './Title';
import {
  DiNodejsSmall,
  DiJavascript,
  DiMysql,
  DiGithubBadge,
  DiReact,
  DiCss3,
  DiHtml5,
  DiBootstrap,
} from 'react-icons/di';
import Container from './Container';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
    <motion.section
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
      }}
    >
      <Title text='Tech Skills' />
      <Container className='tech-list'>
        {techList.map(({ techName, techIcon }) => (
          <Container key={techName} className={`tech-item ${techName}`}>
            {techIcon}
            <p>{techName}</p>
          </Container>
        ))}
      </Container>
    </motion.section>
  );
};

export default TechSkills;
