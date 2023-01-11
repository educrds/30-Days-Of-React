const Button = ({ href, content }) => {
  return (
    <a href={href}>
      <button>{content}</button>
    </a>
  );
};
export default Button;
