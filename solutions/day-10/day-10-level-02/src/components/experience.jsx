import Container from './container';
import { SmallTitle, Title } from './title';
import { VscMortarBoard } from 'react-icons/vsc';

const Experience = () => {
  return (
    <section>
      <Title text={'Experience'} />
      <Container className={'experience'}>
        <div className='square'>
          <div>
            <VscMortarBoard className='exp-icon' />
            <SmallTitle content={'January'} />
            <Title text={'Front-End Bootcamp '} />
            <SmallTitle
              content={
                'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.'
              }
            />
          </div>
          <div>
            <VscMortarBoard className='exp-icon' />
            <SmallTitle content={'January'} />
            <Title text={'Front-End Bootcamp '} />
            <SmallTitle
              content={
                'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.'
              }
            />
          </div>
          <div>
            <VscMortarBoard className='exp-icon' />
            <SmallTitle content={'January'} />
            <Title text={'Front-End Bootcamp '} />
            <SmallTitle
              content={
                'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.'
              }
            />
          </div>
        </div>
        <div className='square'>
          <div>
            <VscMortarBoard className='exp-icon' />
            <SmallTitle content={'January'} />
            <Title text={'Front-End Bootcamp '} />
            <SmallTitle
              content={
                'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.'
              }
            />
          </div>
          <div>
            <VscMortarBoard className='exp-icon' />
            <SmallTitle content={'January'} />
            <Title text={'Front-End Bootcamp '} />
            <SmallTitle
              content={
                'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.'
              }
            />
          </div>
          <div>
            <VscMortarBoard className='exp-icon' />
            <SmallTitle content={'January'} />
            <Title text={'Front-End Bootcamp '} />
            <SmallTitle
              content={
                'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.'
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
