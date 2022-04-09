import React from "react";
import Button from "../Generic/Button";
import { Box, Container, Flexing, Wrap } from "./style";

export const Rates = () => {
  return (
    <Container>
      <Container.Header>Estimated Rates & Fees </Container.Header>
      <Container.Input placeholder="Transaction Details"></Container.Input>
      <Wrap>
        <Box>
          <Box.Name>SEND</Box.Name>
          <Flexing>
            <Flexing.Input placeholder="100.00" />
            <Flexing.Header>CAD</Flexing.Header>
            <Flexing.Img />
          </Flexing>
        </Box>
        <Box>
          <Box.Name>RECEIVE</Box.Name>
          <Flexing>
            <Flexing.Input placeholder="100.00" />
            <Flexing.Header>CAD</Flexing.Header>
            <Flexing.Img />
          </Flexing>
          <Box.ItemA>Change Receiver Country</Box.ItemA>
        </Box>
      </Wrap>
      <Button children={"Next"} />
    </Container>
  );
};

export default Rates;
