import Container from './Container';
import Photo from './Photo';
import { SmallTitle, Title } from './Title';

const Square = ({ text, content, img, children }) => {
  return (
    <>
      <Container className={'square'}>
        <Photo href={img} />
        <Title text={text} />
        <SmallTitle content={content} />
      </Container>
    </>
  );
};
export default Square;
