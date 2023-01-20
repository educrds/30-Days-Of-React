import Container from './Container';
import Square from './Square';
import { Title } from './Title';

const Services = () => {
  return (
    <section>
      <Title text={'Services'} />
      <Container className={'services'}>
        <Square
          img={'https://cdn-icons-png.flaticon.com/64/3829/3829193.png'}
          text={'UX/UI Designer'}
          content={
            'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.'
          }
        />
        <Square
          img={'https://cdn-icons-png.flaticon.com/64/3825/3825908.png'}
          text={'Front-End'}
          content={
            'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.'
          }
        />
        <Square
          img={'https://cdn-icons-png.flaticon.com/64/2581/2581753.png'}
          text={'Back-End'}
          content={
            'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.'
          }
        />
      </Container>
    </section>
  );
};

export default Services;
