import React from 'react';
import { Title } from './Title';
import Container from './Container';

const Information = ({ title, children }) => {
  return (
    <Container className='innerCard'>
      <Title title={title} />
      {children}
    </Container>
  );
};

export default Information;
