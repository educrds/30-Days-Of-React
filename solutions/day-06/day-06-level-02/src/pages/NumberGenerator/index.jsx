import { GridStyle, Number } from "./styles";
import Title from "../../components/Title";

let numbersList = [];

for (let i = 0; i <= 31; i++) {
  if (isPrime(i)) {
    numbersList.push(<Number className="prime">{i}</Number>);
  } else if (i % 2 === 0) {
    numbersList.push(<Number className="even">{i}</Number>);
  } else {
    numbersList.push(<Number className="odd">{i}</Number>);
  }
}

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}

const NumberGenerator = () => {
  return (
    <>
      <Title subtitle={"number generator"} />
      <GridStyle>{numbersList}</GridStyle>
    </>
  );
};

export default NumberGenerator;
