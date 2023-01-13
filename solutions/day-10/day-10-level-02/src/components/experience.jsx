import Container from './container';
import { SmallTitle, Title } from './title';
import { VscMortarBoard } from 'react-icons/vsc';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-300px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) .3s',
      }}
    >
      <Title text={'Experience'} />
      <Container className={'experience'}>
        <div className='square'>
          <ExpInfo
            month={'2023 - January'}
            title={'Front-End'}
            description={
              'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.'
            }
          />
          <ExpInfo
            month={'2022 - December'}
            title={'Front-End'}
            description={
              'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.'
            }
          />
          <ExpInfo
            month={'2022 - November'}
            title={'UX/UI Designer'}
            description={
              'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.'
            }
          />
        </div>
        <div className='square'>
          <ExpInfo
            month={'2023 - January'}
            title={'Front-End'}
            description={
              'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.'
            }
          />
          <ExpInfo
            month={'2022 - December'}
            title={'Front-End'}
            description={
              'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.'
            }
          />
          <ExpInfo
            month={'2022 - November'}
            title={'Front-End'}
            description={
              'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.'
            }
          />
        </div>
      </Container>
    </section>
  );
};

const ExpInfo = ({ month, title, description }) => {
  return (
    <div className='exp-description'>
      <VscMortarBoard className='exp-icon' />
      <SmallTitle content={month} />
      <Title text={title} />
      <SmallTitle content={description} />
    </div>
  );
};

export default Experience;
