const Season = () => {
  const date = new Date();
  const month = date.getMonth();

  if ([11, 0, 1].includes(month)) {
    return <h1>Winter ❄️</h1>;
  } else if ([2, 3, 4].includes(month)) {
    return <h1>Spring 🌸</h1>;
  } else if ([5, 6, 7].includes(month)) {
    return <h1>Summer ☀️</h1>;
  } else if ([8, 9, 10].includes(month)) {
    return <h1>Autumn 🍁</h1>;
  }
};

export default Season;
