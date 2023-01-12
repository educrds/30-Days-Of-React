import Container from './container';
import Photo from './photo';
import { SmallTitle, Title } from './title';

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
