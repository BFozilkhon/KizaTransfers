import React from "react";
import { Link } from "react-router-dom";
import inter from '../../assets/imgs/inter.png'
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

      <Flexing center>
        <Flexing.Text end>1.0000 <b>CAD = </b></Flexing.Text>
        <Flexing.Text> 1.0000 <b>CAD</b></Flexing.Text>
      </Flexing>

      <Flexing column>
        <Flexing center >
          <Flexing.Column>
            <Flexing><Flexing.Test end option><b> Payment Option</b></Flexing.Test></Flexing>
            <Flexing><input for="a" type="radio" name="gender" value="css" /> Interac</Flexing>
            <img className="img" src={inter} alt="" />
            <Flexing mt> <input mb for="a" type="radio" name="gender" value="css" />Interact</Flexing>
          </Flexing.Column>

          <Flexing.Column mr>
            <Flexing.Test top end>4.99CAD</Flexing.Test>
            <Flexing.Test ><b> Transfer Fee</b></Flexing.Test>
          </Flexing.Column>
        </Flexing>


        <Flexing>
          <Flexing.Column>
            <Flexing><Flexing.Test end option><b> Payment Option</b></Flexing.Test></Flexing>
            <Flexing ><input for="a" type="radio" name="gender" value="css" /> Interac</Flexing>
            <Flexing mt> <input for="a" type="radio" name="gender" value="css" />Interact</Flexing>
          </Flexing.Column>
        </Flexing>
      </Flexing>

      <Flexing.Column>
        <Flexing.Blue small>Money available by </Flexing.Blue>
        <Flexing.Blue>Wednesday February 23 </Flexing.Blue>
      </Flexing.Column>

      <Flexing border>
        <b>TOTAL COST</b>
        <b>100 CAD</b>
      </Flexing>
      <Link to={'/receiver'}>
      <Button children={"Next"} />
      </Link>
    </Container>
  );
};

export default Rates;
