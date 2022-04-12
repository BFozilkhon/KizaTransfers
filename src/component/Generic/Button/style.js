import styled from "styled-components";

export const Container = styled.div`
  background: ${({bg}) => bg ? `${bg}`: '#f11e1e'};
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
  width: ${({ width }) => (width ? `${width}` : "280px")};
  height: ${({ height }) => (height ? `${height}` : "44px")};
  margin-top: ${({mt}) => mt && `${mt}px`};
  :active {
    transform: scale(0.98);
  }
  @media (max-width: 768px) {
    width: ${({ width }) => (width ? `${width}` : "200px")};
  height: ${({ height }) => (height ? `${height}` : "36px")};
  };
  @media (max-width: 550px) {
  width: ${({ width }) => (width ? `${width}` : "160px")};
  height: ${({ height }) => (height ? `${height}` : "30px")};
  font-size: 12px;

};
  @media (max-width: 480px) {
  width: ${({ width }) => (width ? `${width}` : "120px")};
  height: ${({ height }) => (height ? `${height}` : "26px")};
  font-size: 10px;
};
`;
