import Container from './Container';
import { SmallTitle, Title } from './Title';

const Square = ({ title, content, image }) => {
  return (
    <>
      <Container className='square'>
        <img src={image} />
        <Title text={title} />
        <SmallTitle content={content} />
      </Container>
    </>
  );
};
export default Square;
