import React, { useState } from 'react';
import { HiUserCircle, HiOutlineHeart, HiPencilAlt, HiOutlineTrash, HiHeart } from 'react-icons/hi';
import { Container, Row } from './styles';

const Post = () => {
  const [posts, setPosts] = useState([
    {
      username: 'Anonymous',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, cupiditate obcaecatiiure suscipit necessitatibus, ex facere ipsam corrupti nam blanditiis placeat.',
      isLiked: false,
    },
    {
      username: 'Anonymous',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, cupiditate obcaecatiiure suscipit necessitatibus, ex facere ipsam corrupti nam blanditiis placeat.',
      isLiked: false,
    },
    {
      username: 'Anonymous',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, cupiditate obcaecatiiure suscipit necessitatibus, ex facere ipsam corrupti nam blanditiis placeat.',
      isLiked: false,
    },
  ]);

  const handleClick = index => {
    const newPosts = [...posts];
    newPosts[index].isLiked = !newPosts[index].isLiked;
    setPosts(newPosts);
  };

  return (
    <>
      {posts.map((post, index) => {
        return (
          <Container>
            <PersonalInfo name={post.username} />
            <Row>
              <p>{post.content}</p>
            </Row>
            <SocialIcons onLike={() => handleClick(index)} isLiked={post.isLiked} />
          </Container>
        );
      })}
    </>
  );
};

const SocialIcons = ({ onLike, isLiked, onTrash, onEdit }) => {
  return (
    <Row>
      <div onClick={onLike}>{isLiked ? <HiHeart /> : <HiOutlineHeart />}</div>
      <div onClick={onEdit}><HiPencilAlt /></div>
      <div onClick={onTrash}><HiOutlineTrash /></div>
    </Row>
  );
};

const PersonalInfo = ({ name }) => {
  return (
    <Row>
      <HiUserCircle className='profile-icon' />
      <h3>{name}</h3>
    </Row>
  );
};

export default Post;
