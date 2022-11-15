import styled from "styled-components";
import color from "../../../public/colors.json";

export const FilterContainer = styled.div`
  width: 256px;
  margin-right: 32px;
`;

export const FilterTitle = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

export const Category = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: ${color.neutrals.dark_gray};
  margin: 32px 0 0 0;
`;

export const RadioGroup = styled.div`
  margin: 25px 0 0 0;
`;

export const RadioBtn = styled.input`
  appearance: none;
  margin: 0;
  width: 15px;
  height: 15px;
  border: 2px solid ${color.primary.dark_pink};
  border-radius: 50%;
  cursor: pointer;
  
  :checked {
    ::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 7.5px;
    height: 7.5px;
    border: 1.75px solid white;
  }
    background-color: ${color.primary.dark_pink};
  }
`;

export const Label = styled.label`
  margin-left: 14px;
  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-weight: 400;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 15px 0 15px 0;
`;
