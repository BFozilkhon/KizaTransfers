import React from "react";
import { Link } from "react-router-dom";
import Button from "../../component/Generic/Button";
import HomeRates from "../../component/HomeRates";
import { Container, Wrap } from "./style";

export const Home = () => {
  return (
    <Container>
      <Container.Header>Send Money</Container.Header>
      <Wrap>
        <Link to={'/rates'}>
        <Button children={"Send to someone new"} />
      </Link>
        <HomeRates />
        <Link to={'/summary'}>
        <Button bg={'gray'} mt={'20'} children={'Review & Send'} />
        </Link>
      </Wrap>
    </Container>
  );
};

export default Home;
