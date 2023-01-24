const Language = ({ languages }) => {
  return <>{languages && <p>Language: {Object.values(languages)[0]}</p>}</>;
};

export default Language;
