import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 100px;
  margin: auto;
  /* background: #212121; */
`;

Wrap.Btn = styled.div`
  border: 3px solid #fdfdfd;
  box-sizing: border-box;
  border-radius: 48px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height && `${height}px`};
  :hover {
    background-color: white;
    color: #212121;
  }
  :active {
    transform: scale(0.98);
  }
`;
