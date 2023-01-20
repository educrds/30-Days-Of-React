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

const TechList = () => {
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

  return (
    <section>
      <Title text={'Tech Skills'} />
      <Container className={'tech-list'}>
        {techList.map(({ techName, techIcon }) => (
          <Container key={techName} className={`tech-item ${techName}`}>
            {techIcon}
            <p>{techName}</p>
          </Container>
        ))}
      </Container>
    </section>
  );
};

export default TechList;
