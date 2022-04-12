import React from "react";
import { Link } from "react-router-dom";
import Button from "../Generic/Button";
import { Container, Flexing } from "./style";

export const Payment = () => {
  return (
    <Container>
      <Container.Header>Payment informantion </Container.Header>
      <Container.Input placeholder="Payment Details" />
      <Flexing>
        <Flexing.ItemWhite>Transaction code : </Flexing.ItemWhite>
        <Flexing.ItemBlack>TK56739</Flexing.ItemBlack>
      </Flexing>
      <Flexing>
        <Flexing.ItemWhite>
          Please send an etransefer and include the Transaction Code in the
          messega
        </Flexing.ItemWhite>
      </Flexing>
      <Flexing>
        <Flexing.ItemBlack>Total : </Flexing.ItemBlack>
        <Flexing.ItemBlack>100 CAD</Flexing.ItemBlack>
      </Flexing>
      <Flexing>
        <Flexing.ItemBlack>Email: </Flexing.ItemBlack>
        <Flexing.ItemBlack>TK@gmail.com</Flexing.ItemBlack>
      </Flexing>
      <Link to={'/summary'}>
      <Button children={"Next"} />
      </Link>
    </Container>
  );
};

export default Payment;
