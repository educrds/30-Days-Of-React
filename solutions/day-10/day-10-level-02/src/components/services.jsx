import Container from './Container';
import Square from './Square';
import { Title } from './Title';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const servicesList = [
  {
    image: 'https://cdn-icons-png.flaticon.com/64/3829/3829193.png',
    title: 'UX/UI Designer',
    content: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/64/3825/3825908.png',
    title: 'Front-End',
    content: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/64/2581/2581753.png',
    title: 'Back-End',
    content: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
      }}
    >
      <Title text='Services' />
      <Container className='services'>
        {servicesList.map(({ ...service }) => (
          <Square key={service.title} {...service} />
        ))}
      </Container>
    </motion.section>
  );
};

export default Services;
