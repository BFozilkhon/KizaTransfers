import styled from "styled-components";
import canada from "../../assets/imgs/canada.png";

export const Container = styled.div`
  width: 100%;
  padding: 21px 31.25px 27px 31.25px;
  background: white;
  margin-top: 36px;
  border-radius: 9px;
`;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 38px;
  color: #535353;
  margin-bottom: 30px;
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
  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    padding-bottom: 14px;
  }
  :focus {padding-bottom: 5px;}
  @media (max-width: 768px) {font-size: 18px;::placeholder {font-size: 18px;}};
  @media (max-width: 550px) {font-size: 16px; ::placeholder {font-size: 16px;}};
  @media (max-width: 480px) {font-size: 13px;::placeholder {font-size: 13px;}};
  @media (max-width: 400px) {font-size: 10px;::placeholder {font-size: 10px;}};
`;

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: 25px;
  @media (max-width: 900px) {flex-direction: column};
`;

export const Box = styled.div`
  flex: 1;
`;

Box.Name = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #000000;
  margin-bottom: 12px;
`;

Box.ItemA = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  text-decoration-line: underline;
  margin: 15px 0;
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
`;

Flexing.Input = styled.input`
  outline: none;
  border: none;
  width: 70%;
  border-bottom: 2px solid #000000;
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  color: #afafaf;
  padding-bottom: 15px;
  transition: padding 0.3s ease-in-out;
  :focus {
    padding-bottom: 5px;
  }
  @media (max-width: 768px) {font-size: 18px};
  @media (max-width: 550px) {font-size: 16px; margin: 7px 0};
  @media (max-width: 480px) {font-size: 13px};
  @media (max-width: 400px) {font-size: 10px; };
`;

Flexing.Header = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  color: #000000;
  margin-right: 8px;
  @media (max-width: 768px) {font-size: 24px};
  @media (max-width: 650px) {font-size: 22px};
  @media (max-width: 550px) {font-size: 20px;};
  @media (max-width: 480px) {font-size: 18px};

`;

Flexing.Img = styled.div`
  background-image: url(${canada});
  background-size: 100% 100%;
  width: 38px;
  height: 23px;
  @media (max-width: 768px) { width: 32px; height: 18px;};
  @media (max-width: 650px) {width: 28px; height: 15px;};
  @media (max-width: 550px) {width: 24px; height: 12px;}};
`;
