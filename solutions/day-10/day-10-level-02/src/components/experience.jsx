import Container from './Container';
import { SmallTitle, Title } from './Title';
import { SiUdemy, SiUdacity, SiCoursera } from 'react-icons/si';

const experienceList = [
  {
    period: '2023 - January',
    title: 'Front-End',
    description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    brand: <SiUdemy />,
  },
  {
    period: '2023 - January',
    title: 'Front-End',
    description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    brand: <SiUdacity />,
  },
  {
    period: '2023 - January',
    title: 'Front-End',
    description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.',
    brand: <SiCoursera />,
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
