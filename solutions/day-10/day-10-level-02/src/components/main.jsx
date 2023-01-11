import Photo from './photo';
import Title from './title';
import Link from './link';
import Button from './button';
import { FaPinterestP, FaInstagram, FaBehance, FaLinkedin } from 'react-icons/fa';

const Main = () => {
  return (
    <>
      <div className='main'>
        <div className='avatar'>
          <Photo
            className={'profile-photo'}
            href={
              'https://static.vecteezy.com/system/resources/previews/004/819/327/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg'
            }
          />
          <Title text={'Bob Doe'} />
          <p>I'm a Web Development</p>
          <ul className='social-icons'>
            <Link href={'...'} content={<FaInstagram />} />
            <Link href={'...'} content={<FaBehance />} />
            <Link href={'...'} content={<FaPinterestP />} />
            <Link href={'...'} content={<FaLinkedin />} />
          </ul>
          <Button content={'Hire me'} />
        </div>
      </div>
    </>
  );
};
export default Main;
