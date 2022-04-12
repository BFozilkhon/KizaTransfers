import React from "react";
import { Link } from "react-router-dom";
import { Container, Close } from "./style";

export const SummaryCard = () => {
  return (
    <Container>
      <Container.Close>
        <Link to={'/home'}>
      <Close />
      </Link>
      </Container.Close>
      <Container.Name>Summary</Container.Name>
      <Container.Title>Almost finished! Just review the information below and submit your transaction.</Container.Title>
    </Container>
  );
};

export default SummaryCard;
