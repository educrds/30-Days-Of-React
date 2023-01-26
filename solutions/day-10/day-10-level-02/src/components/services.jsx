import Container from './Container';
import Square from './Square';
import { Title } from './Title';

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
  return (
    <section>
      <Title text='Services' />
      <Container className='services'>
        {servicesList.map(({ ...service }) => <Square key={service.title} {...service} /> )}
      </Container>
    </section>
  );
};

export default Services;
