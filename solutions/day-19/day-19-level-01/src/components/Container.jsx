import React from 'react';

const Container = ({ children, ...others }) => {
  return <div {...others}>{children}</div>;
};

export default Container;
