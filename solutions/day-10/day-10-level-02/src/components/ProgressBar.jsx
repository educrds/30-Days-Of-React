import Container from './Container';

const ProgressBar = ({ content, percentage, width }) => {
  return (
    <>
      <Container className='skills-text'>
        <h4> {content}</h4>
        <h4>{percentage}</h4>
      </Container>
      <Container className='progress-bar'>
        <div className='bar' style={{ width }}></div>
      </Container>
    </>
  );
};

export default ProgressBar;
