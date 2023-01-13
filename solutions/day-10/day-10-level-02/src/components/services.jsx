import Container from './container';
import Square from './square';
import { Title } from './title';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(300px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s',
      }}
    >
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
