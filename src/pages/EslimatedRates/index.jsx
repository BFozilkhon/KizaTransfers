import React from "react";
import EslimatedRates from '../../component/EslimatedRates'
import { Container, Wrap } from "./style";

export const Eslimated = () => {
  return (
    <Container>
      <Container.Header />
      <Wrap>
        <EslimatedRates />
      </Wrap>
    </Container>
  );
};

export default Eslimated;
