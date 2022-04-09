import React from "react";
import { Container } from "./style";

export const Button = ({ children, width, height, mr, ml, mt, mb }) => {
  return (
    <Container width={width} height={height} mr={mr} ml={ml} mt={mt} mb={mb}>
      {children}
    </Container>
  );
};

export default Button;
