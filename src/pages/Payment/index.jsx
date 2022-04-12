import React from "react";
import Payment from "../../component/Payment";
import { Container, Wrap } from "./style";

export const Payments = () => {
  return (
    <Container>
      <Wrap>
        <Payment/>
      </Wrap>
    </Container>
  );
};

export default Payments;
