import styled from "styled-components";
import { ReactComponent as close } from "../../../assets/close.svg";
export const Container = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 25px 5%  50px 5%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  @media (max-width: 768px) {padding: 15px 5%  20px 5%;}
`;
Container.Close = styled.div`
width: 100%;
height: 35px;
display: flex;
justify-content: end;
`

Container.Name = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 38px;
  color: #535353;
  @media (max-width: 768px) {font-size: 28px}
`;
Container.Title = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  margin: 30px 0 0px 0;
  color: #535353;
  @media (max-width: 768px) {font-size: 16px}
  @media (max-width: 500px) {font-size: 10px}
`;
export const Close = styled(close)`
width: 35px;
height: 35px;
fill: red;
`


