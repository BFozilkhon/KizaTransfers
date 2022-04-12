import styled from "styled-components";
import canada from "../../assets/imgs/canada.png";



export const Container = styled.div`
  width: 100%;
  padding: 21px 31.25px 27px 31.25px;
  background: white;
  margin: auto;
  margin-top: 60px;
  border-radius: 9px;
  @media (max-width: 776px) {
    padding: 19px 29px 25px 29px;
  }
  @media (max-width: 500px) {
    padding: 18px 28px 24px 28px;
  }
`;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 38px;
  color: #535353;
  margin-bottom: 30px;
  @media (max-width: 776px) {
    font-size: 33px;
  }
  @media (max-width: 500px) {
    font-size: 28px;
  }
`;


export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 25px;
  @media (max-width: 776px) {
    display: block;
    margin-bottom: 20px;
  }
  @media (max-width: 500px) {
    display: block;
    margin-bottom: 18px;
  }
`;

export const Box = styled.div`
  width: 48%;
  @media (max-width: 776px) {
    width: 100%;
    margin-bottom: 5px;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 4px;
  }
`;

Box.Name = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color: #000000;
  margin-bottom: 12px;
  @media (max-width: 776px) {
    font-size: 14px;
  }
  @media (max-width: 776px) {
    font-size: 12px;
  }
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
  width: 100%;
  border-bottom: 2px solid #000000;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  color: #000000;
  opacity: 0.8;
  padding-bottom: 15px;
  transition: padding 0.3s ease-in-out;
  :focus {
    padding-bottom: 5px;
  }
  @media (max-width: 776px) {
    font-size: 24px;
    padding-bottom: 13px;
  }
  @media (max-width: 500px) {
    font-size: 19px;
    padding-bottom: 8px;
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

Wrap.AdditionalInformation = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: #000000;
    margin-bottom: 12px;
    margin-top: 40px;
    padding-bottom: 15px;
    border-bottom: 2px solid #000000;
    @media (max-width: 776px) {
      font-size: 19px;
      padding-bottom: 13px;
    }
    @media (max-width: 500px) {
      font-size: 15px;
      padding-bottom: 10px;
    }
`

Flexing.Select__number = styled.select`
    width: 75px;
    height: 50px;
    margin-right: 10px;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    font-size: 20px;
    @media (max-width: 776px) {
      font-size: 18px;
      width: 70px;
      height: 40px;
    }
    @media (max-width: 500px) {
      font-size: 16px;
      width: 67px;
      height: 37px;
    }
`

Flexing.Option = styled.option`
    display: flex;
    justify-content: center;
    align-items: center;   
`

Flexing.Flag = styled.img`
  display: ${({state}) => state ? 'flex' : 'none'};
  width: 40px;
  height: 30px;
  @media (max-width: 776px) {
    width: 35px;
    height: 25px;
  }
  @media (max-width:500px) {
    width: 30px;
    height: 19px;
  }
`

Flexing.Input__select = styled.input`
  outline: none;
  border: none;
  width: 100%;
  border-bottom: 2px solid #000000;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  color: #000000;
  opacity: 0.8;
  padding-bottom: 15px;
  transition: padding 0.3s ease-in-out;
  :focus {
    padding-bottom: 5px;
  }
  @media (max-width: 776px) {
    font-size: 24px;
    padding-bottom: 13px;
  }
  @media (max-width: 500px) {
    font-size: 19px;
    padding-bottom: 8px;
  }
`

Container.Button = styled.div`
  background: #f11e1e;
  border-radius: 48px;
  text-align: center;
  color: #f3f3f3;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: auto;
  width: 280px;
  height: 44px;
  :active {
    transform: scale(0.98);
  }
  @media (max-width: 776px) {
    width: 260px;
    height: 42px;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 40px;
  }
`