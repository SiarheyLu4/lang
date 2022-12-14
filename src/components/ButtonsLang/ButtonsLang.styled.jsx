import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.buttons.primary.bg};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  outline: none;
  border: none;
  font-size: 12px;
  cursor: pointer;
  margin: 4px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 20px;

  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: end;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;