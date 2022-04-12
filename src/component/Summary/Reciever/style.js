import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 25px 5%  50px 5%;
  @media (max-width: 768px) {  padding: 15px 5%  10px 5%;}
`;

export const Card = styled.div`
  width: 100%;
  display: ${({ flex }) => flex && 'flex'};
  font-style: normal;
  font-size: 20px;
  margin-top: 20px;
  color: #000000;
  transition: padding 0.3s ease-in-out;
  @media (max-width: 768px) {    margin-top: 0}
`;
Card.Navbar = styled.div`
display:flex;
width: 100%;
justify-content: space-between;
border-bottom: 2px solid #000000;
padding-bottom: 14px;
`
Card.Td = styled.div`
  font-size: 20px;
  font-weight: 900;
  color: #000000;
  margin: ${({ price }) => price && '25px 0'};
  @media (max-width: 768px) {font-size: 16px;   margin: ${({ price }) => price && '15px 0'}};
  @media (max-width: 550px) {font-size: 13px};
`
Card.Btn = styled.button`
  font-size: 20px;
  font-weight: 900;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  border-bottom: 2px solid #111;
  @media (max-width: 768px) {font-size: 16px;   margin: ${({ price }) => price && '15px 0'}};
  @media (max-width: 550px) {font-size: 13px};
`
Card.Container = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
font-size: 20px;
font-weight: 0;
`

Card.Container.Name = styled.div`
display: flex;
width: 100%;
margin: 10px 0;
color: #535353;
`

export const Cards = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`
Cards.Price = styled.div`
  width: 100%;
  text-align: ${({ end }) => end && 'end'};
  margin: 20px 0;
  color: #535353;
  @media (max-width: 768px) {font-size: 18px};
  @media (max-width: 550px) {font-size: 16px; margin: 7px 0};
  @media (max-width: 480px) {font-size: 13px};
  @media (max-width: 400px) {font-size: 10px;};
`
Cards.Input = styled.input`
  display: flex;
  outline: none;
  border: none;
  font-size: 20px;
  text-align: end;
  justify-content: end;
  border-bottom: 1px solid #8f8f8f;
  width: 100%;
  margin: 20px 0;
  color: #535353;
  @media (max-width: 768px) {font-size: 18px};
  @media (max-width: 550px) {font-size: 16px; margin: 7px 0};
  @media (max-width: 480px) {font-size: 13px};
  @media (max-width: 400px) {font-size: 10px;};
`




