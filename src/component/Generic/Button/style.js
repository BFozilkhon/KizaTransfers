import styled from "styled-components";

export const Container = styled.div`
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
  width: ${({ width }) => (width ? `${width}` : "280px")};
  height: ${({ height }) => (height ? `${height}` : "44px")};
  :active {
    transform: scale(0.98);
  }
`;
