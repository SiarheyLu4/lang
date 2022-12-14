import styled from "styled-components";
import baseVars from '../../../stylesheet/vars';


export const Button = styled.button`
  background-color: ${baseVars.colors.firstBtnBg};
  // color: white;
  width: 24px;
  height: 24px;
  border-radius: 35%;
  outline: none;
  border: none;
  font-size: 8px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: 12px;
    margin: 4px;
  }
`;

export const Container = styled.div`
  display: flex;
  margin-left: 1px;
  // justify-content: end;
  // @media screen and (min-width: 768px) {
    
  // }
`;