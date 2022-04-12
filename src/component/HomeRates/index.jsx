import React from "react";
import { Link } from "react-router-dom";
import Button from "../Generic/Button";
import Cards from "./Cards";
import { Box, Container, Flexing, Wrap } from "./style";

export const HomeRates = () => {
  return (
    <>
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
        </Box>
      </Wrap>     

      <Link to={'/receiver'}>
      <Button bg={'gray'} children={"Estimate Fees"} />
      </Link>
    </Container>

    <Cards name={'Receiver Information'} />
    <Cards name={'Payment Information'} />
    <Cards name={'Froud Protection'} />
    </>
  );
};

export default HomeRates;
