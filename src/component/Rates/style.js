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
  :focus {
    padding-bottom: 5px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: 25px;
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
  margin-top: 15px;
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
`;

Flexing.Header = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  color: #000000;
  margin-right: 8px;
`;

Flexing.Img = styled.div`
  background-image: url(${canada});
  background-size: 100% 100%;
  width: 38px;
  height: 23px;
`;
