import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 25px 5%  50px 5%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  sup{font-weight:10}
  span{ color: red; border: 1px solid red; margin-bottom: 15px; font-size: 12px; border-radius: 50%; padding:2px; opacity: .5}
  b{color: #111;   text-decoration: underline;}
`;

export const Card = styled.div`
  width: 100%;
  display: ${({ flex }) => flex && 'flex'};
  font-style: normal;
  font-size: 20px;
  margin-top: 20px;
  color: #000000;
  transition: padding 0.3s ease-in-out;
`;
Card.Navbar = styled.div`
  display:flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 2px solid #000000;
  padding-bottom: 14px;
`
Card.Td = styled.div`
  width: 100%;
  font-size: 20px;
  text-align: ${({ end }) => end && 'end'};
  font-weight: 900;
  color: #000000;
  margin: ${({ margin }) => margin ? '10px 0' : '25px 0'};
  @media (max-width: 768px) {font-size: 16px;   margin: ${({ price }) => price && '15px 0'}};
  @media (max-width: 550px) {font-size: 13px};
`
Card.Text = styled.div`
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  color: #8f8f8f;
  margin: ${({ margin }) => margin ? '25px 0 100px 0;' : '5px 0'} ;
  @media (max-width: 768px) {font-size: 14px;   margin: ${({ margin }) => margin ? '15px 0 50px 0;' : '5px 0'}};
  @media (max-width: 550px) {font-size: 12px;  margin: ${({ margin }) => margin ? '10px 0 30px 0;' : '5px 0'}};
  @media (max-width: 480px) {font-size: 10px};
  @media (max-width: 400px) {font-size: 8px;};
`
Card.Btn = styled.button`
  width: ${({ small }) => small ? '300px' : '150px'};
  height: 50px;
  font-size: 18px;
  font-weight: 900;
  color: ${({ small }) => small ? '#fff' : 'red'};
  background: ${({ small }) => small ? 'red' : '#fff'};
  margin-bottom: ${({ small }) => small && '40px'};
  outline: none;
  border-radius: 40px;
  border: 3px solid red;
  margin-left: 20px;
  cursor: pointer;
  @media (max-width: 768px) {  width: ${({ small }) => small ? '160px' : '90px'}; height: 40px; font-size: 15px;};
  @media (max-width: 550px) {  width: ${({ small }) => small ? '120px' : '60px'}; height:30px; font-size: 10px;};
  @media (max-width: 480px) {  width: ${({ small }) => small ? '90px' : '60px'}; height:25px; font-size: 8px;};
  @media (max-width: 400px) {  width: ${({ small }) => small ? '70px' : '50px'}; height:20px; font-size: 6px;};
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
  flex-direction: ${({ flex }) => !flex && 'column'} ;
  align-items: ${({ end }) => end && 'end'};
`
Cards.Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
Cards.Price = styled.div`
  font-size: 20px;
  text-align: ${({ end }) => end && 'end'};
  margin: 20px 0;
  color: #535353;
  @media (max-width: 768px) {font-size: 18px};
  @media (max-width: 550px) {font-size: 16px; margin: 7px 0};
  @media (max-width: 480px) {font-size: 13px};
  @media (max-width: 400px) {font-size: 10px;};
`
Cards.Input = styled.input`
  width: 100%;
  margin: 20px 0;
  display: flex;
  outline: none;
  color: #535353;
  border: none;
  font-size: 20px;
  border-bottom:  #d4d4d4;
  border-bottom: ${({ b }) => b ? '3px solid #8f8f8f' : '1px solid #ababab'} ;
  @media (max-width: 768px) {font-size: 18px; margin: 10px 0;};
  @media (max-width: 550px) {font-size: 16px; margin: 7px 0};
  @media (max-width: 480px) {font-size: 13px; margin: 5px 0};
  @media (max-width: 400px) {font-size: 10px;};
`




