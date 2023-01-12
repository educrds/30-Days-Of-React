import { Title, SmallTitle } from './title';

const Projects = ({ number, icon, text }) => {
  return (
      <div className='projects-info'>
        <div className='projects-icon'>{icon}</div>
        <div>
          <Title text={number} />
          <SmallTitle content={text} />
        </div>
      </div>
  );
};

export default Projects;
