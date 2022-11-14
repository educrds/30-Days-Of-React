import React from "react";
import ButtonStyle from "./styles";

const Button = ({name}) => {
  return (
    <div>
      <ButtonStyle>
        {name}
      </ButtonStyle>
    </div>
  );
};
export default Button;
