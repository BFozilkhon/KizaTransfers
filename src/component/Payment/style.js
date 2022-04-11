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
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

Flexing.ItemWhite = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 16px;
  color: #000000;
  margin-right: 20px;
`;

Flexing.ItemBlack = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
`;
