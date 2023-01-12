import Container from './container';
import Square from './square';
import { SmallTitle, Title } from './title';

const Services = () => {
  return (
    <>
      <section>
        <Title text={'Services'} />
        <Container className={'services'}>
          <Square
            img={'https://cdn-icons-png.flaticon.com/64/2901/2901242.png'}
            text={'UX/UI Designer'}
            content={
              'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.'
            }
          />
          <Square
            img={'https://cdn-icons-png.flaticon.com/64/1055/1055666.png'}
            text={'Front-End'}
            content={
              'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.'
            }
          />
          <Square
            img={'https://cdn-icons-png.flaticon.com/64/8992/8992929.png'}
            text={'Back-End'}
            content={
              'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.'
            }
          />
        </Container>
      </section>
    </>
  );
};

export default Services;
