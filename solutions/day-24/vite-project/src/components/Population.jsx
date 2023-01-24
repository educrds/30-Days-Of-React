const Population = ({ population }) => {
  if (population > 0) {
    return <p>Population: {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>;
  }
  return;
};

export default Population;
