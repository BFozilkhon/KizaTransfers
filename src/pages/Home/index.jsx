import React from "react";
import Button from "../../component/Generic/Button";
import Navbar from "../../component/Navbar";
import Rates from "../../component/Rates";
import { Container, Wrap } from "./style";

export const Home = () => {
  return (
    <Container>
      <Navbar />
      <Container.Header>Send Money</Container.Header>
      <Wrap>
        <Button children={"Send to someone new"} />
        <Rates />
        <Button children={"Reveiw and Send"} />
      </Wrap>
    </Container>
  );
};

export default Home;
