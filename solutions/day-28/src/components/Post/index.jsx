import React, { useState } from 'react';
import {
  HiUserCircle,
  HiOutlineHeart,
  HiPencilAlt,
  HiTrash,
  HiOutlineTrash,
  HiHeart,
} from 'react-icons/hi';
import { Container, Row } from './styles';

const Post = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => setIsLiked(prevState => !prevState);
  return (
    <>
      <Container>
        <Row>
          <HiUserCircle className='profile-icon' />
          <h3>John</h3>
        </Row>
        <Row>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, cupiditate obcaecati
            iure suscipit necessitatibus, ex facere ipsam corrupti nam blanditiis placeat, provident
            voluptate! Totam voluptas perspiciatis, corrupti dolore harum officiis.
          </p>
        </Row>
        <Row>
          <div onClick={handleClick}>{isLiked ? <HiHeart /> : <HiOutlineHeart />}</div>
          <div>
            <HiPencilAlt />
          </div>
          <div>
            <HiTrash />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Post;
