import { Title, SmallTitle } from './title';
import Photo from './photo';
import Button from './button';

const ProgressBar = ({ content, percentage, width }) => {
  return (
    <div>
      <div className='skills-description'>
        <h4> {content}</h4>
        <h4>{percentage}</h4>
      </div>
      <div className='progress-bar'>
        <div className='bar' style={{ width }}></div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <div className='about'>
        <Title text={'About me'} />
        <section>
          <div>
            <Photo
              className={'profile-photo'}
              href={'/src/assets/imgs/peeps-avatar.png'}
            />
          </div>
          <div className='info-card'>
            <div className='info-text'>
              <SmallTitle
                content={
                  'I am Bob Doe, web developer from Brazil, South America. I have rich experience in web site design and building and customization, also I am good at WordPress.'
                }
              />

              <Button content={'Download CV'} />
            </div>
            <div className='skills'>
              <ProgressBar content={'Front-End'} percentage={'85%'} width={'85%'} />
              <ProgressBar
                content={'UX/UI Design'}
                percentage={'55%'}
                width={'55%'}
              />
              <ProgressBar content={'Back-End'} percentage={'35%'} width={'35%'} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
