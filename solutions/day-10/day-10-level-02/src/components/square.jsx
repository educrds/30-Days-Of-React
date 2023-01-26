import Container from './Container';
import Photo from './Photo';
import { SmallTitle, Title } from './Title';

const Square = ({ title, content, image }) => {
  return (
    <>
      <Container className='square'>
        <Photo href={image} />
        <Title text={title} />
        <SmallTitle content={content} />
      </Container>
    </>
  );
};
export default Square;
