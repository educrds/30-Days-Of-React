const Language = ({ languages }) => {
  if (languages) {
    return <p>Language: {Object.values(languages)[0]}</p>;
  }
  return;
};

export default Language;
