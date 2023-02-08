import { FaSun, FaLink, FaGithub, FaRocketchat, FaCalculator } from 'react-icons/fa';
import Container from './Container';
import { SmallTitle, Title } from './Title';

const projects = [
  {
    title: 'Chat App',
    description: 'Aplicativo de chat em tempo real utilizando Node e a biblioteca Socket.io.',
    icon: <FaRocketchat />,
    techList: ['Node', 'Socket.io'],
    links: {
      github: 'https://github.com/educrds/react-weather-app',
      project: 'https://educrds.github.io/Weather-Project/',
    },
  },
  {
    title: 'Weather App',
    description:
      'Aplicativo para visualizar indicadores do clima das cidades brasileiras, utilizando API Open Weather.',
    icon: <FaSun />,
    techList: ['React', 'Styled components'],
    links: {
      github: 'https://github.com/educrds/react-weather-app',
      project: 'https://educrds.github.io/Weather-Project/',
    },
  },
  {
    title: 'Calculator',
    description: 'Calculadora criada com as principais operações matemáticas e raiz quadrada.',
    icon: <FaCalculator />,
    techList: ['React'],
    links: {
      github: 'https://github.com/educrds/react-weather-app',
      project: 'https://educrds.github.io/Weather-Project/',
    },
  },
];

const Item = () => {
  return projects.map((project, i) => {
    return (
      <div key={i} className='square projects-info'>
        <div className='title'>
          {project.icon}
          <Title text={project.title} />
        </div>
        <div className='technologies'>
          {project.techList.map((tech, i) => {
            return (
              <div className='item' key={i}>
                <SmallTitle content={tech} />
              </div>
            );
          })}
        </div>
        <div className='description'>
          <SmallTitle content={project.description} />
        </div>
        <div className='links'>
          <a href={project.links.github} target='_blank'>
            <FaGithub />
          </a>
          <a href={project.links.project}>
            <FaLink />
          </a>
        </div>
      </div>
    );
  });
};

const Projects = () => {
  return (
    <section>
      <Title text='Projects' />
      <Container className='projects'>
        <Item />
      </Container>
    </section>
  );
};

export default Projects;
