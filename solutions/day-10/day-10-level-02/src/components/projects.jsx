import { FaSun, FaLink, FaGithub, FaRocketchat, FaCalculator, FaGamepad } from 'react-icons/fa';
import { RiNetflixFill } from 'react-icons/ri';
import { GiSnakeTongue } from 'react-icons/gi';
import Container from './Container';
import { SmallTitle, Title } from './Title';

const projects = [
  {
    title: 'Chat App',
    description: 'Aplicativo de chat em tempo real utilizando Node e a biblioteca Socket.io.',
    icon: <FaRocketchat />,
    techList: ['Node', 'Socket.io'],
    links: {
      github:
        'https://github.com/educrds/The-Complete-Node.js-Developer-Course/tree/master/chat-app',
      project: 'http://node-chat-app.herokuapp.com/',
    },
  },
  {
    title: 'Weather App',
    description:
      'Aplicativo para visualizar indicadores do clima das cidades brasileiras, utilizando API Open Weather.',
    icon: <FaSun />,
    techList: ['React', 'Styled components'],
    links: {
      github: 'https://github.com/educrds/Weather-Project',
      project: 'https://educrds.github.io/Weather-Project/',
    },
  },
  {
    title: 'Calculator',
    description: 'Calculadora criada com as principais operações matemáticas e raiz quadrada.',
    icon: <FaCalculator />,
    techList: ['React'],
    links: {
      github: 'https://github.com/educrds/Calculator',
      project: 'https://educrds.github.io/Calculator/',
    },
  },
  {
    title: 'Netflix',
    description:
      'Clone da Netflix com HTML, CSS e JS, usando a API MovieDB para buscar informações para exibição.',
    icon: <RiNetflixFill />,
    techList: ['MovieDB', 'JS'],
    links: {
      github: 'https://github.com/educrds/netflix-clone',
      project: 'https://educrds.github.io/netflix-clone/',
    },
  },
  {
    title: 'BeZoo',
    description:
      'Projeto de uma landing page de um Zoológico feita para o projeto final do Bootcamp beAcademy.',
    icon: <GiSnakeTongue />,
    techList: ['Bootstrap', 'JS'],
    links: {
      github: 'https://github.com/educrds/BeAcademy-Final-Project',
      project: 'https://educrds.github.io/BeAcademy-Final-Project/',
    },
  },
  {
    title: 'Hangman Game',
    description:
      'Jogo da Forca recriado com JS, HTML, CSS e Bootstrap. Dê adeus ao chato e experimente essa nova versão.',
    icon: <FaGamepad />,
    techList: ['Bootstrap', 'JS'],
    links: {
      github: 'https://github.com/educrds/HangMan-Game',
      project: 'https://educrds.github.io/HangMan-Game/',
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
