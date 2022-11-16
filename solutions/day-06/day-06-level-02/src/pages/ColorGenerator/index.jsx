import { GridStyle, Number } from "./styles";
import Title from "../../components/Title";

let colorList = [];

for (let i = 0; i <= 31; i++) {
  const randomCodeColor = `#${Math.floor(Math.random() * 16777215).toString(
    16
  )}`;
  colorList.push(
    <Number backgroundColor={randomCodeColor}>{randomCodeColor}</Number>
  );
}

const ColorGenerator = () => {
  return (
    <>
      <Title subtitle={"color generator"} />
      <GridStyle>{colorList}</GridStyle>
    </>
  );
};

export default ColorGenerator;
