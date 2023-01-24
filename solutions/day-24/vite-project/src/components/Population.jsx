const Population = ({ population }) => {
  return (
    <>
      {population > 0 && (
        <p>Population: {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
      )}
    </>
  );
};

export default Population;
