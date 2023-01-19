import { FaPinterestP, FaInstagram, FaBehance, FaLinkedin } from 'react-icons/fa';
import { Title, SmallTitle } from './title';
import Container from './container';
import Photo from './photo';
import List from './list';
import Button from './button';

const Main = () => {
  return (
    <section>
      <Container className='main'>
        <Container className='avatar'>
          <Photo
            className={'profile-photo'}
            href={'/src/assets/imgs/peeps-avatar.png'}
          />
          <Title text={'Bob Doe'} />
          <SmallTitle content={"I'm a Web Development"} />
          <ul className='social-icons'>
            <List href={'...'} content={<FaInstagram />} />
            <List href={'...'} content={<FaBehance />} />
            <List href={'...'} content={<FaPinterestP />} />
            <List href={'...'} content={<FaLinkedin />} />
          </ul>
          <Button className={'button'} content={'Hire me'} />
        </Container>
      </Container>
    </section>
  );
};
export default Main;
