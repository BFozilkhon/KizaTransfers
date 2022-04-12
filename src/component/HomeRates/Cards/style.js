import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 21px 31.25px 27px 31.25px;
  background: white;
  margin-top: 36px;
  border-radius: 9px;
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
    font-style: normal;
  font-weight: 300;
  font-size: 38px;
  color: #535353;
  margin: 20px 0px;
  @media (max-width: 776px) {
    font-size: 33px;
  }
  @media (max-width: 500px) {
    font-size: 28px;
  }
`;