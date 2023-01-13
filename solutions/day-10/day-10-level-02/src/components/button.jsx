const Button = ({ href, content, onClick, className }) => {
  return (
    <a onClick={onClick} href={href}>
      <button className={className}>{content}</button>
    </a>
  );
};
export default Button;
