import { HiUserCircle, HiOutlineHeart, HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi';
import { Container, Row } from './styles';

const Post = ({ username, content, onDelete, onEdit, id }) => {
  const handleClick = () => {
    {
      onDelete(id);
    }
  };

  const handleEdit = () => {
    {
      onEdit(id);
    }
  };

  return (
    <Container>
      <PersonalInfo name={username} />
      <Row>
        <p>{content}</p>
      </Row>
      <Row>
        {/* <Icon>{isLiked ? <HiHeart /> : <HiOutlineHeart />}</Icon> */}
        <Icon>
          <HiOutlineHeart />
        </Icon>
        <Icon onClick={handleEdit}>
          <HiOutlinePencilAlt />
        </Icon>
        <Icon onClick={handleClick}>
          <HiOutlineTrash />
        </Icon>
      </Row>
    </Container>
  );
};

const Icon = ({ onClick, children }) => {
  return <div onClick={onClick}>{children}</div>;
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
