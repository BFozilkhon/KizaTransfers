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
  margin-bottom: 30px;
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
  width: 100%;
  display: flex;
  justify-content: ${({ center }) => center && 'center'};
  align-items: ${({ center }) => !center && 'center'};
  border-top: ${({ border }) => border && '1px solid silver'} ;
  justify-content: ${({ border }) => border && 'space-between'} ;
  padding-top: ${({ border }) => border && '20px'} ;
  width: ${({ border }) => border ? '70%' : '100%'} ;
  .img{width:50px;  }
  font-size: 14px;
  margin-top: ${({ mt }) => mt && '40px'};
  @media (max-width: 900px) {
    flex-direction: ${({ column }) => column && 'column'};
  };
  @media (max-width: 768px) {font-size: 18px; img{display: none}};
  @media (max-width: 550px) {font-size: 12px; margin: 7px 0};
  @media (max-width: 480px) {font-size: 12px};
  @media (max-width: 400px) {font-size: 10px; };

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
  @media (max-width: 550px) {width: 24px; height: 12px;};
`
Flexing.Text = styled.div`
width: 100%;
margin-top: ${({ inputs }) => !inputs && '20px'};
text-align: ${({ end }) => end && 'end'};
padding-right: ${({ end }) => end && '10px'};
font-family: 'Inter';
font-weight: 300;
font-size: 24px;
b{font-size: 20px}
 @media (max-width: 768px) {font-size: 20px;b{font-size: 18px}};
  @media (max-width: 650px) {font-size: 18px; b{font-size: 16px}};
  @media (max-width: 550px) {font-size: 16px; b{font-size: 14px}};
`
Flexing.Test = styled.div`
display: flex;
margin-bottom: 10px;
font-size: ${({ end }) => end ? '17px' : '12px'};
margin-top: ${({ top }) => top && '30px'};
justify-content: end;
  @media (max-width: 1000px) {font-size: ${({ end }) => end ? '15px' : '10px'}};
  @media (max-width: 500px) {font-size: ${({ end }) => end ? '14px' : '9px'}};
  @media (max-width: 400px) {font-size: ${({ end }) => end ? '12px' : '8px'}};
`

Flexing.Column = styled.div`
width: 100%;
margin-top: 20px;
display: flex;

margin-right: ${({ mr }) => mr && '75px'};
flex-direction: column;
input{
  width: 16px;
  }
  @media (max-width: 910px) {margin-right: ${({ mr }) => mr && '65px'};};
  @media (max-width: 768px) {margin-right: ${({ mr }) => mr && '25px'};};
  @media (max-width: 768px) {margin-right: ${({ mr }) => mr && '40px 25px 0 0'};};
`
Flexing.Blue = styled.div`
width: 70%;
text-align: start;
font-family: 'Inter';
font-weight: 400;
margin: 10px 0;
font-size: ${({ small }) => small ? '13px' : '16px'};
line-height: 16px;
color: #6391CE;
`
