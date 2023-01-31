import Container from './Container';
import { SmallTitle, Title } from './Title';
import { VscMortarBoard } from 'react-icons/vsc';

const experienceList = [
  {
    period: '2023 - January',
    title: 'Front-End',
    description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
  },
  {
    period: '2023 - January',
    title: 'Front-End',
    description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
  },
  {
    period: '2023 - January',
    title: 'Front-End',
    description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
  },
];

const Experience = () => {
  return (
    <section>
      <Title text='Experience' />
      <Container className='experience'>
        <div className='square'>
          {experienceList.map(({ ...experience }, index) => (
            <ExpInfo key={index} {...experience} />
          ))}
        </div>
        <div className='square'>
          {experienceList.map(({ ...experience }, index) => (
            <ExpInfo key={index} {...experience} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const ExpInfo = ({ period, title, description }) => {
  return (
    <div className='exp-container'>
      <div className='exp-icon'>
        <VscMortarBoard />
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
