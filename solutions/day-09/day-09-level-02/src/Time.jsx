const Time = () => {
  const date = new Date;
  const hour = date.getHours();

  if ((hour > 0) & (hour < 6)) {
    return <h1>Noon</h1>;
  } else if (hour >= 6 && hour < 12) {
    return <h1>Morning</h1>;
  } else if (hour >= 12 && hour < 18) {
    return <h1>Evening</h1>;
  } else if (hour >= 18) {
    return <h1>Night</h1>;
  }
};

export default Time;
