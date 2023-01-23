import { useEffect, useState } from 'react';
import { Title, SmallTitle } from './components/Title';
import Information from './components/Information';
import Container from './components/Container';
import useAPI from './services/Api';
import './App.css';

const Cats = () => {
  const [data] = useAPI('/breeds');
  const [catData, setCatData] = useState({});
  const [catImage] = useAPI(`/images/${catData?.reference_image_id}`);
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 67));

  const handleRandom = () => setRandomNumber(Math.floor(Math.random() * 67));

  useEffect(() => {
    setCatData(data[randomNumber]);
  }, [randomNumber, data]);

  return (
    <div>
      <Container className='card'>
        <Title title={catData?.name} />
        <Container className='container'>
          <Container className='catImage'>
            <img src={catImage?.url} alt={catData?.name} />
          </Container>
          <Container className='catDescription'>
            <SmallTitle title={catData?.description} />
          </Container>
        </Container>
        <Container className='infos'>
          <Container className='container'>
            <Information title={'Origin'}>
              <SmallTitle title={catData?.origin} />
            </Information>
            <Information title={'Intelligence Level'}>
              <SmallTitle title={catData?.intelligence} />
            </Information>
          </Container>
          <button onClick={handleRandom}>Random cat</button>
        </Container>
      </Container>
    </div>
  );
};

export default Cats;
