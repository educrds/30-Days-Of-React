import Photo from './photo';
import { Title, SmallTitle } from './title';
import List from './list';
import Button from './button';
import { FaPinterestP, FaInstagram, FaBehance, FaLinkedin } from 'react-icons/fa';

const Main = () => {
  return (
    <>
      <div className='main'>
        <div className='avatar'>
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
          <Button content={'Hire me'} />
        </div>
      </div>
    </>
  );
};
export default Main;
