import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 9px;
  padding: 26px 28px 17px 28px;
  margin: 56px 0px;
`;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 38px;
  color: #535353;
  @media (max-width: 768px) {font-size: 28px};
  @media (max-width: 500px) {font-size: 24px};
  @media (max-width: 450px) {font-size: 22px};
  @media (max-width: 400px) {font-size: 20px};
  @media (max-width: 380px) {font-size: 18px};
`;

Container.Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  border-bottom: 2px solid #000000;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  padding-bottom: 14px;
  transition: padding 0.3s ease-in-out;
  margin: 10px 0px 25px 0px;
  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    padding-bottom: 14px;
  }
  :focus {
    padding-bottom: 5px;
  }
  @media (max-width: 768px) {font-size: 18px;::placeholder {font-size: 18px;}};
  @media (max-width: 550px) {font-size: 16px; ::placeholder {font-size: 16px;}};
  @media (max-width: 480px) {font-size: 13px;::placeholder {font-size: 13px;}};
  @media (max-width: 400px) {font-size: 10px;::placeholder {font-size: 10px;}};
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  @media (max-width: 768px) {margin: 10px 0px;};
`;

Flexing.ItemWhite = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 16px;
  color: #000000;
  margin-right: 20px;
  @media (max-width: 500px) {font-size: 14px};
  @media (max-width: 450px) {font-size: 13px};
  @media (max-width: 400px) {font-size: 12px};
  @media (max-width: 380px) {font-size: 11px};
`;

Flexing.ItemBlack = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
  @media (max-width: 500px) {font-size: 16px};
  @media (max-width: 450px) {font-size: 14px};
  @media (max-width: 400px) {font-size: 13px};
  @media (max-width: 380px) {font-size: 12px};
`;
