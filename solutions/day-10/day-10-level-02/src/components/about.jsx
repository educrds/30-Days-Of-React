import { Title, SmallTitle } from './title';
import Photo from './photo';
import Button from './button';
import Container from './container';

const ProgressBar = ({ content, percentage, width }) => {
  return (
    <Container>
      <Container className='skills-description'>
        <h4> {content}</h4>
        <h4>{percentage}</h4>
      </Container>
      <Container className='progress-bar'>
        <div className='bar' style={{ width }}></div>
      </Container>
    </Container>
  );
};

const About = () => {
  return (
    <>
      <section>
        <Title text={'About me'} />
        <Container className={'about'}>
          <Container className={'about-photo'}>
            <Photo
              className={'profile-photo'}
              href={'/src/assets/imgs/peeps-avatar.png'}
            />
          </Container>
          <Container className='info-card'>
            <Container className='info-text'>
              <SmallTitle
                content={
                  'I am Bob Doe, web developer from Brazil, South America. I have rich experience in web site design and building and customization, also I am good at WordPress.'
                }
              />

              <Button className={'button'} content={'Download CV'} />
            </Container>
            <Container className='skills'>
              <ProgressBar content={'Front-End'} percentage={'85%'} width={'85%'} />
              <ProgressBar
                content={'UX/UI Design'}
                percentage={'55%'}
                width={'55%'}
              />
              <ProgressBar content={'Back-End'} percentage={'35%'} width={'35%'} />
            </Container>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default About;
