const Button = ({ href, content, onClick }) => {
  return (
    <a onClick={onClick} href={href}>
      <button>{content}</button>
    </a>
  );
};
export default Button;
