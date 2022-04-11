import React from "react";
import Button from "../../Generic/Button";
import { Container, Close } from "./style";

export const SummaryCard = () => {
  return (
    <Container>
      <Container.Close><Close /></Container.Close>
      <Container.Name>Summary</Container.Name>
      <Container.Title>Almost finished! Just review the information below and submit your transaction.</Container.Title>
    </Container>
  );
};

export default SummaryCard;
